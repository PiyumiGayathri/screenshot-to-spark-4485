import { useEffect, useMemo, useRef, useState } from "react";
import { X, Calendar, Clock, User, Phone, Check, Loader2 } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Errors = Partial<Record<"name" | "phone" | "date" | "time", string>>;

const pad = (n: number) => String(n).padStart(2, "0");

function toDateInputValue(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function parseDateInput(v: string) {
  const [y = 0, m = 1, d = 1] = v.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatTime(h: number, m: number) {
  const suffix = h >= 12 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:${pad(m)} ${suffix}`;
}

// Mon–Sat: 9.00 AM – 7.00 PM, Sunday: 10.00 AM – 5.00 PM (last slot starts 30 min before closing)
function buildSlots(dateStr: string) {
  if (!dateStr) return [];
  const date = parseDateInput(dateStr);
  const isSunday = date.getDay() === 0;
  const startH = isSunday ? 10 : 9;
  const endH = isSunday ? 17 : 19;
  const now = new Date();
  const isToday = toDateInputValue(now) === dateStr;

  const slots: { label: string; disabled: boolean }[] = [];
  for (let h = startH; h < endH; h++) {
    for (const m of [0, 30]) {
      const slotDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m);
      slots.push({
        label: formatTime(h, m),
        disabled: isToday && slotDate.getTime() <= now.getTime() + 30 * 60 * 1000,
      });
    }
  }
  return slots;
}

function formatLongDate(dateStr: string) {
  return parseDateInput(dateStr).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const inputBase =
  "w-full rounded-md border bg-card py-3 pl-11 pr-4 text-sm text-royal placeholder:text-royal/40 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/20";

export function BookingModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const today = useMemo(() => toDateInputValue(new Date()), [open]);
  const slots = useMemo(() => buildSlots(date), [date]);

  // lock body scroll + Escape to close
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstFieldRef.current?.focus(), 200);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, status]);

  // reset the form a moment after closing
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => {
      setName("");
      setPhone("");
      setDate("");
      setTime("");
      setErrors({});
      setStatus("idle");
    }, 300);
    return () => clearTimeout(t);
  }, [open]);

  function handleClose() {
    if (status === "sending") return;
    onClose();
  }

  function validate(): Errors {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your full name";
    const cleanPhone = phone.replace(/[\s-]/g, "");
    if (!/^(?:\+94|0)\d{9}$/.test(cleanPhone)) e.phone = "Enter a valid number, e.g. 0771234567";
    if (!date) e.date = "Please choose a date";
    else if (date < today) e.date = "Please choose a future date";
    if (!time) e.time = "Please pick a time slot";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("sending");
    // TODO: replace this fake delay with your backend API call
    // await fetch("/api/bookings", { method: "POST", body: JSON.stringify({ name, phone, date, time }) });
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <style>{`
        @keyframes bm-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes bm-up { from { opacity: 0; transform: translateY(40px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes bm-pop { 0% { transform: scale(.6); opacity: 0 } 70% { transform: scale(1.08) } 100% { transform: scale(1); opacity: 1 } }
        @keyframes bm-draw { to { stroke-dashoffset: 0 } }
      `}</style>

      {/* backdrop */}
      <div
        className="absolute inset-0 bg-royal-deep/70 backdrop-blur-sm"
        style={{ animation: "bm-fade .25s ease-out" }}
        onClick={handleClose}
      />

      {/* panel */}
      <div
        className="relative flex max-h-[88dvh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-cream shadow-2xl"
        style={{ animation: "bm-up .35s cubic-bezier(.2,.8,.2,1)" }}
      >
        {/* gold accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-gold/40 via-gold to-gold/40" />

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-3 top-4 z-10 grid h-9 w-9 place-items-center rounded-full text-royal/70 transition hover:bg-plum/10 hover:text-plum"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {status === "success" ? (
          <div className="overflow-y-auto px-6 pb-8 pt-10 text-center sm:px-10">
            <div
              className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-plum text-ivory shadow-lg"
              style={{ animation: "bm-pop .5s ease-out" }}
            >
              <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  style={{ strokeDasharray: 24, strokeDashoffset: 24, animation: "bm-draw .5s .25s ease-out forwards" }}
                />
              </svg>
            </div>
            <h2 id="booking-title" className="mt-6 font-serif text-3xl text-royal">
              Booking Confirmed
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-royal/80">
              Thank you, {name.trim().split(" ")[0]}. Your appointment at Aureole Skin by Renu has been reserved.
            </p>

            <div className="mt-6 rounded-xl border border-gold/40 bg-card p-5 text-left text-sm text-royal shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>{formatLongDate(date)}</span>
              </div>
              <div className="mt-3 flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>{time}</span>
              </div>
              <div className="mt-3 flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>{phone}</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-royal/60">We&apos;ll contact you shortly to confirm the details.</p>
            <button type="button" onClick={onClose} className="btn btn-plum mt-6 w-full !rounded-md">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
            <div className="overflow-y-auto px-6 pb-4 pt-8 sm:px-10">
              <p className="eyebrow !text-[0.65rem] text-plum">Aureole Skin by Renu</p>
              <h2 id="booking-title" className="mt-2 font-serif text-3xl text-royal sm:text-4xl">
                Book Appointment
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-royal/75">
                Reserve your moment of calm. Fill in your details and choose a time that suits you.
              </p>

              <div className="mt-6 space-y-5">
                {/* name */}
                <div>
                  <label htmlFor="bm-name" className="mb-1.5 block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-royal">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" strokeWidth={1.5} />
                    <input
                      id="bm-name"
                      ref={firstFieldRef}
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={`${inputBase} ${errors.name ? "border-red-400" : "border-plum/25"}`}
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* phone */}
                <div>
                  <label htmlFor="bm-phone" className="mb-1.5 block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-royal">
                    Contact Number
                  </label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" strokeWidth={1.5} />
                    <input
                      id="bm-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07X XXX XXXX"
                      className={`${inputBase} ${errors.phone ? "border-red-400" : "border-plum/25"}`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                {/* date */}
                <div>
                  <label htmlFor="bm-date" className="mb-1.5 block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-royal">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" strokeWidth={1.5} />
                    <input
                      id="bm-date"
                      type="date"
                      min={today}
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setTime("");
                      }}
                      className={`${inputBase} ${errors.date ? "border-red-400" : "border-plum/25"}`}
                    />
                  </div>
                  {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                </div>

                {/* time */}
                <div>
                  <span className="mb-1.5 block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-royal">Preferred Time</span>
                  {!date ? (
                    <p className="rounded-md border border-dashed border-plum/25 px-4 py-3 text-xs text-royal/60">
                      Select a date to see available time slots.
                    </p>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {slots.map((s) => {
                        const selected = time === s.label;
                        return (
                          <button
                            key={s.label}
                            type="button"
                            disabled={s.disabled}
                            onClick={() => setTime(s.label)}
                            className={`rounded-md border px-1 py-2 text-xs transition ${
                              selected
                                ? "border-plum bg-plum text-ivory shadow-md"
                                : "border-plum/25 bg-card text-royal hover:border-plum"
                            } ${s.disabled ? "cursor-not-allowed opacity-35 line-through hover:border-plum/25" : ""}`}
                          >
                            {s.label}
                          </button>
                        );
                      })}
                      {slots.length > 0 && slots.every((s) => s.disabled) && (
                        <p className="col-span-full text-xs text-royal/60">No slots left today. Please pick another date.</p>
                      )}
                    </div>
                  )}
                  {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time}</p>}
                </div>
              </div>
            </div>

            {/* sticky footer */}
            <div className="border-t border-plum/10 bg-cream px-6 py-4 sm:px-10">
              <button type="submit" disabled={status === "sending"} className="btn btn-plum w-full !rounded-md disabled:opacity-80">
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4" /> Send
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Menu, Phone, Mail, MapPin, Smile, Star, Heart, Quote } from "lucide-react";
import { BookingModal } from "@/components/pages/BookingModal";

import heroImg from "@/assets/book-hero.jpg";
import renuImg from "@/assets/renu-book.jpg";
import flowersImg from "@/assets/flowers-candle.jpg";
import igNeon from "@/assets/ig-neon.jpg";
import igFacial from "@/assets/t-skin-therapy.jpg";
import igStones from "@/assets/t-massage.jpg";
import igShelf from "@/assets/ig-shelf.jpg";

import {
  Logo,
  LogoMark,
  Ornament,
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  LotusLineArt,
  FlowerLineArt,
  IconFaceHands,
  IconFaceSparkle,
  IconBack,
  IconFaceDots,
  IconLotus,
} from "@/components/brand";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Aureole Skin by Renu" },
      {
        name: "description",
        content:
          "Book your skin therapy, glow facial, relaxation massage or wellness ritual at Aureole Skin by Renu, Colombo.",
      },
      { property: "og:title", content: "Book Appointment — Aureole Skin by Renu" },
      {
        property: "og:description",
        content: "A luxury wellness and skin therapy sanctuary dedicated to your inner peace and outer glow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookAppointment,
});

const NAV = ["Home", "About", "Treatments", "Packages", "Gallery", "Contact"];

const TREATMENTS = [
  { title: "Skin Therapy", text: "Personalized treatments to restore, repair and rejuvenate your skin.", Icon: IconFaceHands },
  { title: "Glow Facials", text: "Advanced facials for a natural glow and healthy radiant skin.", Icon: IconFaceSparkle },
  { title: "Relaxation Massage", text: "Therapeutic massages to relax your body and refresh your mind.", Icon: IconBack },
  { title: "Acne & Skin Clarity", text: "Targeted care for acne, blemishes and uneven skin concerns.", Icon: IconFaceDots },
  { title: "Wellness Rituals", text: "Holistic rituals for total well-being and inner balance.", Icon: IconLotus },
];

const STATS = [
  { n: "500+", label: "Happy Clients", Icon: Smile },
  { n: "20+", label: "Treatments", Icon: LotusLineArt },
  { n: "5", label: "Years Experience", Icon: Star },
  { n: "100%", label: "Personalized Care", Icon: Heart },
];

function WhatsAppPill({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 rounded-full bg-card py-1.5 pl-4 pr-1.5 text-xs text-royal shadow-[var(--shadow-soft)] hover:brightness-[0.98] ${className}`}
    >
      Chat on WhatsApp
      <span className="grid h-7 w-7 place-items-center rounded-full bg-whatsapp text-card">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
    </button>
  );
}

function BookAppointment() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="bg-cream text-royal">
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      {/* NAV */}
      <header className="sticky top-0 z-30 bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-4 px-5 py-3 lg:px-10">
          <Logo tone="dark" tagline size="sm" />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) =>
              n === "Home" ? (
                <Link key={n} to="/" className="nav-link text-royal hover:text-plum">
                  {n}
                </Link>
              ) : (
                <span key={n} className="nav-link cursor-pointer text-royal hover:text-plum">
                  {n}
                </span>
              ),
            )}
          </nav>
          <button type="button" onClick={() => setBookingOpen(true)} className="btn btn-plum hidden !rounded-sm lg:inline-flex">
            Book Appointment
          </button>
          <button type="button" aria-label="Menu" className="text-royal lg:hidden">
            <Menu className="h-6 w-6" strokeWidth={1.4} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden" style={{ background: "var(--gradient-book-hero)" }}>
        <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[68%]">
          <img
            src={heroImg}
            alt="Facial mask being applied with a brush by a therapist in a lavender glove"
            width={1600}
            height={896}
            className="h-full w-full object-cover object-[70%_center] opacity-25 lg:opacity-100"
          />
          <div className="absolute inset-0 hidden lg:block" style={{ background: "var(--gradient-fade-left)" }} />
        </div>
        <div className="absolute inset-0 -z-10 bg-lavender-deep/50 lg:hidden" />

        <div className="mx-auto max-w-[1300px] px-6 py-16 text-center lg:px-10 lg:py-24 lg:text-left">
          <div className="mx-auto max-w-md lg:mx-0">
            <p className="eyebrow !text-[0.65rem] text-plum">Welcome to Aureole Skin by Renu</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-royal sm:text-6xl">
              Healing Hands
              <br />
              Peaceful Minds
            </h1>
            <div className="mt-6 flex justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gold">
                <span className="h-px w-12 bg-current" />
                <LotusLineArt className="h-3 w-4" />
                <span className="h-px w-12 bg-current" />
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-royal/85 lg:mx-0">
              A luxury wellness and skin therapy sanctuary dedicated to your inner peace and outer glow.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button type="button" onClick={() => setBookingOpen(true)} className="btn btn-plum w-56 !rounded-sm sm:w-auto">
                Book Appointment
              </button>
              <button type="button" className="btn btn-outline-plum w-56 !rounded-sm sm:w-auto">
                Explore Treatments
              </button>
            </div>
            <div className="mt-8 flex justify-center gap-2 lg:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-card" />
              <span className="h-1.5 w-1.5 rounded-full bg-card/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-card/60" />
            </div>
          </div>
        </div>
        <WhatsAppPill className="absolute bottom-5 right-6 hidden lg:flex" />
      </section>

      {/* SIGNATURE TREATMENTS */}
      <section className="px-5 py-12 lg:px-10">
        <div className="text-center">
          <p className="eyebrow text-royal">Our Signature Treatments</p>
          <Ornament className="mt-2" width="w-10" />
        </div>
        <div className="mx-auto mt-8 flex max-w-[1100px] snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {TREATMENTS.map(({ title, text, Icon }) => (
            <article
              key={title}
              className="flex w-[70%] shrink-0 snap-center flex-col items-center rounded-md bg-card px-5 py-7 text-center shadow-[var(--shadow-card)] sm:w-[40%] lg:w-auto"
            >
              <Icon className="h-16 w-16 text-plum" />
              <h3 className="mt-5 font-sans text-[0.72rem] font-semibold tracking-[0.08em] text-royal uppercase">{title}</h3>
              <p className="mt-3 text-[0.72rem] leading-relaxed text-royal/80">{text}</p>
              <span className="mt-auto flex cursor-pointer items-center gap-1 pt-5 text-[0.65rem] font-medium tracking-[0.12em] text-royal uppercase hover:text-plum">
                View More <ChevronRight className="h-3 w-3" />
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="grid lg:grid-cols-[47%_1fr]">
        <div className="relative min-h-[360px]">
          <img src={renuImg} alt="Renu in her candlelit treatment room" loading="lazy" width={1024} height={832} className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="bg-cream px-6 py-12 sm:px-12 lg:px-16">
          <p className="eyebrow !text-[0.65rem] text-plum">About Renu</p>
          <div className="mt-1 flex items-center gap-2 text-gold">
            <span className="h-px w-8 bg-current" />
            <LotusLineArt className="h-2.5 w-3.5" />
            <span className="h-px w-8 bg-current" />
          </div>
          <h2 className="mt-4 font-serif text-3xl text-royal sm:text-4xl">Beauty. Healing. Balance.</h2>
          <p className="mt-4 max-w-lg text-[0.8rem] leading-relaxed text-royal/85">
            With a passion for holistic skincare and wellness, I believe that true beauty begins with balance. Every treatment
            is thoughtfully designed to nourish your skin, calm your mind and uplift your spirit.
          </p>
          <p className="mt-3 max-w-lg text-[0.8rem] leading-relaxed text-royal/85">
            My mission is to create a serene space where you can relax, restore and glow – inside and out.
          </p>
          <p className="mt-4 font-script text-4xl text-plum">Renu</p>
          <button type="button" className="btn btn-outline-plum mt-5 !rounded-sm">
            Know More About Me
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-plum text-ivory">
        <div className="mx-auto grid max-w-[1100px] px-8 py-8 lg:grid-cols-4">
          {STATS.map(({ n, label, Icon }, i) => (
            <div
              key={label}
              className={`flex items-center gap-5 py-5 lg:flex-col lg:gap-1 lg:py-2 ${i > 0 ? "lg:border-l lg:border-ivory/25" : ""}`}
            >
              <div className="flex items-center gap-3 lg:gap-4">
                <Icon className="h-11 w-11 shrink-0 text-gold lg:h-7 lg:w-7 lg:text-ivory/90" strokeWidth={1.2} />
                <span className="hidden font-serif text-3xl lg:inline">{n}</span>
              </div>
              <div className="lg:text-center">
                <span className="block font-serif text-4xl lg:hidden">{n}</span>
                <span className="text-xs text-ivory/85">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL BANNER */}
      <section className="relative overflow-hidden bg-lavender-deep">
        <img
          src={flowersImg}
          alt="Purple flowers beside a lit candle and lavender towel"
          loading="lazy"
          width={1280}
          height={576}
          className="absolute inset-y-0 right-0 hidden h-full w-[60%] object-cover md:block"
        />
        <div className="absolute inset-y-0 right-0 hidden w-[60%] md:block" style={{ background: "var(--gradient-fade-lavender)" }} />
        <FlowerLineArt className="pointer-events-none absolute -left-10 bottom-0 h-56 w-auto text-card/50" />
        <div className="relative mx-auto max-w-[1100px] px-6 py-12 lg:px-10">
          <div className="max-w-sm">
            <Quote className="h-8 w-8 rotate-180 fill-current text-plum/70" strokeWidth={0} />
            <p className="mt-3 text-[0.95rem] leading-relaxed text-royal">
              Aureole Skin by Renu is more than a salon, it&apos;s a healing experience. I always leave feeling relaxed,
              refreshed and glowing!
            </p>
            <p className="mt-4 text-xs text-royal/80">– Dilini Fernando</p>
            <div className="mt-1 flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="px-5 py-10 lg:px-10">
        <div className="text-center">
          <p className="eyebrow text-royal">Instagram</p>
          <Ornament className="mt-2" width="w-8" />
        </div>
        <div className="mx-auto mt-6 grid max-w-[1150px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          <img src={igNeon} alt="Purple treatment room with neon glow" loading="lazy" width={912} height={736} className="aspect-[4/3] w-full rounded-md object-cover" />
          <img src={igFacial} alt="Facial treatment" loading="lazy" width={944} height={704} className="aspect-[4/3] w-full rounded-md object-cover" />
          <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-md bg-gradient-to-br from-plum to-royal text-ivory">
            <LogoMark className="h-16 w-16" />
            <span className="mt-1 font-serif text-xs tracking-[0.12em] uppercase">Aureole Skin by Renu</span>
            <span className="text-[0.45rem] tracking-[0.16em] uppercase opacity-80">Healing Hands • Peaceful Minds</span>
          </div>
          <img src={igStones} alt="Hot stones with lavender and candles" loading="lazy" width={944} height={704} className="aspect-[4/3] w-full rounded-md object-cover" />
          <img src={igShelf} alt="Shelf of skincare products, candles and flowers" loading="lazy" width={912} height={736} className="col-span-2 aspect-[8/3] w-full rounded-md object-cover sm:col-span-1 sm:aspect-[4/3]" />
        </div>
        <div className="mt-6 flex justify-center">
          <button type="button" className="btn btn-plum !rounded-sm">
            Follow Us on Instagram
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-royal-deep text-ivory/85">
        <LotusLineArt className="pointer-events-none absolute -bottom-4 right-6 h-40 w-56 text-ivory/10" />
        <div className="relative mx-auto grid max-w-[1150px] gap-10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div className="lg:border-r lg:border-ivory/15 lg:pr-6">
            <Logo tone="light" tagline size="sm" />
            <p className="mt-5 max-w-[14rem] text-xs leading-relaxed">
              Your sanctuary for advanced skin therapies and holistic wellness.
            </p>
          </div>
          <div className="lg:border-r lg:border-ivory/15 lg:px-6">
            <h4 className="font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-ivory uppercase">Quick Links</h4>
            <ul className="mt-3 space-y-1.5 text-xs">
              {["Home", "About", "Treatments", "Packages", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  {l === "Home" ? (
                    <Link to="/" className="hover:text-gold">
                      {l}
                    </Link>
                  ) : (
                    <span className="cursor-pointer hover:text-gold">{l}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:border-r lg:border-ivory/15 lg:px-6">
            <h4 className="font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-ivory uppercase">Contact Us</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li className="flex gap-2.5"><Phone className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.4} />+94 71 123 4567</li>
              <li className="flex gap-2.5"><Mail className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.4} />hello@aureoleskin.lk</li>
              <li className="flex gap-2.5"><MapPin className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.4} />Colombo, Sri Lanka</li>
            </ul>
            <p className="mt-4 text-xs text-ivory">Follow Us</p>
            <div className="mt-2 flex gap-3">
              {[InstagramIcon, FacebookIcon, WhatsAppIcon].map((I, k) => (
                <span key={k} className="grid h-7 w-7 cursor-pointer place-items-center rounded-full border border-ivory/50 hover:border-gold hover:text-gold">
                  <I className="h-3.5 w-3.5" />
                </span>
              ))}
            </div>
          </div>
          <div className="lg:pl-6">
            <h4 className="font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-ivory uppercase">Opening Hours</h4>
            <div className="mt-3 space-y-3 text-xs">
              <p>
                <span className="text-ivory">Monday - Saturday</span>
                <br />
                9.00 AM - 7.00 PM
              </p>
              <p>
                <span className="text-ivory">Sunday</span>
                <br />
                10.00 AM - 5.00 PM
              </p>
            </div>
          </div>
        </div>
        <p className="relative border-t border-ivory/10 py-4 text-center text-[0.65rem] text-ivory/70">
          © 2024 Aureole Skin by Renu. All Rights Reserved.
        </p>
      </footer>

      <WhatsAppPill className="fixed bottom-5 right-5 z-40 !bg-plum !text-ivory lg:hidden" />
    </div>
  );
}

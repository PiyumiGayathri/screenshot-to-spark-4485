import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookingModal } from "@/components/pages/BookingModal";
import {
  ChevronsDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

import heroImg from "@/assets/home-hero.jpg";
import tGlow from "@/assets/t-glow-facial.jpg";
import tTherapy from "@/assets/t-skin-therapy.jpg";
import tMassage from "@/assets/t-massage.jpg";
import tAcne from "@/assets/t-acne.jpg";
import tWellness from "@/assets/t-wellness.jpg";
import renuImg from "@/assets/renu-home.jpg";
import sBed from "@/assets/s-bed.jpg";
import sLounge from "@/assets/s-lounge.jpg";
import sCurtains from "@/assets/s-curtains.jpg";
import sMirror from "@/assets/s-mirror.jpg";
import av1 from "@/assets/avatar-1.jpg";
import av2 from "@/assets/avatar-2.jpg";
import av3 from "@/assets/avatar-3.jpg";

import {
  Logo,
  Ornament,
  FlowerLineArt,
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  IconExpert,
  IconProducts,
  IconHolistic,
  IconHygiene,
  BadgeFacial,
  BadgeTherapy,
  BadgeMassage,
  BadgeAcne,
  BadgeWellness,
} from "@/components/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aureole Skin by Renu — Luxury Skin & Wellness Therapy" },
      {
        name: "description",
        content:
          "Healing Hands • Peaceful Minds. Luxury skin and wellness therapy in Colombo for radiant skin and inner balance.",
      },
      { property: "og:title", content: "Aureole Skin by Renu — Luxury Skin & Wellness Therapy" },
      {
        property: "og:description",
        content: "Luxury skin and wellness therapy in Colombo for radiant skin and inner balance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV = ["Home", "About", "Treatments", "Packages", "Gallery", "Testimonials", "Contact"];

const TREATMENTS = [
  { title: "Glow Facial", text: "Deep cleansing and radiance boosting for healthy glowing skin.", img: tGlow, Icon: BadgeFacial },
  { title: "Skin Therapy", text: "Advanced solutions for acne, pigmentation and sensitive skin.", img: tTherapy, Icon: BadgeTherapy },
  { title: "Relaxation Massage", text: "Soothing massages to relieve stress and restore energy.", img: tMassage, Icon: BadgeMassage },
  { title: "Acne & Blemish Control", text: "Targeted care to clear acne and prevent future breakouts.", img: tAcne, Icon: BadgeAcne },
  { title: "Wellness Rituals", text: "Holistic rituals for mind, body and soul rejuvenation.", img: tWellness, Icon: BadgeWellness },
];

const FEATURES = [
  { label: "Expert Care", Icon: IconExpert },
  { label: "Premium Products", Icon: IconProducts },
  { label: "Holistic Approach", Icon: IconHolistic },
  { label: "Hygiene & Safety", Icon: IconHygiene },
];

const SANCTUARY = [sBed, sLounge, sCurtains, tWellness, sMirror];

const REVIEWS = [
  { text: "Renu's hands are magical! My skin has never felt so healthy and glowing. The experience is so relaxing.", name: "Dinithi W.", img: av1 },
  { text: "The best facial I've ever had in Sri Lanka. Professional, caring and the results are amazing!", name: "Tharushi A.", img: av2 },
  { text: "A serene place with expert care. I always leave feeling refreshed and rejuvenated.", name: "Nadee K.", img: av3 },
];

function Eyebrow({ children, tone = "dark" }: { children: string; tone?: "dark" | "light" }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className={`eyebrow font-serif !text-[0.8rem] ${tone === "light" ? "text-gold" : "text-royal"}`}>{children}</span>
      <Ornament width="w-10" />
    </div>
  );
}

function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="bg-cream">
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      {/* HERO */}
      <section className="relative isolate overflow-hidden text-ivory">
        <img
          src={heroImg}
          alt="Woman relaxing during a head massage with lavender and candles"
          width={1920}
          height={800}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[30%_center]"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero-overlay)" }} />

        <header className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-5 lg:px-10">
          <Logo tone="light" />
          <nav className="hidden items-center gap-7 xl:flex">
            {NAV.map((n, i) =>
              n === "Home" ? (
                <Link key={n} to="/" className="nav-link text-gold">
                  {n}
                </Link>
              ) : (
                <span key={n} className={`nav-link cursor-pointer text-ivory/90 hover:text-gold ${i === 0 ? "" : ""}`}>
                  {n}
                </span>
              ),
            )}
          </nav>
          <div className="flex items-center gap-5">
            <button type="button" onClick={() => setBookingOpen(true)} className="btn btn-gold hidden sm:inline-flex">
              Book Appointment
            </button>
            <button type="button" aria-label="Menu" className="text-ivory/90 hover:text-gold">
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
        </header>

        <div className="mx-auto grid max-w-[1400px] px-5 pb-20 pt-16 sm:pt-20 lg:grid-cols-2 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="hidden lg:block" />
          <div className="text-center">
            <h1 className="gold-text font-serif text-4xl font-medium tracking-[0.08em] uppercase sm:text-6xl lg:text-[4.2rem] leading-none">
              Healing Hands
            </h1>
            <p className="mt-4 font-serif text-xl tracking-[0.28em] text-gold uppercase sm:text-3xl">
              • Peaceful Minds •
            </p>
            <p className="mt-6 font-serif text-lg leading-snug text-ivory/95 sm:text-2xl">
              Luxury Skin &amp; Wellness Therapy
              <br />
              for Radiant Skin and Inner Balance
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/book-appointment" className="btn btn-gold !text-[0.8rem] !px-7 !py-3.5">
                Book Appointment
              </Link>
              <button type="button" className="btn btn-outline-light !text-[0.8rem] !px-7 !py-3.5">
                Explore Treatments
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-4 flex justify-center text-ivory/80">
          <ChevronsDown className="h-6 w-6" strokeWidth={1.2} />
        </div>
      </section>

      {/* SIGNATURE TREATMENTS */}
      <section className="px-5 py-14 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <Eyebrow>Our Signature Treatments</Eyebrow>
          <h2 className="mt-3 text-center font-serif text-3xl text-royal sm:text-4xl">Relax. Restore. Rejuvenate.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {TREATMENTS.map(({ title, text, img, Icon }) => (
              <article
                key={title}
                className="flex flex-col overflow-hidden rounded-lg border border-gold/40 border-b-2 border-b-gold bg-cream shadow-[var(--shadow-card)]"
              >
                <div className="relative">
                  <img src={img} alt={title} loading="lazy" width={944} height={704} className="h-48 w-full object-cover" />
                  <span className="absolute -bottom-6 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border-2 border-cream bg-plum text-gold-soft">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-10 text-center">
                  <h3 className="font-serif text-xl tracking-[0.06em] text-royal uppercase leading-tight">{title}</h3>
                  <p className="mt-3 font-serif text-[1.02rem] leading-snug text-royal/80">{text}</p>
                  <span className="mt-auto pt-5 nav-link cursor-pointer text-royal hover:text-plum">Learn More</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="grid lg:grid-cols-[40%_1fr]">
        <div className="relative min-h-[420px]">
          <img src={renuImg} alt="Renu, founder of Aureole Skin" loading="lazy" width={832} height={1024} className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>
        <div className="relative overflow-hidden bg-lavender px-6 py-14 sm:px-12 lg:px-16">
          <FlowerLineArt className="pointer-events-none absolute -right-6 top-6 h-[90%] w-auto text-plum/20" />
          <div className="relative max-w-xl">
            <p className="eyebrow font-serif !text-[0.8rem] text-royal">About Renu</p>
            <h2 className="mt-3 font-serif text-3xl text-royal sm:text-4xl">Passion. Care. Expertise.</h2>
            <p className="mt-5 text-sm leading-relaxed text-royal/85">
              With a deep passion for skin health and holistic wellness, I believe that true beauty comes from balance. At Aureole
              Skin by Renu, every treatment is personalized to help you look radiant and feel your best.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {FEATURES.map(({ label, Icon }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <Icon className="h-11 w-11 text-gold" />
                  <span className="mt-2 text-[0.65rem] font-medium tracking-[0.08em] text-royal uppercase">{label}</span>
                </div>
              ))}
            </div>
            <button type="button" className="btn btn-plum mt-9 !rounded-md">
              Read More About Me
            </button>
          </div>
        </div>
      </section>

      {/* SANCTUARY */}
      <section className="bg-royal px-3 pb-8 pt-10 sm:px-4">
        <Eyebrow tone="light">Our Sanctuary</Eyebrow>
        <h2 className="mt-2 text-center font-serif text-3xl text-ivory sm:text-4xl">A Place for Your Well-Being</h2>
        <div className="mx-auto mt-6 grid max-w-[1600px] grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {SANCTUARY.map((src, i) => (
            <div key={i} className={`overflow-hidden border border-gold/60 ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
              <img src={src} alt="Aureole Skin sanctuary interior" loading="lazy" width={944} height={704} className="h-44 w-full object-cover sm:h-52" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 py-12 lg:px-10">
        <Eyebrow>Client Love</Eyebrow>
        <h2 className="mt-2 text-center font-serif text-3xl text-royal sm:text-4xl">What My Clients Say</h2>
        <div className="mx-auto mt-8 flex max-w-[1400px] items-center gap-3 sm:gap-6">
          <button type="button" aria-label="Previous" className="shrink-0 text-gold hover:text-plum">
            <ChevronLeft className="h-8 w-8" strokeWidth={1.2} />
          </button>
          <div className="grid min-w-0 flex-1 gap-5 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <figure
                key={r.name}
                className={`relative flex items-center gap-5 rounded-lg border border-plum/25 bg-card px-5 py-6 ${i > 0 ? "hidden md:flex" : ""}`}
              >
                <img src={r.img} alt={r.name} loading="lazy" width={816} height={816} className="h-16 w-16 shrink-0 rounded-full object-cover" />
                <div className="min-w-0">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-2 text-xs leading-relaxed text-royal/85">{r.text}</blockquote>
                  <figcaption className="mt-3 text-xs text-royal">— {r.name}</figcaption>
                </div>
                <span className="absolute right-5 top-4 font-serif text-4xl leading-none text-royal">”</span>
              </figure>
            ))}
          </div>
          <button type="button" aria-label="Next" className="shrink-0 text-gold hover:text-plum">
            <ChevronRight className="h-8 w-8" strokeWidth={1.2} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-royal text-ivory/85">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-10">
          <div className="flex flex-col items-center lg:items-start lg:border-r lg:border-ivory/15 lg:pr-8">
            <Logo tone="light" />
            <p className="mt-3 text-[0.7rem] text-gold">Healing Hands • Peaceful Minds</p>
            <div className="mt-4 flex gap-3">
              {[FacebookIcon, InstagramIcon, WhatsAppIcon].map((I, k) => (
                <span key={k} className="grid h-7 w-7 cursor-pointer place-items-center rounded-full border border-gold text-gold hover:bg-gold hover:text-royal">
                  <I className="h-3.5 w-3.5" />
                </span>
              ))}
            </div>
          </div>
          <div className="lg:border-r lg:border-ivory/15 lg:px-10">
            <h4 className="font-serif text-sm tracking-[0.18em] text-ivory uppercase">Quick Links</h4>
            <ul className="mt-3 space-y-1 text-xs">
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
          <div className="lg:border-r lg:border-ivory/15 lg:px-10">
            <h4 className="font-serif text-sm tracking-[0.18em] text-ivory uppercase">Contact Us</h4>
            <ul className="mt-3 space-y-2.5 text-xs">
              <li className="flex gap-2.5"><Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />+94 77 123 4567</li>
              <li className="flex gap-2.5"><Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />hello@aureoleskinbyrenu.lk</li>
              <li className="flex gap-2.5"><MapPin className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />123, Flower Road,<br />Colombo, Sri Lanka</li>
              <li className="flex gap-2.5"><Clock className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />Mon - Sun : 10.00 AM - 7.00 PM</li>
            </ul>
          </div>
          <div className="lg:pl-10">
            <h4 className="font-serif text-sm tracking-[0.18em] text-ivory uppercase">Book Appointment</h4>
            <p className="mt-3 text-xs leading-relaxed">
              Your journey to healthy skin
              <br />
              and inner peace begins here.
            </p>
            <button type="button" onClick={() => setBookingOpen(true)} className="btn btn-gold mt-4 !rounded-md">
              Book Now <WhatsAppIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="pb-4 text-center text-[0.65rem] text-ivory/70">© 2024 Aureole Skin by Renu. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

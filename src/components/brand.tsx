import type { SVGProps } from "react";
import { Link } from "@tanstack/react-router";

type IconProps = SVGProps<SVGSVGElement>;

/* ---------- Logo ---------- */

export function LogoMark({ className = "", ...props }: IconProps) {
  const leaves = Array.from({ length: 28 });
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" {...props}>
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="33" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
      {leaves.map((_, i) => {
        const a = (i / leaves.length) * 360;
        return (
          <g key={i} transform={`rotate(${a} 50 50)`}>
            <path
              d="M50 9 C 53 5, 56 7, 54 11 C 52 13, 50 12, 50 9 Z"
              fill="currentColor"
              opacity={i % 2 ? 0.75 : 1}
            />
            <circle cx="50" cy="12.5" r="0.9" fill="currentColor" />
          </g>
        );
      })}
      {[0, 90, 180, 270].map((a) => (
        <g key={a} transform={`rotate(${a} 50 50)`}>
          <path d="M50 2 L52.4 6 L50 10 L47.6 6 Z" fill="currentColor" />
        </g>
      ))}
      <text
        x="50"
        y="63"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="40"
        fontWeight="500"
        fill="currentColor"
      >
        R
      </text>
    </svg>
  );
}

export function Logo({
  tone = "light",
  tagline = false,
  size = "md",
}: {
  tone?: "light" | "dark";
  tagline?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const color = tone === "light" ? "text-ivory" : "text-plum";
  const markSize = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-11 w-11" : "h-14 w-14";
  const nameSize = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-xl";
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${color}`} aria-label="Aureole Skin by Renu – Home">
      <LogoMark className={`${markSize} shrink-0`} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif ${nameSize} tracking-[0.06em] uppercase`}>Aureole Skin</span>
        <span className="mt-1 flex items-center gap-1.5 font-serif text-[0.8em] tracking-[0.2em] uppercase">
          <span className="h-px w-4 bg-current opacity-70" />
          <span className={size === "sm" ? "text-xs" : "text-sm"}>by Renu</span>
          <span className="h-px w-4 bg-current opacity-70" />
        </span>
        {tagline && (
          <span className="mt-1 text-[0.5rem] tracking-[0.18em] uppercase opacity-80 font-sans">
            Healing Hands • Peaceful Minds
          </span>
        )}
      </span>
    </Link>
  );
}

/* ---------- Ornamental divider ---------- */

export function Ornament({ className = "", width = "w-16" }: { className?: string; width?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 text-gold ${className}`}>
      <span className={`h-px ${width} bg-current`} />
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
        <path d="M10 1c1.2 2.6 1.2 5 0 7.2C8.8 6 8.8 3.6 10 1Z" />
        <path d="M10 19c-1.2-2.6-1.2-5 0-7.2 1.2 2.2 1.2 4.6 0 7.2Z" />
        <path d="M1 10c2.6-1.2 5-1.2 7.2 0C6 11.2 3.6 11.2 1 10Z" />
        <path d="M19 10c-2.6 1.2-5 1.2-7.2 0 2.2-1.2 4.6-1.2 7.2 0Z" />
        <circle cx="10" cy="10" r="1.4" />
      </svg>
      <span className={`h-px ${width} bg-current`} />
    </div>
  );
}

/* ---------- Social / brand icons ---------- */

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.55V4.45A20.6 20.6 0 0 0 14.3 4.3c-2.2 0-3.7 1.34-3.7 3.8v2.4H8.1v3h2.5V21h2.9Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------- Line-art illustrations ---------- */

export function FlowerLineArt({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 200 320" className={className} fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <path d="M100 320 C 98 260, 104 200, 96 140" />
      <path d="M98 230 C 70 220, 52 196, 46 170 C 72 176, 92 196, 98 230Z" />
      <path d="M100 260 C 130 252, 150 230, 158 204 C 130 208, 108 228, 100 260Z" />
      <path d="M96 140 C 70 130, 60 100, 72 70 C 84 92, 96 112, 96 140Z" />
      <path d="M96 140 C 122 132, 138 104, 130 72 C 114 92, 100 114, 96 140Z" />
      <path d="M96 140 C 80 110, 82 72, 100 46 C 112 76, 110 110, 96 140Z" />
      <path d="M96 140 C 60 140, 34 120, 26 96 C 56 98, 82 116, 96 140Z" />
      <path d="M96 140 C 132 142, 160 124, 172 98 C 140 98, 112 116, 96 140Z" />
      <path d="M150 180 C 160 150, 180 136, 196 132 C 188 156, 172 172, 150 180Z" />
      <circle cx="150" cy="40" r="10" />
      <path d="M150 50 C 148 90, 130 110, 116 120" />
      <path d="M140 34 C 130 20, 136 8, 150 6 C 164 8, 170 20, 160 34" />
    </svg>
  );
}

export function LotusLineArt({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" {...props}>
      <path d="M32 8c6 7 6 20 0 30-6-10-6-23 0-30Z" />
      <path d="M32 38c-3-9-10-17-20-20 0 11 8 19 20 20Z" />
      <path d="M32 38c3-9 10-17 20-20 0 11-8 19-20 20Z" />
      <path d="M32 38c-8-3-17-4-26-1 6 5 16 6 26 1Z" />
      <path d="M32 38c8-3 17-4 26-1-6 5-16 6-26 1Z" />
    </svg>
  );
}

/* Treatment line icons (Book Appointment page) */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Face() {
  return (
    <>
      <path d="M22 14c0-6 4.5-9 10-9s10 3 10 9v6c0 7-4.5 12-10 12s-10-5-10-12v-6Z" />
      <path d="M22 16c3-1 7-4 9-8 2 4 7 7 11 8" />
      <path d="M27 21c1 .6 2 .6 3 0M34 21c1 .6 2 .6 3 0" />
      <path d="M30 27c1.3.8 2.7.8 4 0" />
      <path d="M28 32v4c-6 1-10 3-12 7M36 32v4c6 1 10 3 12 7" />
    </>
  );
}

export function IconFaceHands(props: IconProps) {
  return (
    <svg viewBox="0 0 64 56" {...stroke} {...props}>
      <Face />
      <path d="M14 24c2 6 6 11 10 13M50 24c-2 6-6 11-10 13" />
      <path d="M14 24c-1 -3 1-5 3-3M50 24c1-3-1-5-3-3" />
      <path d="M52 6l1 2 2 1-2 1-1 2-1-2-2-1 2-1Z" />
      <path d="M11 8l.8 1.6 1.6.8-1.6.8L11 12.8l-.8-1.6-1.6-.8 1.6-.8Z" />
    </svg>
  );
}

export function IconFaceSparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 64 56" {...stroke} {...props}>
      <Face />
      <path d="M50 6l1.2 2.6 2.6 1.2-2.6 1.2L50 13.6l-1.2-2.6-2.6-1.2 2.6-1.2Z" />
      <path d="M13 14l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9Z" />
    </svg>
  );
}

export function IconBack(props: IconProps) {
  return (
    <svg viewBox="0 0 64 56" {...stroke} {...props}>
      <circle cx="32" cy="10" r="5" />
      <path d="M29 15v4c-7 1-12 4-13 10l-2 18M35 15v4c7 1 12 4 13 10l2 18" />
      <path d="M32 22v24M24 30c2 4 2 9 0 13M40 30c-2 4-2 9 0 13" />
      <path d="M10 20l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9Z" />
      <path d="M54 34l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9Z" />
    </svg>
  );
}

export function IconFaceDots(props: IconProps) {
  return (
    <svg viewBox="0 0 64 56" {...stroke} {...props}>
      <Face />
      <circle cx="16" cy="24" r=".9" fill="currentColor" />
      <circle cx="13" cy="28" r=".9" fill="currentColor" />
      <circle cx="17" cy="31" r=".9" fill="currentColor" />
      <circle cx="48" cy="24" r=".9" fill="currentColor" />
      <circle cx="51" cy="28" r=".9" fill="currentColor" />
      <circle cx="47" cy="31" r=".9" fill="currentColor" />
    </svg>
  );
}

export function IconLotus(props: IconProps) {
  return <LotusLineArt {...props} />;
}

/* About feature icons (Home) */

export function IconExpert(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...stroke} {...props}>
      <circle cx="20" cy="12" r="5" />
      <path d="M11 32c0-6 4-10 9-10s9 4 9 10" />
      <path d="M8 26c3 1 5 3 6 6M32 26c-3 1-5 3-6 6" />
      <path d="M31 7l.8 1.6 1.6.8-1.6.8L31 11.8l-.8-1.6-1.6-.8 1.6-.8Z" />
    </svg>
  );
}

export function IconProducts(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...stroke} {...props}>
      <rect x="10" y="16" width="10" height="17" rx="2" />
      <path d="M13 16v-4h4v4M14 12V8h2" />
      <path d="M22 24h10v9H22z" />
      <path d="M24 24v-2h6v2" />
      <path d="M26 6c3 2 4 5 2 8-3-2-4-5-2-8Z" />
    </svg>
  );
}

export function IconHolistic(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...stroke} {...props}>
      <path d="M20 34V20" />
      <path d="M20 22c-6 0-9-4-9-9 6 0 9 4 9 9Z" />
      <path d="M20 18c0-5 3-9 8-10 1 6-3 10-8 10Z" />
      <path d="M8 30c4-2 8-2 12 0 4-2 8-2 12 0" />
      <path d="M10 34c3-1 7-1 10 0 3-1 7-1 10 0" />
    </svg>
  );
}

export function IconHygiene(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...stroke} {...props}>
      <circle cx="20" cy="20" r="14" />
      <path d="M20 10l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6l8-3Z" />
      <path d="M16 20l3 3 5-6" />
    </svg>
  );
}

/* Signature treatment badge icons (Home) */

export function BadgeFacial(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path d="M11 11c0-4 2.5-6 5-6s5 2 5 6v3c0 4-2.5 7-5 7s-5-3-5-7v-3Z" />
      <path d="M13 21v3l-5 3M19 21v3l5 3" />
      <path d="M8 14c1 3 3 5 5 6M24 14c-1 3-3 5-5 6" />
    </svg>
  );
}

export function BadgeTherapy(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path d="M8 22l8-14 8 14Z" />
      <path d="M12 22v4h8v-4" />
      <path d="M16 12v6M13 16h6" />
    </svg>
  );
}

export function BadgeMassage(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <circle cx="16" cy="8" r="3" />
      <path d="M10 26c0-6 2.5-12 6-12s6 6 6 12" />
      <path d="M7 26h18" />
      <path d="M12 17l-4 3M20 17l4 3" />
    </svg>
  );
}

export function BadgeAcne(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path d="M16 26c-6-3-9-8-9-13 4 0 7 2 9 5 2-3 5-5 9-5 0 5-3 10-9 13Z" />
      <path d="M16 18V8" />
      <circle cx="11" cy="9" r=".8" fill="currentColor" />
      <circle cx="21" cy="9" r=".8" fill="currentColor" />
    </svg>
  );
}

export function BadgeWellness(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <rect x="9" y="12" width="5" height="13" rx="1" />
      <rect x="18" y="9" width="5" height="16" rx="1" />
      <path d="M11.5 12V9M20.5 9V6" />
      <path d="M11.5 8c1 -1 1-2 0-3-1 1-1 2 0 3ZM20.5 5c1-1 1-2 0-3-1 1-1 2 0 3Z" />
      <path d="M6 25h20" />
    </svg>
  );
}

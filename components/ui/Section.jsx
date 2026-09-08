"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * The page is a stack of tone bands. Assigning a tone is the ONLY thing a
 * section has to decide about its own colour — headings, body copy, borders,
 * cards and badges all read from the tone map below, so a section can be
 * flipped from light to dark without touching its markup.
 */
export const tones = {
  light: {
    section: "bg-white",
    heading: "text-slate-900",
    body: "text-slate-500",
    muted: "text-slate-400",
    card: "bg-white border-slate-200/80 hover:border-slate-300",
    cardSoft: "bg-slate-50/80 border-slate-200/60",
    border: "border-slate-200",
    divide: "divide-slate-200/70",
    badge: "bg-brand-50 border-brand-200/60 text-brand-700",
    badgeIcon: "text-brand-600",
    accent: "text-brand-600",
  },
  tint: {
    section: "bg-slate-50",
    heading: "text-slate-900",
    body: "text-slate-500",
    muted: "text-slate-400",
    card: "bg-white border-slate-200/80 hover:border-slate-300",
    cardSoft: "bg-white border-slate-200/60",
    border: "border-slate-200",
    divide: "divide-slate-200/70",
    badge: "bg-white border-brand-200/60 text-brand-700",
    badgeIcon: "text-brand-600",
    accent: "text-brand-600",
  },
  dark: {
    section: "bg-slate-950",
    heading: "text-white",
    body: "text-slate-400",
    muted: "text-slate-500",
    card: "bg-white/[0.04] border-white/10 hover:border-white/20",
    cardSoft: "bg-white/[0.03] border-white/10",
    border: "border-white/10",
    divide: "divide-white/10",
    badge: "bg-white/5 border-white/15 text-brand-200",
    badgeIcon: "text-brand-500",
    accent: "text-brand-500",
  },
  brand: {
    section: "bg-brand-600",
    heading: "text-white",
    body: "text-emerald-50/90",
    muted: "text-emerald-100/70",
    card: "bg-white/10 border-white/20 hover:border-white/30",
    cardSoft: "bg-white/10 border-white/20",
    border: "border-white/20",
    divide: "divide-white/20",
    badge: "bg-white/15 border-white/25 text-white",
    badgeIcon: "text-white",
    accent: "text-white",
  },
};

export const useTone = (tone = "light") => tones[tone] ?? tones.light;

/** Shaemerald entrance animation — sections reveal once as they scroll into view. */
export const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const revealStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

/**
 * Section — one tone band. Handles the vertical rhythm, the max-width
 * container, and the decorative glow so no section has to reinvent them.
 */
export function Section({
  id,
  tone = "light",
  className = "",
  containerClassName = "",
  glow = true,
  children,
}) {
  const t = useTone(tone);
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden px-4 py-10  ${t.section} ${className}`}
    >
      {glow && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full blur-3xl ${
            isDark ? "bg-brand-600/15" : "bg-brand-400/[0.07]"
          }`}
        />
      )}
      <div className={`relative z-10 mx-auto w-full max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

/** Pill badge used above every section title. */
export function Badge({ tone = "light", icon: Icon, children, className = "" }) {
  const t = useTone(tone);
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 ${t.badge} ${className}`}
    >
      {Icon && <Icon size={12} className={t.badgeIcon} />}
      <span className="text-[10px] font-black uppercase tracking-wide">{children}</span>
    </span>
  );
}

/**
 * SectionHeader — badge + title + subtitle. Every section used to hand-roll
 * this with slightly different sizes; now there is one.
 */
export function SectionHeader({
  tone = "light",
  badge,
  badgeIcon,
  title,
  accent,
  subtitle,
  align = "center",
  className = "",
}) {
  const t = useTone(tone);
  const centeemerald = align === "center";

  return (
    <motion.div
      variants={revealStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`${centeemerald ? "mx-auto max-w-7xl text-start" : "max-w-7xl "} mb-12 lg:mb-16 ${className}`}
    >
      {badge && (
        <motion.div variants={reveal}>
          <Badge tone={tone} icon={badgeIcon}>
            {badge}
          </Badge>
        </motion.div>
      )}
      <motion.h2
        variants={reveal}
        className={`mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl ${t.heading}`}
      >
        {title} {accent && <span className={t.accent}>{accent}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={reveal}
          className={`mt-4 text-sm leading-relaxed font-medium sm:text-base  max-w-5xl`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

/** Surface card — one radius scale, one border treatment, tone aware. */
export function Card({ tone = "light", soft = false, className = "", children, ...rest }) {
  const t = useTone(tone);
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${soft ? t.cardSoft : t.card} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Buttons — three intents, consistent pill shape and lift-on-hover. */
const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

export const buttonStyles = {
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/25",
  secondary:
    "border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:text-brand-600 hover:shadow-sm",
  secondaryDark:
    "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10",
  onBrand: "bg-white text-brand-700 shadow-lg shadow-black/10 hover:bg-emerald-50",
};

export function Button({ as = "button", intent = "primary", className = "", children, ...rest }) {
  const Tag = as;
  return (
    <Tag className={`${buttonBase} ${buttonStyles[intent] ?? buttonStyles.primary} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

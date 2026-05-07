import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
  /** Sets `id` on the `<h2>` for `aria-labelledby` / in-page links */
  headingId?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
  className,
  headingId,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start";
  const textColor = variant === "dark" ? "text-ivory-50" : "text-navy-900";
  const descColor = variant === "dark" ? "text-ivory-200/75" : "text-navy-700/80";
  const eyebrowClass = variant === "dark" ? "eyebrow-light" : "eyebrow";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex max-w-3xl flex-col gap-4 sm:gap-5",
        alignClass,
        className,
      )}
    >
      <span className={eyebrowClass}>{eyebrow}</span>
      <h2
        {...(headingId ? { id: headingId } : {})}
        className={cn(
          "font-serif text-display-md font-medium text-balance",
          textColor,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-pretty sm:text-lg",
            descColor,
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

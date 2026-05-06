import { motion } from "framer-motion";
import { programEvents } from "@/data/events";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

const tagStyles: Record<string, string> = {
  Flagship: "bg-gold-500/15 text-gold-400 ring-gold-500/30",
  Recurring: "bg-ivory-50/10 text-ivory-100 ring-ivory-50/20",
  Networking: "bg-navy-500/20 text-navy-100 ring-navy-300/30",
  Practice: "bg-ivory-50/10 text-ivory-100 ring-ivory-50/20",
  Community: "bg-navy-500/20 text-navy-100 ring-navy-300/30",
};

export function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-navy-900 py-24 text-ivory-50 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(181,142,95,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(61,94,137,0.35),_transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-faint bg-[size:56px_56px] opacity-20"
      />

      <Container>
        <SectionHeader
          eyebrow="Programming"
          title="A year of programming, designed around the recruiting cycle."
          description="From our flagship Bootcamp to weekly office hours, every event is built to compound your preparation."
          variant="dark"
        />

        <ol className="relative mt-16 grid gap-px overflow-hidden rounded-2xl border border-ivory-50/10 bg-ivory-50/[0.04] sm:grid-cols-2 lg:grid-cols-3">
          {programEvents.map((event, i) => (
            <motion.li
              key={event.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-navy-950/60 p-7 transition-colors duration-500 hover:bg-navy-950/80 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[0.7rem] font-medium tracking-[0.2em] text-ivory-200/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] ring-1 ring-inset ${tagStyles[event.tag]}`}
                >
                  {event.tag}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-2xl font-medium text-ivory-50">
                {event.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gold-400">
                <span className="h-px w-6 bg-gold-500/60" />
                {event.window}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ivory-200/75 text-pretty">
                {event.description}
              </p>

              <span
                aria-hidden
                className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500/80 via-gold-400/50 to-transparent transition-transform duration-700 ease-out-expo group-hover:scale-x-100 sm:inset-x-8"
              />
            </motion.li>
          ))}
        </ol>

        {/* Calendar preview */}
        <CalendarPreview />
      </Container>
    </section>
  );
}

function CalendarPreview() {
  const months = [
    { m: "Aug", e: ["Bootcamp"] },
    { m: "Sep", e: ["Firm Pres.", "Office Hours"] },
    { m: "Oct", e: ["Mock Madness"] },
    { m: "Nov", e: ["MBB Mocks"] },
    { m: "Dec", e: ["Holiday Mixer"] },
    { m: "Jan", e: ["FT Recruiting"] },
    { m: "Feb", e: ["Coffee Sprint"] },
    { m: "Mar", e: ["Internship Prep"] },
    { m: "Apr", e: ["Team Match"] },
    { m: "May", e: ["Year-End"] },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mt-16 overflow-hidden rounded-2xl border border-ivory-50/10 bg-ivory-50/[0.03] backdrop-blur"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ivory-50/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-gold-500" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-ivory-200/70">
            Recruiting Calendar Preview
          </span>
        </div>
        <span className="text-xs text-ivory-200/50">
          Indicative — exact dates published to members
        </span>
      </div>
      <div className="grid grid-cols-5 gap-px bg-ivory-50/[0.06] sm:grid-cols-10">
        {months.map((month, i) => (
          <div
            key={month.m}
            className="bg-navy-950/60 p-4 transition-colors hover:bg-navy-950/85 sm:p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-base font-medium text-ivory-50">
                {month.m}
              </span>
              <span className="text-[0.6rem] tracking-[0.2em] text-ivory-200/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {month.e.map((label) => (
                <li
                  key={label}
                  className="truncate text-[0.7rem] text-ivory-200/75"
                >
                  · {label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

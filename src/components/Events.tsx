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
      className="relative overflow-hidden bg-navy-900 py-16 text-ivory-50 sm:py-24 lg:py-32"
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

        <ol
          role="list"
          className="relative mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
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
              className="group relative overflow-hidden rounded-2xl border border-ivory-50/10 bg-navy-950/55 shadow-soft ring-1 ring-inset ring-ivory-50/[0.04] transition-all duration-500 hover:border-ivory-50/20 hover:shadow-elevated"
            >
              <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[16/10]">
                <img
                  src={event.photo}
                  alt={event.photoAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
                  <span className="font-mono text-[0.65rem] font-medium tracking-[0.2em] text-ivory-200/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.16em] ring-1 ring-inset backdrop-blur-sm ${tagStyles[event.tag]}`}
                  >
                    {event.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-8">
                <h3 className="font-serif text-xl font-medium leading-tight text-ivory-50 sm:text-2xl">
                  {event.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gold-400">
                  <span className="h-px w-6 bg-gold-500/60" />
                  {event.window}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-ivory-200/78 text-pretty">
                  {event.description}
                </p>
              </div>

              <span
                aria-hidden
                className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500/80 via-gold-400/50 to-transparent transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </ol>

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
      <div className="flex flex-col gap-2 border-b border-ivory-50/10 px-4 py-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-gold-500" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-ivory-200/70 sm:text-xs sm:tracking-[0.22em]">
            Recruiting Calendar Preview
          </span>
        </div>
        <span className="text-[0.65rem] leading-snug text-ivory-200/50 sm:text-xs">
          Indicative: exact dates published to members
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-ivory-50/[0.06] sm:grid-cols-5 lg:grid-cols-10">
        {months.map((month, i) => (
          <div
            key={month.m}
            className="bg-navy-950/60 p-3 transition-colors hover:bg-navy-950/85 sm:p-5"
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

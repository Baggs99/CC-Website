import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

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
          description="Follow the recruiting calendar below for how the club shows up across the year. Exact dates and RSVPs are shared with members."
          variant="dark"
        />

        <CalendarPreview />
      </Container>
    </section>
  );
}

type CalendarLine = string | { text: string; bullet?: boolean };

function CalendarPreview() {
  const months: { m: string; e: CalendarLine[] }[] = [
    {
      m: "Aug",
      e: [
        "Full-time recruiting Bootcamp",
        {
          text: "(For 2Ys, 1Y Degree Program, and Silver Scholars recruiting for full-time roles)",
          bullet: false,
        },
      ],
    },
    { m: "Sep", e: ["Club kickoff", "Firm presentations"] },
    { m: "Oct", e: ["Casing", "Behavioral prep"] },
    { m: "Nov", e: ["Mock Madness", "Application deadlines"] },
    { m: "Dec", e: ["Interview prep"] },
    { m: "Jan", e: ["Interviews"] },
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
      <div className="grid grid-cols-2 gap-px bg-ivory-50/[0.06] sm:grid-cols-3 lg:grid-cols-6">
        {months.map((month) => (
          <div
            key={month.m}
            className="bg-navy-950/60 p-3 transition-colors hover:bg-navy-950/85 sm:p-5"
          >
            <div className="font-serif text-base font-medium text-ivory-50">
              {month.m}
            </div>
            <ul className="mt-3 space-y-1.5">
              {month.e.map((entry, j) => {
                const text = typeof entry === "string" ? entry : entry.text;
                const showBullet =
                  typeof entry === "string" ? true : entry.bullet !== false;
                return (
                  <li
                    key={`${month.m}-${j}`}
                    className="text-pretty text-[0.7rem] leading-snug text-ivory-200/75"
                  >
                    {showBullet ? <>· {text}</> : text}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

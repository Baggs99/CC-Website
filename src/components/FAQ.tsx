import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faq";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ivory-50 py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Answers to the questions members ask most."
              description="Can't find what you're looking for? Reach out via the contact link below."
            />
          </div>

          <ul role="list" className="lg:col-span-8 lg:pt-2">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <li
                  key={item.question}
                  className="border-b border-navy-900/[0.1] first:border-t"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-3 py-5 text-left sm:items-center sm:gap-6 sm:py-6"
                  >
                    <span className="flex min-w-0 flex-1 items-start gap-3 sm:gap-5">
                      <span className="hidden shrink-0 pt-0.5 font-mono text-[0.65rem] font-medium tracking-[0.2em] text-navy-700/40 sm:block sm:text-[0.7rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 font-serif text-[1.05rem] font-medium leading-snug text-navy-900 sm:text-lg md:text-xl">
                        {item.question}
                      </span>
                    </span>
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-navy-900/15 text-navy-900 transition-all duration-500 ease-out-expo group-hover:border-navy-900/40 group-hover:bg-navy-900 group-hover:text-ivory-50 sm:h-9 sm:w-9 ${
                        isOpen ? "rotate-45 bg-navy-900 text-ivory-50" : ""
                      }`}
                    >
                      <Plus size={16} strokeWidth={1.8} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pl-0 pr-14 text-sm leading-relaxed text-navy-700/85 text-pretty sm:pb-6 sm:pl-14 sm:pr-12 sm:text-base">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faq";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ivory-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
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
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-center gap-5">
                      <span className="font-mono text-[0.7rem] font-medium tracking-[0.2em] text-navy-700/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-lg font-medium text-navy-900 sm:text-xl">
                        {item.question}
                      </span>
                    </span>
                    <span
                      className={`grid h-9 w-9 flex-none place-items-center rounded-full border border-navy-900/15 text-navy-900 transition-all duration-500 ease-out-expo group-hover:border-navy-900/40 group-hover:bg-navy-900 group-hover:text-ivory-50 ${
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
                        <div className="pb-6 pl-12 pr-12 text-base leading-relaxed text-navy-700/85 text-pretty sm:pl-14">
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

import type { CSSProperties, ReactNode } from "react";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Community } from "@/components/Community";
import { Stats } from "@/components/Stats";
import { Recruiting } from "@/components/Recruiting";
import { Events } from "@/components/Events";
import { Leadership } from "@/components/Leadership";

type HomeSection = {
  key: string;
  node: ReactNode;
};

export function HomePage() {
  const sections: HomeSection[] = [
    { key: "hero", node: <Hero /> },
    { key: "mission", node: <Mission /> },
    { key: "community", node: <Community /> },
    { key: "stats", node: <Stats /> },
    { key: "recruiting", node: <Recruiting /> },
    { key: "events", node: <Events /> },
    { key: "leadership", node: <Leadership /> },
  ];

  return (
    <div className="home-stack">
      {sections.map((section, index) => (
        <div
          key={section.key}
          className="home-stack-panel"
          style={
            {
              "--panel-index": index + 1,
            } as CSSProperties
          }
        >
          {section.node}
        </div>
      ))}
    </div>
  );
}

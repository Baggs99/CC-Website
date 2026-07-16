import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Community } from "@/components/Community";
import { Stats } from "@/components/Stats";
import { Recruiting } from "@/components/Recruiting";
import { Events } from "@/components/Events";
import { Leadership } from "@/components/Leadership";

export function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Community />
      <Stats />
      <Recruiting />
      <Events />
      <Leadership />
    </>
  );
}

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { Community } from "./components/Community";
import { Stats } from "./components/Stats";
import { Recruiting } from "./components/Recruiting";
import { Events } from "./components/Events";
import { Leadership } from "./components/Leadership";
import { Sponsors } from "./components/Sponsors";
import { FAQ } from "./components/FAQ";
import { JoinCTA } from "./components/JoinCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ivory-50 text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Community />
        <Stats />
        <Recruiting />
        <Events />
        <Leadership />
        <Sponsors />
        <FAQ />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
}

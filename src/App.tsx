import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
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
      {/* Visible proof that the React bundle executed (remove after deploy is verified) */}
      <p
        className="pointer-events-none fixed bottom-3 left-3 z-[100] rounded-md bg-navy-950/90 px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-wider text-ivory-100 shadow-soft"
        aria-live="polite"
      >
        React loaded
      </p>
      <Navbar />
      <main>
        <Hero />
        <Mission />
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

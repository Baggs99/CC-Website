import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { MbbOfficeMap } from "@/components/ft-recruiting/MbbOfficeMap";
import { FtRecruitingGate } from "@/components/ft-recruiting/FtRecruitingGate";
import { mbbOffices } from "@/data/mbbOffices";
import { SITE_IMAGES } from "@/data/siteImages";
import { Container } from "@/components/ui/Container";

export function OfficeMapPage() {
  return (
    <div className="relative overflow-hidden bg-ivory-100 pt-[calc(4.75rem+env(safe-area-inset-top))] md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.07] mix-blend-multiply"
        style={{ backgroundImage: `url('${SITE_IMAGES.recruitingBackdrop.src}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-gradient-to-b from-ivory-100 via-ivory-100/95 to-ivory-100"
      />

      <FtRecruitingGate>
        <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
          <Link
            to="/full-time-recruiting#step-choose-offices"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-900"
          >
            <ArrowLeft size={16} />
            Back to recruiting path
          </Link>

          <div className="max-w-3xl">
            <span className="eyebrow">Choose your target office</span>
            <h1 className="mt-3 font-serif text-display-md font-medium text-navy-900 text-balance">
              MBB global office map
            </h1>
            <p className="mt-4 text-base leading-relaxed text-navy-700/85 text-pretty">
              Explore {mbbOffices.length} McKinsey, BCG, and Bain offices worldwide. Filter by
              firm or region, search by city, and click any dot for location
              details, use this to compare cities and pick one office per firm where you&apos;d
              actually want to live.
            </p>
          </div>

          <div className="mt-10">
            <MbbOfficeMap />
          </div>
        </Container>
      </FtRecruitingGate>
    </div>
  );
}

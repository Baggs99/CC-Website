import { FullTimeRecruitingHub } from "@/components/FullTimeRecruitingHub";
import { FtRecruitingGate } from "@/components/ft-recruiting/FtRecruitingGate";
import { SITE_IMAGES } from "@/data/siteImages";
import { Container } from "@/components/ui/Container";

export function FullTimeRecruitingPage() {
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
        <Container className="relative z-10 pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
          <FullTimeRecruitingHub />
        </Container>
      </FtRecruitingGate>
    </div>
  );
}

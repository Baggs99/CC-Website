import { MBB_FIRM_COLORS, mbbOffices } from "@/data/mbbOffices";

const W = 320;
const H = 150;
const PAD = 14;

function project(lat: number, lng: number) {
  return {
    x: PAD + ((lng + 180) / 360) * (W - PAD * 2),
    y: PAD + ((90 - lat) / 180) * (H - PAD * 2),
  };
}

export function MbbOfficeMapPreview() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-full w-full"
      role="img"
      aria-hidden
    >
      <rect width={W} height={H} fill="#eef3f8" />
      {mbbOffices.map((office) => {
        const { x, y } = project(office.lat, office.lng);
        return (
          <circle
            key={`${office.firm}-${office.name}-${office.lat}`}
            cx={x}
            cy={y}
            r={3.5}
            fill={MBB_FIRM_COLORS[office.firm]}
            stroke="#ffffff"
            strokeWidth={1.25}
            opacity={0.92}
          />
        );
      })}
    </svg>
  );
}

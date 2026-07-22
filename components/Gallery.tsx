import Image from "next/image";

const shots = [
  { src: "/images/shot-1.png", w: 3840, h: 2160 },
  { src: "/images/shot-2.png", w: 3840, h: 2160 },
  { src: "/images/shot-3.png", w: 1968, h: 1400 },
  { src: "/images/shot-4.png", w: 1600, h: 1200 },
  { src: "/images/shot-5.png", w: 3840, h: 2160 },
  { src: "/images/shot-6.png", w: 1200, h: 700 },
  { src: "/images/shot-7.png", w: 2400, h: 1600 },
  { src: "/images/shot-8.png", w: 2400, h: 1124 },
  { src: "/images/shot-9.png", w: 2880, h: 2160 },
  { src: "/images/shot-10.png", w: 2880, h: 1732 },
  { src: "/images/shot-11.png", w: 2400, h: 1600 },
  { src: "/images/shot-12.png", w: 2880, h: 1200 },
  { src: "/images/shot-13.png", w: 2880, h: 1750 },
];

const video = "/videos/shinybutton2.mp4";

export default function Gallery() {
  return (
    <section id="work">
      <div className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="font-display text-lg font-medium text-ink">
          Selected work
        </h2>
      </div>

      <div className="columns-1 gap-4 *:mb-4 *:break-inside-avoid">
        <div className="overflow-hidden">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="h-auto w-full object-cover"
          />
        </div>

        {shots.map((shot, i) => (
          <div
            key={shot.src}
            className="overflow-hidden transition-transform duration-300 hover:-translate-y-1"
          >
            <Image
              src={shot.src}
              alt={`Project screenshot ${i + 1}`}
              width={shot.w}
              height={shot.h}
              className="h-auto w-full object-cover"
              quality={100}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

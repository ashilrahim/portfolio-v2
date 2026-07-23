"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";

const items = [

  { type: "image", src: "/images/shot-1.png", w: 3840, h: 2160 },

  { type: "video", src: "/videos/shinybutton2.mp4" },


  { type: "image", src: "/images/shot-5.png", w: 3840, h: 2160 },
  { type: "image", src: "/images/shot-4.png", w: 1600, h: 1200 },

  { type: "video", src: "/videos/cap1.mp4" },


  { type: "image", src: "/images/shot-2.png", w: 3840, h: 2160 },
  { type: "image", src: "/images/shot-6.png", w: 1200, h: 700 },
  { type: "image", src: "/images/shot-7.png", w: 2400, h: 1600 },
  { type: "image", src: "/images/shot-3.png", w: 1968, h: 1400 },
  { type: "image", src: "/images/shot-8.png", w: 2400, h: 1124 },
  { type: "image", src: "/images/shot-11.png", w: 2400, h: 1600 },

  { type: "image", src: "/images/shot-12.png", w: 2880, h: 1200 },
  { type: "image", src: "/images/shot-13.png", w: 2880, h: 1750 },
] as const;

const video = "/videos/shinybutton2.mp4";
const video1 = "/videos/cap1.mp4";

export default function Gallery() {
  return (
    <section id="work">
      <div className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="font-display text-lg font-medium text-ink">
          Selected work
        </h2>
      </div>

      <div className="columns-1 gap-4 *:mb-4 *:break-inside-avoid">


        {items.map((item, i) => (
          <div
            key={item.src}
            className="overflow-hidden transition-transform duration-300 hover:-translate-y-1"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-auto w-full object-cover"
              />
            ) : (
              <Zoom>
                <Image
                  src={item.src}
                  alt={`Project ${i + 1}`}
                  width={item.w}
                  height={item.h}
                  sizes="100vw"
                  className="h-auto w-full cursor-zoom-in object-cover"
                />
              </Zoom>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  {/* Lightbox */ }
  {/* {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt="Selected project"
              width={selected.w}
              height={selected.h}
              quality={100}
              className="max-h-[90vh] w-auto  object-contain"
            />

            <button
              onClick={() => setSelected(null)}
              className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-105"
            >
              ✕
            </button>
          </div>
        </div>
      )} */}
}
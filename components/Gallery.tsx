"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils"

const items = [

  {
    type: "carousel",
    images: [
      { src: "/images/show-1.jpg", w: 3840, h: 2160 },
      { src: "/images/show-2.jpg", w: 3840, h: 2160 },
      { src: "/images/show-3.jpg", w: 3840, h: 2160 },

      // { src: "/images/sleep-1.png", w: 1290, h: 2796 },
      // { src: "/images/sleep-2.png", w: 1290, h: 2796 },
      // { src: "/images/sleep-3.png", w: 1290, h: 2796 },
      // { src: "/images/sleep-4.png", w: 1290, h: 2796 },
      // { src: "/images/sleep-5.png", w: 1290, h: 2796 },
      // { src: "/images/sleep-6.png", w: 1290, h: 2796 },
      // { src: "/images/sleep-7.png", w: 1290, h: 2796 },
      // { src: "/images/sleep-8.png", w: 1290, h: 2796 },
      // { src: "/images/sleep-9.png", w: 1290, h: 2796 },
    ],
  },

  { type: "image", src: "/images/shot-1.png", w: 3840, h: 2160 },

  { type: "video", src: "/videos/shinybutton2.mp4" },

  { type: "image", src: "/images/shot-5.png", w: 3840, h: 2160 },

  // 👇 Sleep App Carousel


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

export default function Gallery() {

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    setCount(api.scrollSnapList().length);
    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return (
    <section id="work">
      <div className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="font-display text-lg font-medium text-ink">
          Selected work
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden"
          >
            {/* CAROUSEL */}
            {item.type === "carousel" && (
              <Carousel className="mx-auto w-ful" setApi={setApi}>
                <CarouselContent>
                  {item.images.map((image) => (
                    <CarouselItem
                      key={image.src}
                      className="basis-full"
                    >
                      <div className="mx-auto">

                        <Image
                          src={image.src}
                          alt="Sleep App"
                          width={image.w}
                          height={image.h}
                          // unoptimized  // remove in production
                          className="h-auto w-full cursor-grab active:cursor-grabbing rounded-lg object-cover"
                        />

                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Dots Navigation */}
                <div className="mt-3 flex justify-center gap-2">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        current === index
                          ? "w-4 bg-black"
                          : "w-2 bg-neutral-300 hover:bg-neutral-400"
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

              </Carousel>
            )}
            {/* IMAGE */}
            {item.type === "image" && (
              <Zoom>
                <Image
                  src={item.src}
                  alt={`Project ${i + 1}`}
                  width={item.w}
                  height={item.h}
                  sizes="100vw"
                  className="h-auto w-full cursor-zoom-in object-cover rounded-lg"
                />
              </Zoom>
            )}

            {/* VIDEO */}
            {item.type === "video" && (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-auto w-full object-cover rounded-lg"
              />
            )}


          </div>
        ))}
      </div>
    </section>
  );
}

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

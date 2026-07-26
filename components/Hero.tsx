import Image from "next/image";
import { Github, Linkedin, Twitter, ArrowUpRight, ArrowDown, ArrowDownRight } from "lucide-react";
import XIcon from "@/components/icons/xicon";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const socials = [
  { label: "Twitter", href: "https://x.com/byashil", icon: XIcon, },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashil-rahim-aa34a3305/",
    icon: Linkedin,
  },
  { label: "Github", href: "https://github.com/ashilrahim", icon: Github },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-start text-left">

      <div className="relative w-fit mb-8 ">
        {/* Main Avatar */}
        <Avatar className="ring-background h-16 w-16 ">
          <AvatarImage src="/images/dp.jpg" alt="User story" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span className="border-background absolute right-1 bottom-0 size-3 rounded-full border-2 bg-green-500" />



      </div>




      <div>
        <h1
          className="animate-fade_up font-normal  text-ink"
          style={{ animationDelay: "80ms" }}
        >
          Ashil c k
        </h1>



        <p
          className="mt-3 w-full animate-fade_up leading-relaxed text-muted"
          style={{ animationDelay: "160ms" }}
        >
          I create digital products with a focus on <span className="text-ink">design</span>, usability, and performance. From client work to personal projects, I&apos;ve built experiences across web and product design always exploring better ways to turn ideas into products people love.
        </p>
      </div>


      <div
        className="mt-8 flex animate-fade_up items-center gap-2"
        style={{ animationDelay: "240ms" }}
      >
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative flex h-10 w-10 items-center justify-center"
          >
            {/* Icon */}
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white">
              <Icon
                className="h-4.25 w-4.25 text-black transition-opacity duration-200 group-hover:opacity-60 group-active:opacity-80"
              />
            </div>

            <span className="pointer-events-none absolute top-full mt-2 whitespace-nowrap text-[11px] text-[#666666] opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>

      <a
        href="#work"
        className="mt-12 flex animate-fade_up items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink lg:hidden"
        style={{ animationDelay: "320ms" }}
      >
        See the work
        <ArrowDownRight size={14} />
      </a>
    </section>
  );
}
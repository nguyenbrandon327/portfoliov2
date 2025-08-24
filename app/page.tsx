import Image from "next/image";
import FadeLink from "../components/FadeLink";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full grid grid-rows-[1fr_auto_1fr]">
      <div className="flex items-start justify-start pl-0 pr-1 relative">
        <div className="text-left leading-tight">
          <div className="font-semibold tracking-tight sm:text-[clamp(1.75rem,6svh,3.5rem)] text-[clamp(2.25rem,9svh,4rem)]">
            <span className="block leading-[0.95]">
              BRANDON<br />
              NGUYEN<span className="text-[0.6em] align-super">®</span>
            </span>
          </div>
          <div className="mt-1 tracking-tight opacity-80 text-[clamp(0.6rem,2.2svh,0.9rem)] sm:text-[clamp(0.5rem,1.6svh,0.8rem)]">"SOFTWARE ENGINEER"</div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-70 text-[clamp(0.6rem,1.8svh,0.85rem)] sm:text-[clamp(0.5rem,1.4svh,0.75rem)]">(San Diego, CA)</div>
      </div>

      <div className="relative w-full aspect-[7/6] mx-auto">
        <Image
          src="/home.JPG"
          alt="Hero image"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 640px) calc(100vw - 2rem), 100vw"
        />
        <div className="absolute left-0 bottom-0 text-background">
          <nav className="flex flex-col gap-0 leading-[0.83] font-bold text-[clamp(1.75rem,6.5svh,3.75rem)] sm:text-[clamp(1.25rem,5svh,3rem)]">
            <FadeLink href="/about" className="transition-opacity duration-200 ease-in-out hover:opacity-80">ABOUT</FadeLink>
            <FadeLink href="/experience" className="transition-opacity duration-200 ease-in-out hover:opacity-80">EXPERIENCE</FadeLink>
            <FadeLink href="/archive" className="transition-opacity duration-200 ease-in-out hover:opacity-80">ARCHIVE</FadeLink>
          </nav>
        </div>
      </div>

      <div className="flex items-start justify-end pl-[clamp(0.5rem,2vw,1.5rem)] pr-0 pt-[clamp(0.5rem,2vw,1.5rem)]">
        <nav className="text-right flex flex-col items-end gap-[clamp(0.25rem,1.2vw,0.5rem)] font-bold text-[clamp(0.9rem,2.4svh,1.25rem)] sm:text-[clamp(0.75rem,1.8svh,1rem)] sm:font-normal">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 ease-in-out hover:opacity-80 flex items-center gap-2"
          >
            LINKEDIN <Linkedin className="w-[0.9em] h-[0.9em]" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 ease-in-out hover:opacity-80 flex items-center gap-2"
          >
            GITHUB <Github className="w-[0.9em] h-[0.9em]" />
          </a>
          <a href="mailto:email@example.com" className="transition-opacity duration-200 ease-in-out hover:opacity-80 flex items-center gap-2">
            EMAIL <Mail className="w-[0.9em] h-[0.9em]" />
          </a>
        </nav>
      </div>
    </div>
  );
}

import Image from "next/image";
import FadeLink from "../components/FadeLink";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full grid grid-rows-[1fr_auto_1fr]">
      <div className="flex items-start justify-start pl-1 pr-1 relative">
        <div className="text-left leading-tight">
          <div className="font-semibold tracking-tight sm:text-[clamp(1.75rem,6svh,3.5rem)] text-[clamp(2.25rem,9svh,4rem)]">
            <span className="block leading-[0.95]">
              BRANDON<br />
              NGUYEN.
            </span>
          </div>
          <div className="mt-1 text-xs tracking-tight opacity-80">"SOFTWARE ENGINEER"</div>
        </div>
        <div className="absolute bottom-0 right-1 text-[10px] opacity-70">(San Diego, CA)</div>
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
        <div className="absolute left-0 bottom-0 text-white">
          <nav className="flex flex-col gap-0 leading-[0.83] text-6xl font-bold sm:text-5xl">
            <FadeLink href="/about" className="transition-opacity duration-200 ease-in-out hover:opacity-80">ABOUT</FadeLink>
            <FadeLink href="/experience" className="transition-opacity duration-200 ease-in-out hover:opacity-80">EXPERIENCE</FadeLink>
            <FadeLink href="/archive" className="transition-opacity duration-200 ease-in-out hover:opacity-80">ARCHIVE</FadeLink>
          </nav>
        </div>
      </div>

      <div className="flex items-start justify-end px-[clamp(0.5rem,2vw,1.5rem)] pt-[clamp(0.5rem,2vw,1.5rem)]">
        <nav className="text-right flex flex-col items-end gap-[clamp(0.25rem,1.2vw,0.5rem)] text-2xl font-bold sm:text-[clamp(0.75rem,1.8svh,1rem)] sm:font-normal">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 ease-in-out hover:opacity-80 flex items-center gap-2"
          >
            LINKEDIN <Linkedin size={15} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 ease-in-out hover:opacity-80 flex items-center gap-2"
          >
            GITHUB <Github size={15} />
          </a>
          <a href="mailto:email@example.com" className="transition-opacity duration-200 ease-in-out hover:opacity-80 flex items-center gap-2">
            EMAIL <Mail size={15} />
          </a>
        </nav>
      </div>
    </div>
  );
}

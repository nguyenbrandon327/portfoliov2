"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function Home() {
  const router = useRouter();

  const handleNav = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("app:navigation-fade-out"));
      const prefersReducedMotion =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const delay = prefersReducedMotion ? 0 : 250;
      window.setTimeout(() => router.push(href), delay);
    }
  };

  return (
    <div className="h-full grid grid-rows-[1fr_auto_1fr]">
      <div className="flex items-center justify-start sm:justify-center px-[clamp(0.5rem,2vw,2rem)]">
        <div className="text-left sm:text-center leading-tight">
          <div className="font-semibold tracking-tight sm:text-[clamp(1.75rem,6svh,3.5rem)] text-[clamp(2.25rem,9svh,4rem)]">
            <span className="hidden sm:inline">BRANDON NGUYEN</span>
            <span className="sm:hidden block leading-[0.95]">
              BRANDON<br />
              NGUYEN
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-[7/6] mx-auto">
        <Image
          src="/home.JPG"
          alt="Hero image"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute left-0 bottom-0 text-white">
          <nav className="flex flex-col gap-0 leading-[0.83] text-5xl font-extrabold sm:text-4xl">
            <Link href="/about" onClick={handleNav("/about")} className="transition-opacity duration-200 ease-in-out hover:opacity-80">ABOUT</Link>
            <Link href="/experience" onClick={handleNav("/experience")} className="transition-opacity duration-200 ease-in-out hover:opacity-80">EXPERIENCE</Link>
            <Link href="/archive" onClick={handleNav("/archive")} className="transition-opacity duration-200 ease-in-out hover:opacity-80">ARCHIVE</Link>
          </nav>
        </div>
      </div>

      <div className="flex items-start justify-end px-[clamp(0.5rem,2vw,1.5rem)] pt-[clamp(0.5rem,2vw,1.5rem)]">
        <nav className="text-right flex flex-col items-end gap-[clamp(0.25rem,1.2vw,0.5rem)] text-2xl font-bold sm:text-[clamp(0.75rem,1.8svh,1rem)] sm:font-normal">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 ease-in-out hover:opacity-80"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 ease-in-out hover:opacity-80"
          >
            GITHUB
          </a>
          <a href="mailto:email@example.com" className="transition-opacity duration-200 ease-in-out hover:opacity-80">EMAIL</a>
        </nav>
      </div>
    </div>
  );
}

import Image from "next/image";
import FadeLink from "@/components/FadeLink";

export default function AboutPage() {
	return (
		<div className="h-full [container-type:size]">
			{/* ABOUT text at top center */}
			<div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
				<div className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900/80">
					"ABOUT"
				</div>
			</div>

			{/* Desktop / larger screens: two columns */}
			<div className="hidden [@container(min-width:600px)]:grid [@container(min-width:600px)]:grid-cols-[1fr_2fr] h-full min-h-0 items-stretch">
				{/* Left column*/}
				<div className="flex items-center justify-center min-h-0">
					<div className="px-6 lg:px-8 py-[clamp(2px,0.8svh,12px)] text-[clamp(0.54rem,min(1.8cqi,1.8cqh),1.02rem)] leading-[1.24]">
						<p className="mb-4">Hi! I'm Brandon, and I love to build things. Specifically, things that make life easier or more fun. My goal is to become a software engineer to build products that help people.</p>
						<p>Right now, I'm studying Computer Science at UC Riverside, graduating in 2027. Outside of school, I like to expand my skills by working on cool <FadeLink href="/experience" className="underline hover:opacity-70 transition-opacity">projects</FadeLink>. If you want to know more about me personally, message me on my socials 😉</p>
					</div>
				</div>
				{/* Right column*/}
				<div className="relative h-full min-h-0">
					<Image
						src="/about.JPG"
						alt="About image"
						fill
						priority
						sizes="(max-width: 599px) 0px, 66vw"
						className="object-cover"
					/>
					<div className="absolute bottom-2 right-2 text-background text-[clamp(0.6rem,1.8svh,0.85rem)] sm:text-[clamp(0.5rem,1.4svh,0.75rem)]">(San Diego, CA)</div>
				</div>
			</div>

			{/* Mobile: stacked layout with square image */}
			<div className="[@container(min-width:600px)]:hidden h-full flex items-center justify-center">
				<div className="grid grid-rows-[auto_auto_auto] w-full max-w-md px-6 mx-auto min-h-0">
					<div className="mb-3 text-[clamp(0.8rem,min(2.8cqi,2.8cqh),1.2rem)] leading-[1.24]">
						<p className="mb-4">Hi! I'm Brandon, and I love to build things. Specifically, things that make life easier or more fun. My goal is to become a software engineer to build products that help people.</p>
						<p>Right now, I'm studying Computer Science at UC Riverside, graduating in 2027. Outside of school, I like to expand my skills by working on cool <FadeLink href="/experience" className="underline hover:opacity-70 transition-opacity">projects</FadeLink>. I also like to workout, watch sports, and explore new places with friends. If you want to know more about me personally, message me on my socials 😉</p>
					</div>
					<div className="relative w-full aspect-square max-h-[min(40cqh,60cqi)]">
						<Image
							src="/about.JPG"
							alt="About image"
							fill
							priority
							sizes="(min-width: 600px) 0px, 100vw"
							className="object-cover"
						/>
					</div>
					<div className="text-right mt-1 opacity-70 text-[clamp(0.5rem,1svh,0.7rem)] sm:text-[clamp(0.7rem,1.6svh,0.9rem)]">(San Diego, CA)</div>
				</div>
			</div>
		</div>
	);
}



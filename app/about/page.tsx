import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="h-full [container-type:size]">
			{/* Desktop / larger screens: two columns */}
			<div className="hidden [@container(min-width:600px)]:grid [@container(min-width:600px)]:grid-cols-[1fr_2fr] h-full min-h-0 items-stretch">
				{/* Left column*/}
				<div className="flex items-center justify-center min-h-0">
					<div className="px-6 lg:px-8 py-[clamp(2px,0.8svh,12px)] text-[clamp(0.54rem,min(1.8cqi,1.8cqh),1.02rem)] leading-[1.24]">Hi! I'm Brandon Nguyen, and I love to build things. Specifically, things that make life easier, or more fun. My goal is to become a software engineer to build products that help people.

Right now, I'm studying Computer Science at UC Riverside, graduating in 2027. Outside of school, I like to expand my skills by working on cool projects (see here). If you want to know more about me personally, message me on my socials 😉</div>
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
				</div>
			</div>

			{/* Mobile: stacked layout with square image */}
			<div className="[@container(min-width:600px)]:hidden h-full flex items-center justify-center">
				<div className="grid grid-rows-[auto_auto] w-full max-w-md px-6 mx-auto min-h-0">
					<div className="mb-3 text-center text-[clamp(0.6rem,min(2.6cqi,2.6cqh),1.06rem)] leading-[1.24]">Hi! I'm Brandon Nguyen, and I love to build things. Specifically, things that make life easier, or more fun. My goal is to become a software engineer to build products that help people.

Right now, I'm studying Computer Science at UC Riverside, graduating in 2026. Outside of school, I like to expand my skills by working on cool projects (see here). If you want to know more about me personally, message me on my socials 😉</div>
					<div className="relative w-full aspect-square">
						<Image
							src="/about.JPG"
							alt="About image"
							fill
							priority
							sizes="(min-width: 600px) 0px, 100vw"
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}



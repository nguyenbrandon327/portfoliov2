import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="h-full [container-type:size]">
			{/* Desktop / larger screens: two columns */}
			<div className="hidden [@container(min-width:600px)]:grid [@container(min-width:600px)]:grid-cols-[1fr_2fr] h-full min-h-0">
				{/* Left column: centered text */}
				<div className="flex items-center justify-center min-h-0">
					<div className="px-6 lg:px-8 py-[clamp(6px,1.2svh,20px)] text-[clamp(0.62rem,2.2cqi,1.05rem)] leading-[1.3]">Hi! I'm Brandon Nguyen, and I love to build things. Specifically, things that make life easier, or more fun. My goal is to become a software engineer to build products that help people.

Right now, I'm studying Computer Science at UC Riverside, graduating in 2027. Outside of school, I like to expand my skills by working on cool projects (see here). If you want to know more about me personally, message me on my socials 😉</div>
				</div>
				{/* Right column: image touching top/bottom/right edges of the page container */}
				<div className="relative h-full min-h-0">
					<Image
						src="/home.JPG"
						alt="About image"
						fill
						priority
						className="object-cover"
					/>
				</div>
			</div>

			{/* Mobile: stacked layout, centered, square image */}
			<div className="[@container(min-width:600px)]:hidden h-full flex items-center justify-center">
				<div className="w-full max-w-md px-6">
					<div className="mb-6 text-center text-[clamp(0.72rem,3.0cqi,1.1rem)] leading-[1.3]">Hi! I'm Brandon Nguyen, and I love to build things. Specifically, things that make life easier, or more fun. My goal is to become a software engineer to build products that help people.

Right now, I'm studying Computer Science at UC Riverside, graduating in 2026. Outside of school, I like to expand my skills by working on cool projects (see here). If you want to know more about me personally, message me on my socials 😉</div>
					<div className="relative w-full h-[min(48cqh,48svh)]">
						<Image
							src="/home.JPG"
							alt="About image"
							fill
							priority
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}



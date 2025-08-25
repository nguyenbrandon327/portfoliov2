import Image from "next/image";
import Link from "next/link";
import { Github, Globe, ExternalLink, PlayCircle } from "lucide-react";

 type WorkItem = {
 	company: string;
 	role: string;
 	period: string;
 	location?: string;
 	highlights: string[];
 	logo?: string;
 };

 type ProjectItem = {
 	name: string;
 	description: string;
 	tags: string[];
 	website?: string;
 	github?: string;
 	demo?: string;
 };

// we will add mlh fellowship soon <3
 const work: WorkItem[] = [
	{
		company: "ForOurLastNames",
		role: "swe intern",
		period: "Current",
		location: "Remote",
		highlights: [
			"optimizing backend, leading testing and deployment of both web and mobile applications for backed Fintech company",
		],
	},
	{
		company: "SuperIntro",
		role: "swe intern",
		period: "Spring 2025",
		location: "Remote",
		highlights: [
			"built full-stack customer facing features for an AI-powered social networking startup",
		],
	},
	{
		company: "ACM at UCR",
		role: "project lead",
		period: "Fall 2024",
		location: "Riverside, CA",
		highlights: [
			"worked on university hackathon portal template",
		],
	}
 ];

 const projects: ProjectItem[] = [
 	{
 		name: "R'Mart",
 		description: "a scalable and secure secondhand marketplace for UCR students with real-time messaging, Stripe payments, search, and profile/user management.",
 		tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "AWS (S3, ECR, ECS, ALB)", "Docker"],
 		website: "https://ucrmart.com/",
 		github: "https://github.com/nguyenbrandon327/r-mart",
 	},
 	{
 		name: "OfCourse.ai",
 		description: "a dashboard with AI chatbot to help students plan their classes for the next semester.",
 		tags: ["Next.js", "Java", "Spring Boot", "PostgreSQL", "Pinecone", "AWS S3 + ECR + ECS", "Docker"],
 	}
 ];

 const languages = ["TypeScript", "JavaScript", "Java", "Python", "SQL", "HTML/CSS"];
 const frameworks = ["React", "Next.js", "Node.js", "Express", "Spring Boot", "PostgreSQL", "MongoDB"];
 const tools = ["AWS", "Docker", "Git", "Github Actions", "Redis", "Redux"];

 export default function ExperiencePage() {
 	return (
 		<div className="p-6 sm:p-10">
 			{/* EXPERIENCE text at top center */}
 			<div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
 				<div className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900/80">
 					"EXPERIENCE"
 				</div>
 			</div>

 			{/* Intro */}
 			<p className="mt-4 text-sm text-neutral-600 max-w-prose">I mainly focus on full‑stack web development, but I'm very open to exploring different fields of software engineering. Here are some cool things I've worked on.</p>

 			{/* Work Experience */}
 			<section id="work" className="mt-8 sm:mt-10">
			 <h2 className="text-[clamp(0.9rem,2svh,1.2rem)] uppercase font-semibold tracking-tight">Work</h2>
 				<div className="mt-4 sm:mt-6">
 					<ol className="relative border-l border-neutral-200">
 						{work.map((item, idx) => (
 							<li key={idx} className="ml-4 pb-6 last:pb-0">
 								<div className="absolute -left-[5px] mt-1 h-2.5 w-2.5 rounded-full bg-neutral-300" />
 								<div className="grid sm:grid-cols-[1fr_2fr] gap-2 sm:gap-4">
 									<div className="text-neutral-500 text-sm sm:text-[0.85rem] whitespace-nowrap">{item.period}</div>
 																		<div className="">
										<div className="flex flex-wrap items-baseline gap-x-2">
											<div className="font-medium text-neutral-900/90">{item.role}</div>
											<div className="text-neutral-500">@ {item.company}</div>
										</div>
										{item.location && (
											<div className="text-neutral-500 text-sm mt-0.5">{item.location}</div>
										)}
 																					<ul className="mt-2 space-y-1.5">
												{item.highlights.map((h, i) => (
													<li key={i} className="text-[0.9rem] leading-relaxed text-neutral-700">
														{h}
													</li>
												))}
											</ul>
 									</div>
 								</div>
 							</li>
 						))}
 					</ol>
 				</div>
 			</section>

 			{/* Projects */}
 			<section id="projects" className="mt-10 sm:mt-12">
			 	<h2 className="text-[clamp(0.9rem,2svh,1.2rem)] uppercase font-semibold tracking-tight">projects</h2>
 				<div className="mt-4 grid sm:grid-cols-2 gap-3">
 					{projects.map((p, i) => (
 						<div key={i} className="group rounded-lg border border-neutral-200 p-4 hover:bg-neutral-50 transition-colors">
 							<div className="flex items-center justify-between gap-3">
 								<div className="font-medium text-neutral-900/90">{p.name}</div>
 								<div className="flex items-center gap-2 text-neutral-500">
 									{p.website && (
 										<Link href={p.website} target="_blank" aria-label="Website" className="hover:opacity-80 transition-opacity">
 											<Globe className="w-4 h-4" />
 										</Link>
 									)}
 									{p.github && (
 										<Link href={p.github} target="_blank" aria-label="GitHub" className="hover:opacity-80 transition-opacity">
 											<Github className="w-4 h-4" />
 										</Link>
 									)}
 									{p.demo && (
 										<Link href={p.demo} target="_blank" aria-label="Demo" className="hover:opacity-80 transition-opacity">
 											<PlayCircle className="w-4 h-4" />
 										</Link>
 									)}
 								</div>
 							</div>
 							<p className="mt-2 text-neutral-700 text-[0.95rem] leading-relaxed">{p.description}</p>
 							<div className="mt-3 flex flex-wrap gap-1.5">
 								{p.tags.map((t, j) => (
 									<span key={j} className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 text-xs">{t}</span>
 								))}
 							</div>
 						</div>
 					))}
 				</div>
 			</section>

 			{/* Skills */}
 			<section id="skills" className="mt-10 sm:mt-12">
 				<h2 className="text-[clamp(0.9rem,2svh,1.2rem)] uppercase font-semibold tracking-tight">skills</h2>
 				<div className="mt-4 space-y-2">
 					<SkillRow label="Languages" items={languages} />
 					<SkillRow label="Frameworks" items={frameworks} />
 					<SkillRow label="Developer Tools" items={tools} />
 				</div>
 				
 			</section>
 		</div>
 	);
 }

 function CompanyLogoTile({ company, logo }: { company: string; logo?: string }) {
 	const initials = company
 		.split(" ")
 		.map((w) => w[0])
 		.join("")
 		.slice(0, 2)
 		.toUpperCase();
 	return (
 		<div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-md overflow-hidden border border-neutral-200 bg-neutral-100 flex items-center justify-center text-[0.65rem] text-neutral-600">
 			{logo ? (
 				<Image src={logo} alt={`${company} logo`} fill sizes="36px" className="object-cover" />
 			) : (
 				<span>{initials}</span>
 			)}
 		</div>
 	);
 }

 function SkillRow({ label, items }: { label: string; items: string[] }) {
 	return (
 		<div className="grid grid-cols-[110px_1fr] items-start gap-3">
 			<div className="text-sm font-semibold text-neutral-900/80">{label}</div>
 			<div className="flex flex-wrap gap-1.5">
 				{items.map((s, i) => (
 					<span key={i} className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 text-xs">{s}</span>
 				))}
 			</div>
 		</div>
 	);
 }



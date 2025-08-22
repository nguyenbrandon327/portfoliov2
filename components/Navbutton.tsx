"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Navbutton() {
	const [isOpen, setIsOpen] = useState(false);
	const [pendingHref, setPendingHref] = useState<string | null>(null);
	const [isPending, startTransition] = useTransition();
	const [isFadingOutLinks, setIsFadingOutLinks] = useState(false);
	const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
	const pathname = usePathname();
	const router = useRouter();
	const OVERLAY_FADE_S = 0.7;
	const prefersReducedMotion = useReducedMotion();

	const INITIAL_BLUR_PX = 12;
	const inTransition = prefersReducedMotion
		? { duration: 0 }
		: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const };

	const getLinkClassName = (href: string): string => {
		const isActive = pathname === href;
		const base = "text-2xl sm:text-3xl font-medium rounded px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800/20";
		return isActive
			? `${base} text-neutral-900 opacity-100 underline underline-offset-8 decoration-neutral-900/20`
			: `${base} text-neutral-900 opacity-80 hover:opacity-70`;
	};

	const openOverlay = () => setIsOpen(true);
	const closeOverlay = () => setIsOpen(false);

	// Close via Escape
	useEffect(() => {
		if (!isOpen) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen]);

	// Manage focus
	useEffect(() => {
		if (isOpen) firstLinkRef.current?.focus();
	}, [isOpen]);

	// Prevent body scroll while open
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	// Reset fade-out state when overlay closes
	useEffect(() => {
		if (!isOpen) {
			setIsFadingOutLinks(false);
		}
	}, [isOpen]);

	// Intentionally no fade-out on navigation for the menu button.

	// Optionally prefetch when overlay opens
	useEffect(() => {
		if (!isOpen) return;
		router.prefetch("/");
		router.prefetch("/about");
		router.prefetch("/experience");
		router.prefetch("/archive");
	}, [isOpen, router]);

	// Only close after navigation has settled and we're on the target route
	useEffect(() => {
		if (pendingHref && !isPending && pathname === pendingHref) {
			requestAnimationFrame(() => {
				closeOverlay();
				setPendingHref(null);
			});
		}
	}, [isPending, pathname, pendingHref]);

	// Intercept clicks and navigate in a transition
	const handleNavigate = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (pathname === href) {
			closeOverlay();
			return;
		}
		setPendingHref(href);
		// Trigger page fade-out and links fade, then navigate immediately
		if (typeof window !== "undefined") {
			window.dispatchEvent(new Event("app:navigation-fade-out"));
		}
		setIsFadingOutLinks(true);
		startTransition(() => {
			router.push(href);
		});
	};

	return (
		<div className="relative">
			<motion.button
				className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900/80 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800/20"
				aria-haspopup="dialog"
				aria-expanded={isOpen}
				aria-controls="main-menu-overlay"
				onClick={openOverlay}
				initial={{ opacity: 0, filter: `blur(${INITIAL_BLUR_PX}px)` }}
				animate={{ opacity: 1, filter: "blur(0px)" }}
				transition={inTransition}
				style={{ willChange: "opacity, filter" }}
			>
				<span>MENU</span>
			</motion.button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						id="main-menu-overlay"
						role="dialog"
						aria-modal="true"
						className="fixed inset-0 z-[60] bg-white/20 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: OVERLAY_FADE_S, ease: "easeOut" }}
						onClick={closeOverlay}
					>
						<motion.button
							aria-label="Close menu"
							className="absolute top-1 right-1 inline-flex items-center justify-center rounded-md p-2 text-sm font-medium text-neutral-900/80 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800/20 transition"
							onClick={(e) => {
								e.stopPropagation();
								closeOverlay();
							}}
							initial={{ opacity: 0 }}
							animate={isFadingOutLinks ? { opacity: 0 } : { opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={isFadingOutLinks ? { duration: 0.2, ease: "easeIn" } : { duration: 0.3, ease: "easeOut", delay: 0.1 }}
						>
							<span>CLOSE</span>
						</motion.button>

						<div className="flex h-full w-full items-center justify-center">
							<motion.nav
								className="flex flex-col items-center gap-6 sm:gap-8"
								onClick={(e) => e.stopPropagation()}
								initial={{ opacity: 0, y: 8 }}
								animate={isFadingOutLinks ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 8 }}
								transition={isFadingOutLinks ? { duration: 0.2, ease: "easeIn" } : { duration: 0.3, ease: "easeOut", delay: 0.1 }}
							>
								<Link ref={firstLinkRef} href="/" className={getLinkClassName("/")} aria-current={pathname === "/" ? "page" : undefined} onClick={handleNavigate("/")}>
									Home
								</Link>
								<Link href="/about" className={getLinkClassName("/about")} aria-current={pathname === "/about" ? "page" : undefined} onClick={handleNavigate("/about")}>
									About
								</Link>
								<Link href="/experience" className={getLinkClassName("/experience")} aria-current={pathname === "/experience" ? "page" : undefined} onClick={handleNavigate("/experience")}>
									Experience
								</Link>
								<Link href="/archive" className={getLinkClassName("/archive")} aria-current={pathname === "/archive" ? "page" : undefined} onClick={handleNavigate("/archive")}>
									Archive
								</Link>
							</motion.nav>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
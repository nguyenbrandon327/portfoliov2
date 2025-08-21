"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbutton() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const firstLinkRef = useRef(null);
	const pathname = usePathname();
	const OVERLAY_FADE_MS = 700;

	const getLinkClassName = (href) => {
		const isActive = pathname === href;
		const base = "text-2xl sm:text-3xl font-medium rounded px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800/20";
		return isActive
			? `${base} text-neutral-900 opacity-100 underline underline-offset-8 decoration-neutral-900/20`
			: `${base} text-neutral-900 opacity-80 hover:opacity-70`;
	};

	useEffect(() => {
		if (!isOpen) return;
		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				setIsOpen(false);
				setTimeout(() => setIsMounted(false), OVERLAY_FADE_MS);
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen]);

	useEffect(() => {
		if (isOpen && firstLinkRef.current) {
			firstLinkRef.current.focus();
		}
	}, [isOpen]);

	useEffect(() => {
		document.body.style.overflow = isMounted ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMounted]);

	const openOverlay = () => {
		setIsMounted(true);
		requestAnimationFrame(() => setIsOpen(true));
	};

	const closeOverlay = () => {
		setIsOpen(false);
		setTimeout(() => setIsMounted(false), OVERLAY_FADE_MS);
	};

	return (
		<div className="relative">
			<button
				className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900/80 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800/20"
				aria-haspopup="dialog"
				aria-expanded={isOpen}
				aria-controls="main-menu-overlay"
				onClick={openOverlay}
			>
				<span>MENU</span>
			</button>

			{isMounted && (
				<div
					id="main-menu-overlay"
					role="dialog"
					aria-modal="true"
					className={`fixed inset-0 z-[60] bg-white/20 backdrop-blur-sm transition-opacity duration-700 ease-out ${
						isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
					onClick={closeOverlay}
				>
					<button
						aria-label="Close menu"
						className="absolute top-1 right-1 inline-flex items-center justify-center rounded-md p-2 text-sm font-medium text-neutral-900/80 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800/20 transition"
						onClick={(e) => {
							e.stopPropagation();
							closeOverlay();
						}}
					>
						<span>CLOSE</span>
					</button>
					<div
						className="flex h-full w-full items-center justify-center"
					>
						<nav className="flex flex-col items-center gap-6 sm:gap-8" onClick={(e) => e.stopPropagation()}>
							<Link
								ref={firstLinkRef}
								href="/"
								className={getLinkClassName("/")}
								aria-current={pathname === "/" ? "page" : undefined}
								onClick={closeOverlay}
							>
								Home
							</Link>
							<Link
								href="/about"
								className={getLinkClassName("/about")}
								aria-current={pathname === "/about" ? "page" : undefined}
								onClick={closeOverlay}
							>
								About
							</Link>
							<Link
								href="/experience"
								className={getLinkClassName("/experience")}
								aria-current={pathname === "/experience" ? "page" : undefined}
								onClick={closeOverlay}
							>
								Experience
							</Link>
							<Link
								href="/archive"
								className={getLinkClassName("/archive")}
								aria-current={pathname === "/archive" ? "page" : undefined}
								onClick={closeOverlay}
							>
								Archive
							</Link>
						</nav>
					</div>
				</div>
			)}
		</div>
	);
}


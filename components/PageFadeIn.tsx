'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

type PageFadeInProps = {
  children: React.ReactNode;
  className?: string;
  durationMs?: number;
  initialBlurPx?: number;
  exitDurationMs?: number;
};

export default function PageFadeIn({
  children,
  className,
  durationMs = 1200,
  initialBlurPx = 12,
  exitDurationMs = 250,
}: PageFadeInProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isFadingOut, setIsFadingOut] = React.useState(false);

  // Listen for a global navigation fade-out trigger
  React.useEffect(() => {
    const onStart: EventListener = () => setIsFadingOut(true);
    if (typeof window !== 'undefined') {
      window.addEventListener('app:navigation-fade-out', onStart);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('app:navigation-fade-out', onStart);
      }
    };
  }, []);

  // Reset fade-out when the route changes so the new page can fade in
  React.useEffect(() => {
    setIsFadingOut(false);
  }, [pathname]);

  const inTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: durationMs / 1000, ease: [0.22, 1, 0.36, 1] as const };

  const outTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: exitDurationMs / 1000, ease: [0.4, 0, 1, 1] as const };

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, filter: `blur(${initialBlurPx}px)` }}
      animate={isFadingOut ? { opacity: 0, filter: `blur(${initialBlurPx}px)` } : { opacity: 1, filter: 'blur(0px)' }}
      transition={isFadingOut ? outTransition : inTransition}
      style={{ willChange: 'opacity, filter' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



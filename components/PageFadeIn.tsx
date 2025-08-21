'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

type PageFadeInProps = {
  children: React.ReactNode;
  className?: string;
  durationMs?: number;
  initialBlurPx?: number;
};

export default function PageFadeIn({
  children,
  className,
  durationMs = 1200,
  initialBlurPx = 12,
}: PageFadeInProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: durationMs / 1000, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, filter: `blur(${initialBlurPx}px)` }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={transition}
      style={{ willChange: 'opacity, filter' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



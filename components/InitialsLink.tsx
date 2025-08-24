'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import FadeLink from './FadeLink';

export default function InitialsLink() {
  const prefersReducedMotion = useReducedMotion();
  const INITIAL_BLUR_PX = 12;
  const inTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <motion.div
      initial={{ opacity: 0, filter: `blur(${INITIAL_BLUR_PX}px)` }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={inTransition}
      style={{ willChange: 'opacity, filter' }}
   >
      <FadeLink
        href="/"
        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900/80 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800/20"
      >
        B.N.
      </FadeLink>
    </motion.div>
  );
}



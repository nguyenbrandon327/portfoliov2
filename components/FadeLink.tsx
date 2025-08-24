'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { MouseEvent } from 'react';

type FadeLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function FadeLink({ href, className, children }: FadeLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    // If already on the target route, do nothing
    if (pathname === href) {
      e.preventDefault();
      return;
    }
    e.preventDefault();

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('app:navigation-fade-out'));
      const prefersReducedMotion =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const delay = prefersReducedMotion ? 0 : 250;
      window.setTimeout(() => router.push(href), delay);
    }
  };

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}



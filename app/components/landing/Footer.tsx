"use client";

import Link from "next/link";
import { DockerIcon } from "../icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--owlops-border)] py-8">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-4 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 md:text-left text-center md:justify-items-start justify-items-center">
        <Link href="#" className="font-mono text-[15px] font-medium text-[var(--foreground)] flex items-center gap-1.5">
          🐨 OwlOps
        </Link>

        <div className="flex justify-center md:justify-center gap-0.5 flex-wrap">
          <Link
            href="#"
            className="text-[13px] font-medium text-[var(--owlops-muted)] px-2.5 py-1.5 rounded-md transition-colors hover:text-[var(--foreground)] hover:bg-[var(--owlops-surface)]"
          >
            Documentation
          </Link>
          <Link
            href="#deploy"
            className="text-[13px] font-medium text-[var(--owlops-muted)] px-2.5 py-1.5 rounded-md transition-colors hover:text-[var(--foreground)] hover:bg-[var(--owlops-surface)] inline-flex items-center gap-1"
          >
            <DockerIcon size={13} /> Docker Setup
          </Link>
          <Link
            href="#features"
            className="text-[13px] font-medium text-[var(--owlops-muted)] px-2.5 py-1.5 rounded-md transition-colors hover:text-[var(--foreground)] hover:bg-[var(--owlops-surface)]"
          >
            Features
          </Link>
          <Link
            href="/playground"
            className="text-[13px] font-medium text-[var(--owlops-muted)] px-2.5 py-1.5 rounded-md transition-colors hover:text-[var(--foreground)] hover:bg-[var(--owlops-surface)]"
          >
            Playground
          </Link>
        </div>

        <span className="text-xs text-[var(--owlops-muted)] opacity-50">
          Lightweight. Self-hosted. Yours.
        </span>
      </div>
    </footer>
  );
}

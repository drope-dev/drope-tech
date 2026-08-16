"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "stack", href: "#stack" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-[#4ade80] hover:opacity-70 transition-opacity">
          drope.dev
        </a>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-[#666666] hover:text-[#e2e8f0] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:pf95_@hotmail.com"
            className="font-mono text-xs px-3 py-1.5 border border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80] hover:text-[#0a0a0a] transition-all"
          >
            hire me
          </a>
        </div>
      </div>
    </nav>
  );
}

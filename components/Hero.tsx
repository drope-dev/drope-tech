"use client";
import { useEffect, useState } from "react";

const roles = [
  "Backend Engineer",
  "Java · Spring Boot",
  "Go · Microservices",
  "Available for freelance",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl mx-auto w-full pt-20">
        <div className="mb-4 font-mono text-xs text-[#666666]">
          <span className="text-[#4ade80]">$</span> whoami
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 leading-none">
          Pedro<br />
          <span className="text-[#4ade80]">Fernandes</span>
        </h1>

        <div className="font-mono text-lg text-[#666666] h-7 mb-8">
          <span className="text-[#e2e8f0]">{displayed}</span>
          <span className="animate-blink text-[#4ade80]">_</span>
        </div>

        <p className="text-[#666666] max-w-xl leading-relaxed mb-10">
          Senior Software Engineer with 8+ years building{" "}
          <span className="text-[#e2e8f0]">high-performance backend systems</span>.
          Currently at{" "}
          <span className="text-[#4ade80]">Mercado Livre</span>, delivering
          low-latency services that handle{" "}
          <span className="text-[#e2e8f0]">millions of daily transactions</span>.
          Open to freelance projects.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:pf95_@hotmail.com"
            className="font-mono text-sm px-5 py-2.5 bg-[#4ade80] text-[#0a0a0a] font-medium hover:bg-[#86efac] transition-colors"
          >
            → hire me
          </a>
          <a
            href="#experience"
            className="font-mono text-sm px-5 py-2.5 border border-[#1f1f1f] text-[#666666] hover:border-[#4ade80] hover:text-[#4ade80] transition-all"
          >
            → experience
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[#1f1f1f] pt-10">
          {[
            { value: "8+", label: "years of experience" },
            { value: "3", label: "languages (EN · ES · PT)" },
            { value: "∞", label: "production systems" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold text-[#4ade80] mb-1">{stat.value}</div>
              <div className="font-mono text-xs text-[#666666]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

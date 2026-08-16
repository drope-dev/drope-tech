import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="font-mono text-xs text-[#666666]">drope.dev</span>
          <span className="font-mono text-xs text-[#666666]">
            <span className="text-[#4ade80]">●</span> open to freelance
          </span>
        </div>
      </footer>
    </>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-[#1f1f1f]">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-xs text-[#666666] mb-2">
          <span className="text-[#4ade80]">$</span> ping pedro
        </div>
        <h2 className="text-3xl font-semibold mb-4">Let&apos;s work together</h2>
        <p className="text-[#666666] max-w-lg mb-10">
          Open for freelance projects in backend, integrations, cloud architecture, and full-stack.
          English, Spanish, or Portuguese — whichever works best for you.
        </p>

        <div className="border border-[#1f1f1f] p-8 max-w-lg">
          <div className="space-y-4 font-mono text-sm">
            <div className="flex gap-4">
              <span className="text-[#4ade80] w-16 shrink-0">email</span>
              <a href="mailto:pf95_@hotmail.com" className="text-[#e2e8f0] hover:text-[#4ade80] transition-colors">
                pf95_@hotmail.com
              </a>
            </div>
            <div className="flex gap-4">
              <span className="text-[#4ade80] w-16 shrink-0">linkedin</span>
              <a
                href="https://linkedin.com/in/peofernandes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e2e8f0] hover:text-[#4ade80] transition-colors"
              >
                /in/peofernandes
              </a>
            </div>
            <div className="flex gap-4">
              <span className="text-[#4ade80] w-16 shrink-0">github</span>
              <a
                href="https://github.com/dropefernandes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e2e8f0] hover:text-[#4ade80] transition-colors"
              >
                /dropefernandes
              </a>
            </div>
            <div className="flex gap-4">
              <span className="text-[#4ade80] w-16 shrink-0">agents</span>
              <a href="/AGENTS.md" className="text-[#e2e8f0] hover:text-[#4ade80] transition-colors">
                /AGENTS.md
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

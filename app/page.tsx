const posts: { date: string; title: string; href: string }[] = [
  // { date: "2026-08", title: "...", href: "/writing/..." },
];

const projects: { name: string; description: string; href: string }[] = [
  // { name: "crochet-shop", description: "Go HTTP server — learning project", href: "https://github.com/drope-dev/crochet-shop" },
];

export default function Home() {
  return (
    <div className="max-w-[640px] mx-auto px-6 py-12 md:py-20">

      {/* nav */}
      <nav className="mb-16">
        <a href="/" className="text-sm font-medium text-[#ebebeb] hover:opacity-50 transition-opacity">
          drope.dev
        </a>
      </nav>

      {/* intro */}
      <section className="mb-10">
        <h1 className="text-xl font-semibold mb-1 text-[#ebebeb]">Pedro Fernandes</h1>
        <p className="text-sm text-[#555] mb-8">Software Engineer · São Paulo, Brazil</p>

        <div className="space-y-4 text-[0.9375rem] text-[#999] leading-[1.7]">
          <p>
            8+ years building high-performance backend systems. Currently at{" "}
            <a
              href="https://mercadolivre.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ebebeb] underline underline-offset-2 decoration-[#333] hover:decoration-[#ebebeb] transition-colors"
            >
              Mercado Livre
            </a>
            , working on low-latency, high-concurrency services using Java, Spring Boot and Go in a large-scale microservices ecosystem.
          </p>
          <p>
            Background in financial and insurance domains — AWS, observability, CI/CD, and clean
            architecture. Comfortable owning features end-to-end, from system design to production,
            in cross-functional remote teams.
          </p>
          <p className="text-[#555]">
            Previously at Ciclic, EstrelaBet, adMooH, Accenture, and TOTVS.
          </p>
        </div>
      </section>

      {/* links */}
      <section className="mb-20 flex items-center gap-3 text-sm text-[#555]">
        <a href="mailto:pf95_@hotmail.com" className="hover:text-[#ebebeb] transition-colors">
          email
        </a>
        <span className="text-[#2a2a2a]">·</span>
        <a
          href="https://linkedin.com/in/peofernandes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ebebeb] transition-colors"
        >
          linkedin
        </a>
        <span className="text-[#2a2a2a]">·</span>
        <a
          href="https://github.com/drope-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ebebeb] transition-colors"
        >
          github
        </a>
      </section>

      {/* projects */}
      <section className="mb-12">
        <h2 className="text-sm font-medium text-[#ebebeb] mb-5">Projects</h2>
        {projects.length === 0 ? (
          <p className="text-sm text-[#333]">Nothing here yet.</p>
        ) : (
          <ul className="space-y-4">
            {projects.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#ebebeb] hover:opacity-60 transition-opacity"
                >
                  {p.name}
                </a>
                <p className="text-sm text-[#555] mt-0.5">{p.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* writing */}
      <section>
        <h2 className="text-sm font-medium text-[#ebebeb] mb-5">Writing</h2>
        {posts.length === 0 ? (
          <p className="text-sm text-[#333]">Nothing published yet.</p>
        ) : (
          <ul className="space-y-3">
            {posts.map((post) => (
              <li key={post.href} className="flex items-baseline gap-5">
                <span className="text-sm text-[#333] tabular-nums shrink-0">{post.date}</span>
                <a
                  href={post.href}
                  className="text-sm text-[#999] hover:text-[#ebebeb] transition-colors"
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

    </div>
  );
}

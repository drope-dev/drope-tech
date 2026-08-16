const cases = [
  {
    title: "High-scale backend services",
    context: "Marketplace & payments",
    description:
      "Design and evolution of concurrent services with Java, Spring Boot and Go, with resilience patterns and asynchronous communication.",
    tags: ["Java 17", "Spring Boot 3", "Go", "Microservices"],
  },
  {
    title: "Third-party platform integrations",
    context: "Gaming & digital products",
    description:
      "REST API integrations, legacy modernization and delivery pipelines with quality gates for services that depend on external partners.",
    tags: ["Go", "REST APIs", "CI/CD", "SonarCloud"],
  },
  {
    title: "Reliability and observability",
    context: "Insurance & fintech",
    description:
      "Monitoring foundations with dashboards, alerts and SLO-oriented observability for distributed services and cloud workloads.",
    tags: ["AWS", "Datadog", "Grafana", "SLOs"],
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6 border-t border-[#1f1f1f]">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-xs text-[#666666] mb-2">
          <span className="text-[#4ade80]">$</span> ls selected-work
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl font-semibold">Selected work</h2>
          <span className="font-mono text-xs text-[#666666]">
            Professional details anonymized
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((item) => (
            <article key={item.title} className="border border-[#1f1f1f] p-6 hover:border-[#4ade80]/30 transition-colors">
              <p className="font-mono text-xs text-[#4ade80] mb-4">{item.context}</p>
              <h3 className="text-lg font-semibold text-[#e2e8f0] mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#666666] mb-6">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] px-2 py-1 border border-[#1f1f1f] text-[#e2e8f0]">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

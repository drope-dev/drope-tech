const categories = [
  {
    label: "backend",
    items: ["Java 17", "Spring Boot 3", "Go", "Node.js", "Python"],
  },
  {
    label: "frontend",
    items: ["React", "TypeScript", "Vue 3", "Nuxt", "Tailwind CSS"],
  },
  {
    label: "cloud & infra",
    items: ["AWS Lambda", "DynamoDB", "SQS", "CloudFront", "Docker", "GitHub Actions"],
  },
  {
    label: "architecture",
    items: ["Microservices", "Clean Architecture", "REST APIs", "Async Messaging", "Circuit Breakers"],
  },
  {
    label: "observability",
    items: ["Datadog", "Grafana", "SLO Monitoring", "Distributed Tracing"],
  },
  {
    label: "databases",
    items: ["MySQL", "PostgreSQL", "DynamoDB", "Redis", "Google Spanner"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6 border-t border-[#1f1f1f]">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-xs text-[#666666] mb-2">
          <span className="text-[#4ade80]">$</span> cat stack.json
        </div>
        <h2 className="text-3xl font-semibold mb-10">Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1f1f1f]">
          {categories.map((cat) => (
            <div key={cat.label} className="bg-[#0a0a0a] p-6">
              <div className="font-mono text-xs text-[#4ade80] mb-3">{cat.label}</div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2 py-1 bg-[#111111] text-[#e2e8f0] border border-[#1f1f1f]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

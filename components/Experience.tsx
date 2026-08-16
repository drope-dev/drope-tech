const jobs = [
  {
    company: "Mercado Livre",
    role: "Software Engineer",
    period: "2023 — present",
    domain: "affiliates · payments",
    highlights: [
      "High-concurrency services in Java 17 + Spring Boot 3 and Go, handling millions of daily transactions",
      "Clean architecture across multiple microservices with SOLID principles and design patterns",
      "System resilience via circuit breakers, retry policies, and async messaging",
      "CI/CD pipelines with GitHub Actions",
    ],
  },
  {
    company: "EstrelaBet",
    role: "Full Stack Engineer",
    period: "2023",
    domain: "gaming · integrations",
    highlights: [
      "REST APIs in Go integrated with third-party gaming platforms",
      "Legacy refactoring initiatives reducing technical debt",
      "CI/CD with GitHub Actions + SonarCloud quality gates",
      "Frontend architecture with Vue 3 and Nuxt",
    ],
  },
  {
    company: "Ciclic",
    role: "Software Engineer",
    period: "2021 — 2023",
    domain: "insurance · fintech",
    highlights: [
      "Microservices with Java and Spring Boot integrating insurance partners APIs",
      "AWS infrastructure: Lambda, DynamoDB, SQS, CloudFront, MySQL RDS",
      "Observability stack with Datadog and Grafana — dashboards, alerts, SLO monitoring",
    ],
  },
  {
    company: "adMooH · Accenture · TOTVS",
    role: "Software Engineer",
    period: "2016 — 2021",
    domain: "adtech · enterprise",
    highlights: [
      "REST APIs in C# .NET for advertising platforms",
      "React and Angular frontends for campaign management",
      "Architecture for e-learning products at TOTVS",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-[#1f1f1f]">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-xs text-[#666666] mb-2">
          <span className="text-[#4ade80]">$</span> git log --oneline
        </div>
        <h2 className="text-3xl font-semibold mb-10">Experience</h2>

        <div className="space-y-0">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="border border-[#1f1f1f] p-6 hover:border-[#4ade80]/30 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <span className="font-semibold text-[#e2e8f0]">{job.company}</span>
                  <span className="text-[#666666] mx-2">·</span>
                  <span className="text-[#666666]">{job.role}</span>
                </div>
                <div className="font-mono text-xs text-[#4ade80]">{job.period}</div>
              </div>
              <div className="font-mono text-xs text-[#666666] mb-4">{job.domain}</div>
              <ul className="space-y-1.5">
                {job.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-[#666666] flex gap-2">
                    <span className="text-[#4ade80] shrink-0">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

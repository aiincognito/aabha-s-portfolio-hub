import { SectionBackdrop } from "../SectionBackdrop";
import { Reveal } from "../Reveal";

type Job = {
  company: string;
  date: string;
  role: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    company: "Bradsol",
    date: "Apr 2026 – Jun 2026",
    role: "Forward Deployed Engineer",
    bullets: [
      "Built a FastAPI backend with 20+ endpoints, 19-table MySQL schema, JWT auth, DB-driven RBAC, and bcrypt OTP login.",
      "Developed a React + Vite frontend with role-aware routing; integrated APScheduler with MySQL advisory locks.",
    ],
  },
  {
    company: "FewShotPrep",
    date: "Dec 2024 – Jun 2025",
    role: "AI Associate Cloud Engineer",
    bullets: [
      "Built LLM-powered conversational agents using LangChain and Guardrails AI for output alignment.",
      "Generated 1M+ token synthetic JSONL dataset using GPT-4o and LLaMA 3 for model training pipelines.",
    ],
  },
  {
    company: "Atomstate",
    date: "May 2023 – Nov 2023",
    role: "AI/ML Trainee",
    bullets: [
      "Deployed real-time sentiment analysis via Azure OpenAI APIs, 82% accuracy across 500+ scraped sources.",
      "Built a multilingual NLP translation pipeline improving model accuracy by 35%.",
    ],
  },
  {
    company: "KG Reddy College",
    date: "Oct 2022 – Jun 2023",
    role: "Project Intern",
    bullets: [
      "Built an AI meeting summarisation tool using Whisper AI with 90% transcription accuracy.",
      "Developed KGR-Code, a Python/Java assessment platform used by 250+ students and faculty.",
    ],
  },
];

function JobCard({ job }: { job: Job }) {
  return (
    <div
      style={{
        backgroundColor: "var(--card)",
        border: "0.5px solid var(--border)",
        borderRadius: "14px",
        padding: "20px 24px",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <span className="font-semibold text-[14px]" style={{ color: "var(--highlight)" }}>
          {job.company}
        </span>
        <span className="text-[11px]" style={{ color: "var(--dim)" }}>
          {job.date}
        </span>
      </div>
      <div className="text-[12px] mb-3" style={{ color: "var(--accent)" }}>
        {job.role}
      </div>
      <ul className="flex flex-col gap-2">
        {job.bullets.map((b, i) => (
          <li key={i} className="text-[12px]" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <div
      className="relative w-full h-full flex items-center px-4 sm:px-6 md:px-10 lg:px-16 py-20"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <SectionBackdrop blobSide="right" blobColor="var(--accent3)" blobOpacity={0.09} />
      <div className="relative z-[1] w-full max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Reveal>
            <span className="uppercase text-[11px]" style={{ color: "var(--accent)", letterSpacing: "0.18em" }}>
              Experience
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="font-semibold"
              style={{
                color: "var(--highlight)",
                fontSize: "clamp(22px, 3vw, 28px)",
                letterSpacing: "-0.01em",
              }}
            >
              Where I've shipped.
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

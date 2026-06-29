export interface Project {
  slug: string
  title: string
  role: string
  period: string
  summary: string
  description: string
  highlights: string[]
  techStack: string[]
  /** Path to a demo gif/screenshot in /public. Drop the file here later. */
  preview: string
  github?: string
  demo?: string
  /** Embeddable URL (e.g. HF Space) — enables an in-site playable iframe. */
  playUrl?: string
}

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

// Featured order: first 4 show on the homepage; all show on /projects.
// TODO: replace "#" with real URLs.
export const projects: Project[] = [
  {
    slug: "e-tala",
    preview: "/projects/e-tala.mp4",
    title: "E-Tala Enrollment System",
    role: "Full-Stack Developer (Project Lead)",
    period: "May 2026 – June 2026",
    summary: "Live Laravel enrollment platform for a senior high school — admission to records, in production.",
    description:
      "A web-based Senior High School enrollment system (Laravel 13) for Cabrivex International SHS, live in production on Render. It models the full DepEd-style journey: applicants register, verify email, and complete a multi-step application (personal info, education background, document uploads); registrars then qualify, waitlist, or return them. Admitted students enroll per semester, get auto-generated class schedules, and track sections, subjects, grades, and records — all behind role-isolated student and registrar portals.",
    highlights: [
      "Led a 4-person team as project lead, owning scaffolding, authentication, enrollment core, mail services, and deployment.",
      "Built secure auth on Laravel Breeze: email verification, two-factor, forced first-login password change, and role-based middleware separating student and registrar portals.",
      "Implemented the admission → enrollment pipeline: application wizard with document uploads, registrar review (qualify / waitlist / return), capacity-based slotting, auto schedule generation, 100-point grade encoding, and semester finalization.",
      "Containerized with Docker and deployed to Render (Laravel 13, PHP 8.3, MySQL 8, Vite, Bootstrap 5.3); transactional admission/verification emails via SendGrid, with audit logging across registrar actions.",
    ],
    techStack: ["Laravel 13", "PHP 8.3", "MySQL", "Blade", "Bootstrap 5.3", "Docker", "Render", "SendGrid"],
    github: "https://github.com/gjvlio/E-Tala-Enrollment-System",
    demo: "https://cishs-enrollment.onrender.com",
  },
  {
    slug: "snake-and-lenders",
    preview: "/projects/snake-and-lenders.mp4",
    title: "Snake & Lenders",
    role: "Full-Stack Developer & AI Engineer",
    period: "April 2026 – June 2026",
    summary: "Strategic Snakes & Ladders with an economy layer and a PPO agent that outplays Expectimax.",
    description:
      "A strategic twist on Snakes & Ladders that adds a resource-management layer: players earn scarce points and spend them on single-use sabotage snakes that knock opponents back and rob their points — so winning is about timing the economy, not luck. It runs in the browser for up to 4 players (any mix of humans and AI) as a thin client over a Python engine that is the single source of truth: all rules execute server-side. Two AI tiers ship — a deliberately weak Expectimax (easy) and a trained PPO network (hard).",
    highlights: [
      "Trained the hard-difficulty PPO agent with Stable-Baselines3 over a custom Gymnasium environment (custom reward shaping, ~1.5M steps), reaching a 61.5% win rate against the Expectimax baseline.",
      "Designed a server-authoritative architecture: a Flask backend exposes the engine while the vanilla-JS canvas client only renders state and sends actions, so rules can't be tampered with client-side.",
      "Built the core game engine in Python — BFS-validated randomized board generation, the scarce-point tile economy, and snake/bomb/movement rules — shared across web, console, and AI training.",
      "Packaged with Docker and deployed to HuggingFace Spaces; collaborated as a 4-person AI course team (PUP BSCS).",
    ],
    techStack: ["Python", "Stable-Baselines3", "Gymnasium", "PyTorch", "Flask", "JavaScript", "Docker", "Hugging Face"],
    github: "https://github.com/Enami345/snake-lenders",
    demo: "https://huggingface.co/spaces/gjrvlio/snakes_and_lenders",
    playUrl: "https://gjrvlio-snakes-and-lenders.hf.space",
  },
  {
    slug: "moviebox",
    preview: "/projects/moviebox.gif",
    title: "Moviebox",
    role: "Database Administrator",
    period: "May 2025 – June 2025",
    summary: "Relational data layer — schema, triggers, and a repository DAL — behind a movie & soundtrack review platform.",
    description:
      "A full-stack movie and soundtrack review platform (React + Vite client, Express/Node API on MySQL) where users review films and albums, manage profiles, and connect through friendships. As database administrator I owned the data layer: a normalized MySQL schema covering movies, soundtracks, albums, actors, crew, genres, reviews, users, roles, and admin permissions, plus the triggers and repository-pattern DAL the API runs on.",
    highlights: [
      "Designed a normalized MySQL schema (ERD/EERD) across movies, soundtracks, albums, people, genres, reviews, users, and role/permission tables — eliminating redundancy and enforcing integrity.",
      "Authored SQL tables and triggers (moviebox_tables-and-triggers.sql) to keep derived data consistent at the database layer.",
      "Built a repository-pattern data access layer (per-entity repositories over a shared base) with caching and logging for the Express API to consume.",
      "Validated table structures and relationships against the logical design, resolving logical-vs-physical conflicts to keep the implementation normalized.",
    ],
    techStack: ["MySQL", "SQL", "Triggers", "Express", "Node.js", "React"],
    github: "https://github.com/gjvlio/moviebox",
  },
  {
    slug: "tugma",
    preview: "/projects/tugma.gif",
    title: "Tugma",
    role: "Backend Developer",
    period: "May 2025 – June 2025",
    summary: "FastAPI job-matching platform with custom hashing/mergesort and applicant–employer matching.",
    description:
      "A job-matching platform (\"tugma\" — Filipino for \"match\") connecting applicants and employers, with company profiles, job posts, applications, interviews, tags, and notifications. Built on a versioned FastAPI backend (api/v1) with JWT and email-OTP auth. I focused on the backend's data-structure layer — custom hashing and sorting implemented from scratch rather than leaning on built-ins.",
    highlights: [
      "Implemented hashing with collision handling from scratch (app/algorithms/hashing.py), improving lookup efficiency over the baseline approach.",
      "Built and benchmarked FastAPI endpoints across applicant, company, jobs, application, interview, and notification resources, validating performance against alternative algorithms.",
      "Worked within a layered FastAPI architecture (versioned API, CRUD, models, middleware) with JWT and email-OTP authentication, containerized via Docker.",
      "Aligned backend logic with frontend and database teammates across applicant and employer workflows.",
    ],
    techStack: ["Python", "FastAPI", "Docker", "JWT / OTP", "Algorithms"],
    github: "https://github.com/sheowl/tugma",
  },
  {
    slug: "polymart",
    preview: "/projects/polymart.gif",
    title: "Polymart",
    role: "Backend Developer / Sub-team Lead",
    period: "December 2024 – January 2025",
    summary: "Java Swing marketplace desktop app for PUP students — buyer/seller portals, meetups, and scheduling.",
    description:
      "PUP's student marketplace as a Java Swing desktop application, built to streamline campus buy-and-sell transactions. Separate buyer and seller portals handle sign-up/login, product listings, orders, and receipts, with a location-selection system (pinned campus meetup points) and a booking-style scheduling calendar for arranging meetups around seller availability. Data is persisted in SQLite via JDBC.",
    highlights: [
      "Led a sub-team within the 'Polyrangers' group, delegating by specialization and running check-ins to keep delivery on track.",
      "Integrated a SQLite backend (sqlite-jdbc) with a Java Swing GUI into a working desktop application — user sessions, sign-up/sign-in, and product/order persistence.",
      "Helped build the meetup location selector and the JCalendar-based scheduling system for timeslot booking against seller availability.",
      "Debugged GUI and component issues across buyer/seller flows to stabilize the build.",
    ],
    techStack: ["Java", "Java Swing", "SQLite", "JDBC", "JCalendar"],
    github: "https://github.com/poly-rangers/polymart",
  },
]

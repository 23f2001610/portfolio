import React, { useState } from "react";

const themes = {
  dark: {
    ink: "#0B1320",
    card: "#121C2B",
    cardBorder: "#23344A",
    paper: "#F3EFE4",
    copper: "#C8794A",
    teal: "#4F8A8B",
    dim: "#8FA0B3",
  },
  light: {
    ink: "#F3EFE4",
    card: "#FFFFFF",
    cardBorder: "#E1D9C8",
    paper: "#1B2230",
    copper: "#B5602F",
    teal: "#356768",
    dim: "#6B6258",
  },
};

const wave =
  "M0,40 C20,40 20,10 40,10 C60,10 60,60 80,60 C100,60 100,20 120,20 C140,20 140,50 160,50 C180,50 180,15 200,15 C220,15 220,55 240,55 C260,55 260,30 280,30 C300,30 300,40 320,40 L320,40";

function SignalDivider({ flip, color }) {
  return (
    <svg
      viewBox="0 0 320 70"
      width="100%"
      height="46"
      preserveAspectRatio="none"
      style={{ display: "block", transform: flip ? "scaleY(-1)" : "none" }}
    >
      <path d={wave} fill="none" stroke={color} strokeWidth="1.4" opacity="0.55" />
    </svg>
  );
}

const education = [
  {
    school: "National Institute of Technology, Durgapur",
    detail: "B.Tech, Electrical Engineering — CGPA 7.45",
    time: "Aug 2024 – Present",
  },
  {
    school: "Indian Institute of Technology, Madras",
    detail: "B.S. in Data Science and Applications — CGPA 5.74",
    time: "May 2023 – Present",
  },
  {
    school: "Sunrise English Medium School, Kolkata",
    detail: "ISC (10+2) — 88.7%",
    time: "2021 – 23",
  },
  {
    school: "Sunrise English Medium School, Kolkata",
    detail: "ICSE (10) — 96.4%",
    time: "2009 – 21",
  },
  {
    school: "NPTEL",
    detail: "German 1",
    time: "Aug 2024 – Nov 2024",
  },
];

const experience = [
  {
    role: "Research Intern — Electrical Impedance Tomography (EIT)",
    org: "NIT Durgapur, under Dr. Tushar Kanti Bera",
    time: "Jan 2026 – Present",
    detail:
      "Studying theoretical foundations of EIT for brain imaging, including impedance modeling and inverse reconstruction techniques.",
  },
  {
    role: "Summer Research Intern — PSO for Inverse Modelling",
    org: "IISER Mohali",
    time: "May 2026 – Present",
    detail: "Studying optimization methods applied to inverse modelling problems.",
  },
];

const projects = [
  {
    name: "Vehicle Parking App",
    stack: "Python · Flask · SQLAlchemy",
    detail:
      "Users book and release parking spots; admins manage lots, pricing, and live status.",
  },
  {
    name: "Quiz Master App",
    stack: "Python · Flask · SQLAlchemy",
    detail: "Admins manage quizzes and users; users attempt quizzes and view scores.",
  },
  {
    name: "Edu-Archive",
    stack: "Flask · SQLite · Jinja2",
    detail:
      "Authenticated, role-based file-archive app built on a modular MVC structure.",
  },
  {
    name: "Data Analysis Portfolio",
    stack: "Python · Google Colab",
    detail:
      "Monte Carlo simulation, distributions, bootstrap methods, and maximum likelihood across several datasets.",
  },
  {
    name: "Business Data Management Capstone",
    stack: "Python · Excel",
    detail:
      "End-to-end EDA on e-commerce sales data — discount impact, margins, and pricing strategy.",
  },
  {
    name: "Spam Email Classifier",
    stack: "Pandas · NumPy · Scikit-learn",
    detail:
      "Pre-processing, model training, and evaluation pipeline built in Google Colab.",
  },
  {
    name: "LinkedIn Post Generator",
    stack: "Python · Streamlit · LLaMA",
    detail:
      "AI-powered post generator with prompt engineering for tone control and real-time generation.",
  },
  {
    name: "AI Restaurant Deal Finder",
    stack: "Pandas · Streamlit",
    detail:
      "Parses Swiggy menu JSON to surface best-value dishes on an interactive dashboard.",
  },
];

const skills = {
  Languages: ["Python", "C", "Java", "SQL"],
  Technical: ["Machine Learning", "DBMS", "DSA", "COMSOL"],
  "Tech Stack": ["HTML", "CSS", "JavaScript", "Pandas", "Seaborn"],
  Design: ["Figma", "Adobe Photoshop", "Canva"],
};

function Section({ id, label, children, palette }) {
  return (
    <section id={id} style={{ padding: "64px 24px", maxWidth: 880, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          marginBottom: 28,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: palette.copper,
            fontSize: 14,
            letterSpacing: 1,
          }}
        >
          {label}
        </span>
        <div style={{ flex: 1, height: 1, background: palette.cardBorder }} />
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(null);
  const [mode, setMode] = useState("dark");
  const palette = themes[mode];

  const handleDownload = () => window.print();
  const toggleTheme = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <div
      style={{
        background: palette.ink,
        color: palette.paper,
        minHeight: "100vh",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        transition: "background 0.25s, color 0.25s",
      }}
    >
      {/* TOP CONTROLS */}
      <div
        className="no-print"
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          display: "flex",
          gap: 8,
          zIndex: 10,
        }}
      >
        <button
          onClick={toggleTheme}
          style={{
            background: palette.card,
            border: `1px solid ${palette.cardBorder}`,
            color: palette.paper,
            borderRadius: 4,
            padding: "8px 12px",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          {mode === "dark" ? "Light mode" : "Dark mode"}
        </button>
        <button
          onClick={handleDownload}
          style={{
            background: palette.copper,
            border: "none",
            color: "#fff",
            borderRadius: 4,
            padding: "8px 12px",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          Download résumé
        </button>
      </div>
      {/* HERO */}
      <header style={{ padding: "72px 24px 0", maxWidth: 880, margin: "0 auto" }}>
        <p
          style={{
            color: palette.teal,
            letterSpacing: 3,
            fontSize: 12,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Electrical Engineering · Data Science
        </p>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: "clamp(40px, 8vw, 72px)",
            margin: "8px 0 4px",
            lineHeight: 1.02,
          }}
        >
          Harmeet Kaur
        </h1>
        <p
          style={{
            color: palette.dim,
            fontSize: 17,
            maxWidth: 560,
            lineHeight: 1.6,
            margin: "12px 0 28px",
          }}
        >
          Reading signals where electricity meets the body — from impedance
          tomography for brain imaging to inverse modelling and applied ML.
        </p>
        <div style={{ display: "flex", gap: 18, fontSize: 14, color: palette.paper, flexWrap: "wrap" }}>
          <a href="mailto:lionharmeetkaur@gmail.com" style={{ color: palette.paper, textDecoration: "none", borderBottom: `1px solid ${palette.copper}` }}>
            lionharmeetkaur@gmail.com
          </a>
          <span style={{ color: palette.dim }}>+91 94321 06527</span>
          <span style={{ color: palette.dim }}>GitHub ↗</span>
        </div>
      </header>

      <div style={{ maxWidth: 880, margin: "32px auto 0", padding: "0 24px" }}>
        <SignalDivider color={palette.copper} />
      </div>

      {/* EXPERIENCE */}
      <Section id="experience" label="Current Research" palette={palette}>
        <div style={{ display: "grid", gap: 18 }}>
          {experience.map((e) => (
            <div
              key={e.role}
              style={{
                background: palette.card,
                border: `1px solid ${palette.cardBorder}`,
                borderRadius: 4,
                padding: "20px 22px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>{e.role}</h3>
                <span style={{ color: palette.copper, fontSize: 13, whiteSpace: "nowrap" }}>{e.time}</span>
              </div>
              <p style={{ margin: "4px 0 10px", color: palette.teal, fontSize: 13 }}>{e.org}</p>
              <p style={{ margin: 0, color: palette.dim, fontSize: 14.5, lineHeight: 1.6 }}>{e.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" label="Projects" palette={palette}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
          {projects.map((p) => {
            const isOpen = open === p.name;
            return (
              <button
                key={p.name}
                onClick={() => setOpen(isOpen ? null : p.name)}
                style={{
                  textAlign: "left",
                  background: palette.card,
                  border: `1px solid ${isOpen ? palette.copper : palette.cardBorder}`,
                  borderRadius: 4,
                  padding: "16px 18px",
                  cursor: "pointer",
                  color: palette.paper,
                  fontFamily: "inherit",
                  transition: "border-color 0.2s",
                }}
              >
                <h4 style={{ margin: "0 0 6px", fontSize: 15 }}>{p.name}</h4>
                <p style={{ margin: "0 0 8px", color: palette.copper, fontSize: 12, letterSpacing: 0.4 }}>
                  {p.stack}
                </p>
                {isOpen && (
                  <p style={{ margin: 0, color: palette.dim, fontSize: 13.5, lineHeight: 1.55 }}>
                    {p.detail}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </Section>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px" }}>
        <SignalDivider flip color={palette.copper} />
      </div>

      {/* SKILLS */}
      <Section id="skills" label="Skills" palette={palette}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 22 }}>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p style={{ color: palette.teal, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 10px" }}>
                {group}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 13,
                      padding: "5px 10px",
                      border: `1px solid ${palette.cardBorder}`,
                      borderRadius: 3,
                      color: palette.paper,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" label="Education" palette={palette}>
        <div style={{ display: "grid", gap: 0 }}>
          {education.map((e, i) => (
            <div
              key={e.school + i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                padding: "14px 0",
                borderBottom: i < education.length - 1 ? `1px solid ${palette.cardBorder}` : "none",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{e.school}</p>
                <p style={{ margin: "3px 0 0", color: palette.dim, fontSize: 13.5 }}>{e.detail}</p>
              </div>
              <span style={{ color: palette.copper, fontSize: 13, whiteSpace: "nowrap" }}>{e.time}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENT + CO-CURRICULAR */}
      <Section id="more" label="Beyond the Lab" palette={palette}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          <div style={{ background: palette.card, border: `1px solid ${palette.cardBorder}`, borderRadius: 4, padding: 20 }}>
            <p style={{ color: palette.teal, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 8px" }}>
              Achievement
            </p>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>
              1st Runner-up — LyteCI project, GLUG/LINUX, NIT Durgapur
            </p>
          </div>
          <div style={{ background: palette.card, border: `1px solid ${palette.cardBorder}`, borderRadius: 4, padding: 20 }}>
            <p style={{ color: palette.teal, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 8px" }}>
              Co-curricular
            </p>
            <p style={{ margin: "0 0 6px", fontSize: 14.5, lineHeight: 1.6 }}>
              Junior Coordinator, Centre for Cognitive Activities (CCA)
            </p>
            <p style={{ margin: "0 0 6px", fontSize: 14.5, lineHeight: 1.6 }}>
              Graphics Designer for NIT Durgapur's oldest and largest club
            </p>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>
              Organizing Committee, AAROHAN 2025–26
            </p>
          </div>
        </div>
      </Section>

      <footer style={{ textAlign: "center", padding: "32px 24px 56px", color: palette.dim, fontSize: 13 }}>
        Harmeet Kaur — {new Date().getFullYear()}
      </footer>
    </div>
  );
}

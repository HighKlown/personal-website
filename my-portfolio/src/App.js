import { useState } from "react";

const data = {
  name: "Mark Heo",
  title: "Data Analyst",
  profilePhoto: "/profile.jpg", // Save your photo as profile.jpg in the same folder
  email: "jungheo91@gmail.com",
  github: "https://github.com/HighKlown",
  linkedin: "https://www.linkedin.com/in/jung-h-364a70115/",
  bio: "Hi! I'm a data analyst passionate about turning raw data into meaningful insights. I enjoy working with data to solve real-world problems and help teams make better decisions.",

  projects: [
    {
      name: "Hatememe classifier",
      description: "This project compares two ways of teaching an AI model to understand both images and text together. The first method is simpler: it looks at the image and the caption separately, then combines the results at the end to make a prediction. The second method is more advanced: it allows the image and caption to interact earlier in the process, so the model can better understand how the words relate to what is shown in the image. Overall, the project shows how combining visual information and written descriptions can help AI make better decisions than using either one alone.",
      tech: ["Python", "Pytorch", "Hugging Face"],
      link: "https://github.com/HighKlown/HatefulMeme-classification",
    },
    {
      name: "",
      description: "Another project you've built. Explain the purpose, your role, and any interesting technical decisions you made.",
      tech: ["Python", "FastAPI", "Docker"],
      link: "#",
    },
    {
      name: "Project Three",
      description: "A third project showcasing a different skill set or domain. This could be a hackathon project, side project, or school assignment.",
      tech: ["TypeScript", "Next.js", "Tailwind CSS"],
      link: "#",
    },
  ],

  education: [
    {
      school: "Columbia University",
      degree: "B.S. Computer Science",
      years: "2020 – 2024",
      courses: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "NLP",
        "Database Systems",
        "Applied NLP",
        "Applied Computer Vision",
        "Web Development",
        "Linear Algebra",
        "Probability & Statistics",
        "Discrete Mathematics",
      ],
    },
  ],

  skills: {
    Languages: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C", "C++"],
    Frameworks: ["React", "Next.js", "Node.js", "FastAPI", "Spring Boot"],
    Tools: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB"],
  },
};

const NAV_ITEMS = ["About", "Projects", "Education", "Skills"];

const styles = {
  bg: "#0f1117",
  card: "#1a1d27",
  border: "#2a2d3e",
  accent: "#7c6ff7",
  accentSoft: "#3d3a6b",
  text: "#e2e8f0",
  muted: "#8892a4",
  tag: "#252836",
};

function Tag({ label }) {
  return (
    <span
      style={{
        background: styles.tag,
        color: styles.accent,
        border: `1px solid ${styles.accentSoft}`,
        borderRadius: 6,
        padding: "2px 10px",
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 72 }}>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: styles.text,
          marginBottom: 24,
          paddingBottom: 10,
          borderBottom: `1px solid ${styles.border}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            width: 4,
            height: 22,
            background: styles.accent,
            borderRadius: 4,
            display: "inline-block",
          }}
        />
        {title}
      </h2>
      {children}
    </section>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: styles.card,
        border: `1px solid ${styles.border}`,
        borderRadius: 12,
        padding: "20px 24px",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        background: styles.bg,
        minHeight: "100vh",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        color: styles.text,
      }}
    >
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(15,17,23,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${styles.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 40px",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 18, color: styles.accent }}>
          {data.name}
        </span>
        <div style={{ display: "flex", gap: 4 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                background: activeSection === item ? styles.accentSoft : "transparent",
                color: activeSection === item ? styles.accent : styles.muted,
                border: "none",
                borderRadius: 8,
                padding: "6px 16px",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 40px 60px",
          borderBottom: `1px solid ${styles.border}`,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            margin: "0 auto 20px",
            border: `3px solid ${styles.accent}`,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(135deg, ${styles.accent}, #c084fc)`,
            boxShadow: `0 0 0 4px ${styles.accentSoft}`,
          }}
        >
          {!imgError ? (
            <img
              src={data.profilePhoto}
              alt={data.name}
              onError={() => setImgError(true)}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <span style={{ fontSize: 36, fontWeight: 700, color: "#fff" }}>
              {data.name.charAt(0)}
            </span>
          )}
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 8px" }}>
          {data.name}
        </h1>
        <p style={{ color: styles.accent, fontSize: 16, margin: "0 0 14px", fontWeight: 500 }}>
          {data.title}
        </p>
        <p style={{ color: styles.muted, maxWidth: 520, margin: "0 auto 24px", lineHeight: 1.7 }}>
          {data.bio}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <a
            href={`mailto:${data.email}`}
            style={{
              background: styles.accent,
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Contact Me
          </a>
          <a
            href={data.github}
            style={{
              background: styles.card,
              color: styles.text,
              border: `1px solid ${styles.border}`,
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            GitHub
          </a>
          <a
            href={data.linkedin}
            style={{
              background: styles.card,
              color: styles.text,
              border: `1px solid ${styles.border}`,
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>

        {/* About */}
        <Section id="about" title="About">
          <Card>
            <p style={{ color: styles.muted, lineHeight: 1.8, margin: 0 }}>
              {data.bio} Feel free to expand this section with more detail about your background,
              interests, and what you're currently working on or looking for.
            </p>
          </Card>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          {data.projects.map((p) => (
            <Card key={p.name}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{p.name}</h3>
                <a
                  href={p.link}
                  style={{
                    color: styles.accent,
                    fontSize: 13,
                    textDecoration: "none",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    marginLeft: 16,
                  }}
                >
                  View →
                </a>
              </div>
              <p style={{ color: styles.muted, fontSize: 14, lineHeight: 1.7, margin: "8px 0 12px" }}>
                {p.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map((t) => <Tag key={t} label={t} />)}
              </div>
            </Card>
          ))}
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          {data.education.map((e) => (
            <Card key={e.school}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{e.school}</h3>
                <span style={{ color: styles.muted, fontSize: 13 }}>{e.years}</span>
              </div>
              <p style={{ color: styles.accent, fontSize: 14, margin: "4px 0 16px", fontWeight: 500 }}>
                {e.degree}
              </p>
              <p style={{ color: styles.muted, fontSize: 13, margin: "0 0 10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
                Relevant Coursework
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {e.courses.map((c) => <Tag key={c} label={c} />)}
              </div>
            </Card>
          ))}
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          {Object.entries(data.skills).map(([category, items]) => (
            <Card key={category}>
              <p style={{ color: styles.muted, fontSize: 13, margin: "0 0 10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
                {category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map((s) => <Tag key={s} label={s} />)}
              </div>
            </Card>
          ))}
        </Section>

      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${styles.border}`,
          textAlign: "center",
          padding: "24px",
          color: styles.muted,
          fontSize: 13,
        }}
      >
        © {new Date().getFullYear()} {data.name} · Built with React
      </footer>
    </div>
  );
}

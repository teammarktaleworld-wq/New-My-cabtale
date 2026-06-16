"use client";

const POSTS = [
  {
    tag: "Road Trip",
    tagColor: "#FFC107",
    title: "Mumbai to Goa by cab: what nobody tells you about the coastal route",
    excerpt: "We rode the NH66 with a CabTale driver who'd done the route 200 times. Here's what he showed us that no travel blog mentions.",
    readTime: "5 min read",
    date: "12 Jun 2026",
  },
  {
    tag: "Driver Story",
    tagColor: "#4ADE80",
    title: "From 12-hour factory shifts to being his own boss — Suresh's Tale",
    excerpt: "Suresh Patil quit his job at 38, bought a second-hand Swift, and joined CabTale. Two years later, he earns three times what he did before.",
    readTime: "7 min read",
    date: "5 Jun 2026",
  },
  {
    tag: "City Guide",
    tagColor: "#A78BFA",
    title: "Navigating Bangalore's traffic: the insider knowledge only drivers have",
    excerpt: "We asked 50 Bangalore drivers for their honest take on routes, timings, and the shortcuts that GPS will never show you.",
    readTime: "4 min read",
    date: "28 May 2026",
  },
];

export default function BlogTeaser() {
  return (
    <section
      id="blog"
      style={{
        background: "#0D0D0D",
        padding: "100px 40px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <span style={{
              display: "inline-block",
              background: "rgba(255,193,7,0.1)",
              border: "1px solid rgba(255,193,7,0.25)",
              borderRadius: "100px",
              padding: "5px 16px",
              color: "#FFC107",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}>
              The Tales Blog
            </span>
            <h2 style={{
              color: "white",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              margin: 0,
              letterSpacing: "-0.03em",
            }}>
              Stories from the road
            </h2>
          </div>
          <button style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "100px",
            padding: "10px 22px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,193,7,0.35)";
              (e.currentTarget as HTMLElement).style.color = "#FFC107";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
            }}
          >
            Read all stories →
          </button>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}>
          {POSTS.map((post, i) => (
            <article
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "32px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${post.tagColor}40`;
                el.style.transform = "translateY(-4px)";
                el.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {/* Mock thumbnail */}
              <div style={{
                width: "100%",
                height: "140px",
                background: `linear-gradient(135deg, ${post.tagColor}15 0%, rgba(255,255,255,0.02) 100%)`,
                borderRadius: "12px",
                border: `1px solid ${post.tagColor}20`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="48" height="32" viewBox="0 0 48 32" fill="none" opacity="0.3">
                  <path d="M6 24 L8 10 Q10 4 14 4 L34 4 Q38 4 40 10 L42 24 Q42 28 38 28 L10 28 Q6 28 6 24Z" fill={post.tagColor} />
                  <circle cx="14" cy="28" r="5" fill={post.tagColor} />
                  <circle cx="34" cy="28" r="5" fill={post.tagColor} />
                </svg>
              </div>

              <div>
                <span style={{
                  background: `${post.tagColor}18`,
                  color: post.tagColor,
                  border: `1px solid ${post.tagColor}35`,
                  borderRadius: "100px",
                  padding: "3px 10px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}>
                  {post.tag}
                </span>
              </div>

              <h3 style={{
                color: "white",
                fontSize: "18px",
                fontWeight: 700,
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.35,
              }}>
                {post.title}
              </h3>

              <p style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "14px",
                lineHeight: 1.65,
                margin: 0,
                flex: 1,
              }}>
                {post.excerpt}
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>{post.date}</span>
                <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
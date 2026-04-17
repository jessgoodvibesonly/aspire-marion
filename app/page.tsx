export default function AspireMarionMiniPage() {
  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "64px 24px",
  } as const;

  const cardStyle = {
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 0 24px rgba(0,0,0,0.12)",
  } as const;

  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <section style={{ background: "#ff3ea5", color: "#fff" }}>
        <div style={sectionStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
            <div
              style={{
                height: 80,
                width: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 24,
                border: "2px solid rgba(255,255,255,0.3)",
                background: "rgba(0,0,0,0.2)",
              }}
            >
              <img src="/aspire-pods-logo.png" alt="Aspire PODS logo" style={{ height: 56, width: 56, objectFit: "contain" }} />
            </div>
            <div
              style={{
                borderRadius: 999,
                border: "2px solid rgba(255,255,255,0.3)",
                background: "rgba(0,0,0,0.2)",
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Aspire PODS • Where people matter
            </div>
          </div>

          <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", color: "#fff3a2" }}>
            Game studio operations reimagined
          </p>
          <h1 style={{ fontSize: 56, lineHeight: 0.95, margin: "16px 0 24px", fontWeight: 900, textTransform: "uppercase" }}>
            Embedded PODS for studios scaling globally
          </h1>
          <p style={{ fontSize: 22, lineHeight: 1.6, maxWidth: 900 }}>
            A quick overview of Aspire’s PODS model, where we fit, and pricing. Aspire builds small embedded teams that
            integrate directly into studio workflows across Live Ops, QA, and production support.
          </p>
        </div>
      </section>

      <section style={{ background: "#1ff5ff", color: "#000" }}>
        <div style={sectionStyle}>
          <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", color: "#4d1369" }}>
            What Aspire is
          </p>
          <h2 style={{ fontSize: 42, margin: "16px 0 32px", fontWeight: 900, textTransform: "uppercase" }}>
            Clear, embedded, and built to work inside real studios
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            <div style={{ ...cardStyle, background: "#7af9ff" }}>
              <h3 style={{ marginTop: 0, fontSize: 24 }}>What is Aspire</h3>
              <p>Aspire builds small embedded teams that integrate directly into studio workflows across Live Ops, QA, and production support.</p>
            </div>
            <div style={{ ...cardStyle, background: "#54efff" }}>
              <h3 style={{ marginTop: 0, fontSize: 24 }}>What is a POD</h3>
              <p>A POD is a dedicated team of 3 to 6 people working inside your tools, workflows, and timelines as part of your studio.</p>
            </div>
            <div style={{ ...cardStyle, background: "#2be6ff" }}>
              <h3 style={{ marginTop: 0, fontSize: 24 }}>Where we fit</h3>
              <p>We support studios across pre production, production, launch, and Live Ops with structures that scale as needs change.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#7c4dff", color: "#fff" }}>
        <div style={sectionStyle}>
          <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", color: "#ffe44d" }}>
            Support areas
          </p>
          <h2 style={{ fontSize: 42, margin: "16px 0 32px", fontWeight: 900, textTransform: "uppercase" }}>
            Designed around the operational layer modern studios need
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              "Live Ops support",
              "QA and testing",
              "Production coordination",
              "Player support and community",
              "Localization",
              "Monetization support",
            ].map((item, i) => (
              <div
                key={item}
                style={{
                  ...cardStyle,
                  padding: "20px",
                  background: i % 3 === 0 ? "#936bff" : i % 3 === 1 ? "#865cff" : "#a07dff",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ff8a3d", color: "#000" }}>
        <div style={sectionStyle}>
          <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", color: "#5a1b00" }}>
            Why Aspire is different
          </p>
          <h2 style={{ fontSize: 42, margin: "16px 0 32px", fontWeight: 900, textTransform: "uppercase" }}>
            Built to feel like part of the team
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {[
              "Embedded into your actual workflow",
              "Built as long term infrastructure",
              "Small teams that move with your game lifecycle",
              "Designed for Live Ops stability",
              "Flexible without hiring overhead",
            ].map((item, i) => (
              <div key={item} style={{ ...cardStyle, background: i % 2 === 0 ? "#ff9f5f" : "#ffb178", fontWeight: 800 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffe44d", color: "#000" }}>
        <div style={sectionStyle}>
          <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", color: "#5f4700" }}>
            Pricing
          </p>
          <h2 style={{ fontSize: 42, margin: "16px 0 24px", fontWeight: 900, textTransform: "uppercase" }}>
            Flexible monthly structures
          </h2>
          <p style={{ fontSize: 20, lineHeight: 1.6, maxWidth: 900 }}>
            Final structure depends on scope and support mix. These ranges are designed to give a quick starting point.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginTop: 32 }}>
            {[
              { tier: "Single POD", price: "$12K – $20K", note: "Ideal for focused operational support with a small embedded team." },
              { tier: "Growth POD", price: "$20K – $45K", note: "For studios needing broader coverage across multiple support functions." },
              { tier: "Multi POD", price: "$45K+", note: "Built for larger studio needs, multi function coverage, or scaled infrastructure." },
            ].map((item, i) => (
              <div key={item.tier} style={{ ...cardStyle, background: i === 0 ? "#fff06f" : i === 1 ? "#fff387" : "#fff6a0" }}>
                <p style={{ margin: 0, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.24em", opacity: 0.7 }}>{item.tier}</p>
                <p style={{ fontSize: 42, fontWeight: 900, margin: "16px 0" }}>{item.price}</p>
                <p style={{ margin: 0 }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#000", color: "#fff" }}>
        <div style={sectionStyle}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
            <div style={{ ...cardStyle, background: "#180816", border: "2px solid #ff3ea5" }}>
              <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", color: "#ffe44d" }}>
                How we start
              </p>
              <ol style={{ paddingLeft: 20, lineHeight: 1.9 }}>
                <li>Understand the current team structure and operational gaps</li>
                <li>Design the right POD around the studio’s goals</li>
                <li>Integrate into workflow, tools, and timelines</li>
                <li>Launch, optimize, and scale as needed</li>
              </ol>
            </div>

            <div style={{ ...cardStyle, background: "#07181a", border: "2px solid #1ff5ff" }}>
              <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", color: "#1ff5ff" }}>
                Next step
              </p>
              <h3 style={{ fontSize: 36, marginTop: 12, marginBottom: 20, fontWeight: 900, textTransform: "uppercase" }}>
                Happy to discuss what this could look like for your team
              </h3>
              <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 700 }}>
                We can walk through current needs, identify where Aspire fits best, and outline a simple POD structure to review together.
              </p>
              <a
                href="mailto:jessica@aspireagencyglobal.com?subject=Aspire%20PODS%20meeting"
                style={{
                  display: "inline-block",
                  marginTop: 24,
                  padding: "14px 24px",
                  borderRadius: 16,
                  background: "#ff3ea5",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                Schedule time with Jess
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

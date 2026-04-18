export default function AspireMarionMiniPage() {
  const podFunctions = [
    "QA support",
    "Live Ops support",
    "Production coordination",
    "Player support and community",
    "Localization support",
    "Monetization support",
  ];

  const differentiators = [
    "Embedded into real studio workflows",
    "Built as long term operational infrastructure",
    "Flexible teams that scale with game needs",
    "North America coverage with strong alignment",
    "Partner model, not traditional outsourcing",
    "Structured for speed, quality, and stability",
  ];

  const pricing = [
    {
      tier: "Single POD",
      price: "$12K – $20K",
      note: "Focused support with a small embedded team built around clear operational needs.",
    },
    {
      tier: "Growth POD",
      price: "$20K – $45K",
      note: "Expanded support across multiple functions for teams needing broader coverage.",
    },
    {
      tier: "Multi POD",
      price: "$45K+",
      note: "Built for larger scale infrastructure, multi function support, and long term operational depth.",
    },
  ];

  const sectionWrap = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "72px 24px",
  } as const;

  const sectionTitle = {
    fontSize: "14px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "0.34em",
    margin: 0,
  };

  const sectionHeading = {
    fontSize: "44px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "-0.03em",
    margin: "14px 0 28px",
    lineHeight: 1.02,
  };

  const darkCard = {
    borderRadius: "28px",
    border: "2px solid rgba(255,255,255,0.18)",
    background: "rgba(0,0,0,0.22)",
    boxShadow: "0 0 40px rgba(255,255,255,0.08)",
    backdropFilter: "blur(8px)",
  } as const;

  const primaryCtaStyle = {
    display: "inline-block",
    borderRadius: "18px",
    border: "2px solid rgba(255,255,255,0.18)",
    background: "#ff3ea5",
    padding: "16px 26px",
    fontSize: "14px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "0.18em",
    color: "#ffffff",
    textDecoration: "none",
    boxShadow: "0 0 35px rgba(255,62,165,0.35)",
  };

  const secondaryCtaStyle = {
    display: "inline-block",
    borderRadius: "18px",
    border: "2px solid rgba(255,255,255,0.18)",
    background: "#1ff5ff",
    padding: "16px 26px",
    fontSize: "14px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "0.18em",
    color: "#000000",
    textDecoration: "none",
    boxShadow: "0 0 35px rgba(31,245,255,0.35)",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#ff3ea5",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.28) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(255,214,87,0.42), transparent 26%), radial-gradient(circle at bottom left, rgba(0,255,255,0.18), transparent 32%)",
          }}
        />

        <div style={{ ...sectionWrap, position: "relative" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "82px",
                width: "82px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "24px",
                border: "2px solid rgba(255,255,255,0.28)",
                background: "rgba(0,0,0,0.22)",
                boxShadow: "0 0 40px rgba(255,255,255,0.14)",
                backdropFilter: "blur(8px)",
              }}
            >
              <img
                src="/aspire-pods-logo.png"
                alt="Aspire PODS logo"
                style={{ height: "58px", width: "58px", objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                borderRadius: "999px",
                border: "2px solid rgba(255,255,255,0.25)",
                background: "rgba(0,0,0,0.2)",
                padding: "10px 18px",
                fontSize: "13px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                boxShadow: "0 0 24px rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              Aspire PODS • Where people matter
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "38px",
              gridTemplateColumns: "minmax(0, 1.2fr) minmax(320px, 0.8fr)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.36em",
                  color: "#fff3a2",
                  margin: 0,
                }}
              >
                Built for Mario • Scopely Spain
              </p>

              <h1
                style={{
                  margin: "16px 0 22px",
                  maxWidth: "930px",
                  fontSize: "66px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  letterSpacing: "-0.035em",
                  textShadow: "0 0 24px rgba(255,255,255,0.12)",
                }}
              >
                Aspire PODS as a North America partner for Scopely
              </h1>

              <p
                style={{
                  margin: "0 0 16px",
                  maxWidth: "780px",
                  fontSize: "22px",
                  lineHeight: 1.62,
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                Aspire builds embedded PODS that plug directly into studio workflows
                across QA, Live Ops, production support, and player-facing operations.
              </p>

              <p
                style={{
                  margin: 0,
                  maxWidth: "790px",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                The goal is simple: position Aspire as Scopely’s operational partner
                across North America with stable, structured support that aligns with
                global quality standards.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginTop: "34px",
                }}
              >
                <a
                  href="https://us06web.zoom.us/j/83714913737?pwd=Z6O3McqxGtbAf25pYav3mnRb50JyMi.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={primaryCtaStyle}
                >
                  Schedule time with Jess
                </a>

                <a href="#pricing" style={secondaryCtaStyle}>
                  View pricing
                </a>
              </div>
            </div>

            <div style={{ ...darkCard, padding: "24px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.28em",
                  color: "#fff3a2",
                  margin: 0,
                }}
              >
                At a glance
              </p>

              <div style={{ marginTop: "20px", display: "grid", gap: "16px" }}>
                {[
                  {
                    title: "Who this is for",
                    text: "Mario, Head of QA for Scopely Spain, exploring a stronger North America operational partner model.",
                    bg: "#ff63b9",
                  },
                  {
                    title: "What Aspire is",
                    text: "Embedded POD infrastructure, not traditional outsourcing and not a staffing-only approach.",
                    bg: "#ff8a3d",
                  },
                  {
                    title: "What we want",
                    text: "Aspire PODS positioned as Scopely’s operational partner across North America.",
                    bg: "#7c4dff",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      borderRadius: "18px",
                      border: "1px solid rgba(255,255,255,0.18)",
                      background: item.bg,
                      padding: "16px",
                      boxShadow: "0 0 25px rgba(255,255,255,0.08)",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "#ffffff",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        margin: "8px 0 0",
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.96)",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS COULD LOOK LIKE */}
      <section style={{ background: "#1ff5ff", color: "#000000" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "920px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#4d1369" }}>
              What this could look like
            </p>
            <h2 style={sectionHeading}>
              A Scopely-aligned North America POD structure
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: "800px",
                fontSize: "20px",
                lineHeight: 1.8,
                color: "rgba(0,0,0,0.82)",
              }}
            >
              Aspire can operate as a flexible extension of Scopely’s existing quality
              and operational infrastructure, supporting North America coverage while
              staying aligned with global leadership and studio standards.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "22px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {[
              {
                title: "North America support layer",
                body: "A POD built to support workflows, schedules, communication, and coverage across North America.",
                bg: "#7af9ff",
              },
              {
                title: "QA + operational alignment",
                body: "Support structure designed to align directly with quality leadership and delivery expectations.",
                bg: "#54efff",
              },
              {
                title: "Scalable by title or need",
                body: "PODS can stay focused, expand by function, or grow as production and Live Ops needs change.",
                bg: "#2be6ff",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "28px",
                  border: "2px solid rgba(0,0,0,0.12)",
                  background: item.bg,
                  padding: "24px",
                  boxShadow: "0 0 24px rgba(0,0,0,0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: "16px",
                    lineHeight: 1.72,
                    color: "rgba(0,0,0,0.84)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POD FUNCTIONS */}
      <section style={{ background: "#7c4dff", color: "#ffffff" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "900px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#ffe44d" }}>Core functions</p>
            <h2 style={sectionHeading}>
              Designed around what modern game teams actually need
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {podFunctions.map((item, index) => (
              <div
                key={item}
                style={{
                  borderRadius: "18px",
                  border: "2px solid rgba(255,255,255,0.2)",
                  padding: "20px",
                  fontSize: "16px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  boxShadow: "0 0 24px rgba(255,255,255,0.08)",
                  background:
                    index % 3 === 0 ? "#936bff" : index % 3 === 1 ? "#865cff" : "#a07dff",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ASPIRE */}
      <section style={{ background: "#ff8a3d", color: "#000000" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "920px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#5a1b00" }}>
              Why Aspire PODS
            </p>
            <h2 style={sectionHeading}>
              Built to feel like part of the team, not outside of it
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            }}
          >
            {differentiators.map((item, index) => (
              <div
                key={item}
                style={{
                  borderRadius: "24px",
                  border: "2px solid rgba(0,0,0,0.12)",
                  padding: "20px",
                  fontSize: "14px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.6,
                  letterSpacing: "0.08em",
                  boxShadow: "0 0 24px rgba(0,0,0,0.08)",
                  background: index % 2 === 0 ? "#ff9f5f" : "#ffb178",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: "#ffe44d", color: "#000000" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "920px", marginBottom: "30px" }}>
            <p style={{ ...sectionTitle, color: "#5f4700" }}>Pricing</p>
            <h2 style={sectionHeading}>Flexible monthly structures</h2>
            <p
              style={{
                margin: 0,
                maxWidth: "780px",
                fontSize: "20px",
                lineHeight: 1.8,
                color: "rgba(0,0,0,0.82)",
              }}
            >
              Final structure depends on scope, title needs, and support mix. These
              ranges give a clear starting point for what an Aspire POD model can look like.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {pricing.map((item, index) => (
              <div
                key={item.tier}
                style={{
                  borderRadius: "30px",
                  border: "2px solid rgba(0,0,0,0.12)",
                  padding: "24px",
                  boxShadow: "0 0 24px rgba(0,0,0,0.08)",
                  background: index === 0 ? "#fff06f" : index === 1 ? "#fff387" : "#fff6a0",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.24em",
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  {item.tier}
                </p>
                <p
                  style={{
                    margin: "16px 0",
                    fontSize: "42px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.price}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    lineHeight: 1.72,
                    color: "rgba(0,0,0,0.82)",
                  }}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section style={{ background: "#000000", color: "#ffffff" }}>
        <div style={sectionWrap}>
          <div
            style={{
              display: "grid",
              gap: "32px",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            <div
              style={{
                borderRadius: "30px",
                border: "2px solid rgba(255,62,165,0.6)",
                background: "#180816",
                padding: "28px",
                boxShadow: "0 0 35px rgba(255,62,165,0.22)",
              }}
            >
              <p style={{ ...sectionTitle, color: "#ffe44d" }}>How we start</p>
              <ol style={{ margin: "20px 0 0", paddingLeft: "22px", lineHeight: 2 }}>
                <li>Understand current structure, priorities, and QA goals</li>
                <li>Design the right POD around studio needs</li>
                <li>Integrate into workflow, tools, and communication lines</li>
                <li>Launch, optimize, and scale over time</li>
              </ol>
            </div>

            <div
              style={{
                borderRadius: "30px",
                border: "2px solid rgba(31,245,255,0.6)",
                background: "#07181a",
                padding: "28px",
                boxShadow: "0 0 35px rgba(31,245,255,0.2)",
              }}
            >
              <p style={{ ...sectionTitle, color: "#1ff5ff" }}>Next step</p>
              <h3
                style={{
                  margin: "12px 0 20px",
                  fontSize: "36px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                Happy to discuss what this could look like for Scopely
              </h3>
              <p
                style={{
                  margin: 0,
                  maxWidth: "680px",
                  fontSize: "18px",
                  lineHeight: 1.72,
                  color: "rgba(255,255,255,0.86)",
                }}
              >
                We can walk through current needs, explore the right North America
                support structure, and outline how Aspire PODS could operate as a long term partner.
              </p>

              <a
                href="https://us06web.zoom.us/j/83714913737?pwd=Z6O3McqxGtbAf25pYav3mnRb50JyMi.1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...primaryCtaStyle,
                  marginTop: "24px",
                }}
              >
                Schedule time with Jess
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

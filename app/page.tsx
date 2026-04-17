export default function AspireMarionMiniPage() {
  const supportAreas = [
    "Live Ops support",
    "QA and testing",
    "Production coordination",
    "Player support and community",
    "Localization",
    "Monetization support",
  ];

  const differentiators = [
    "Embedded into your actual workflow",
    "Built as long term infrastructure",
    "Small teams that move with your game lifecycle",
    "Designed for Live Ops stability",
    "Flexible without hiring overhead",
  ];

  const pricing = [
    {
      tier: "Single POD",
      price: "$12K – $20K",
      note: "Ideal for focused operational support with a small embedded team.",
    },
    {
      tier: "Growth POD",
      price: "$20K – $45K",
      note: "For studios needing broader coverage across multiple support functions.",
    },
    {
      tier: "Multi POD",
      price: "$45K+",
      note: "Built for larger studio needs, multi function coverage, or scaled infrastructure.",
    },
  ];

  const sectionWrap = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "64px 24px",
  } as const;

  const sectionTitle = {
    fontSize: "14px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "0.35em",
    margin: 0,
  };

  const sectionHeading = {
    fontSize: "42px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "-0.02em",
    margin: "16px 0 32px",
    lineHeight: 1.05,
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
              "linear-gradient(to right, rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(255,214,87,0.45), transparent 28%), radial-gradient(circle at bottom left, rgba(0,255,255,0.22), transparent 32%)",
          }}
        />
        <div style={{ ...sectionWrap, position: "relative" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "80px",
                width: "80px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "24px",
                border: "2px solid rgba(255,255,255,0.3)",
                background: "rgba(0,0,0,0.2)",
                boxShadow: "0 0 40px rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
              }}
            >
              <img
                src="/aspire-pods-logo.png"
                alt="Aspire PODS logo"
                style={{ height: "56px", width: "56px", objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                borderRadius: "999px",
                border: "2px solid rgba(255,255,255,0.3)",
                background: "rgba(0,0,0,0.2)",
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                boxShadow: "0 0 30px rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              Aspire PODS • Where people matter
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "40px",
              gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.38em",
                  color: "#fff3a2",
                  margin: 0,
                }}
              >
                Game studio operations reimagined
              </p>

              <h1
                style={{
                  margin: "16px 0 24px",
                  maxWidth: "900px",
                  fontSize: "64px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  textShadow: "0 0 22px rgba(255,255,255,0.15)",
                }}
              >
                Embedded PODS for studios scaling globally
              </h1>

              <p
                style={{
                  margin: "0 0 16px",
                  maxWidth: "760px",
                  fontSize: "22px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                A quick overview of Aspire’s PODS model, where we fit, and pricing.
                Aspire builds small embedded teams that integrate directly into studio
                workflows across Live Ops, QA, and production support.
              </p>

              <p
                style={{
                  margin: 0,
                  maxWidth: "760px",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Happy to walk through how this could fit your current team and projects.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginTop: "32px",
                }}
              >
                <a
                  href="mailto:jessica@aspireagencyglobal.com?subject=Aspire%20PODS%20intro"
                  style={{
                    display: "inline-block",
                    borderRadius: "16px",
                    border: "2px solid rgba(255,255,255,0.4)",
                    background: "#ffe44d",
                    padding: "14px 24px",
                    fontSize: "14px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "#000000",
                    textDecoration: "none",
                    boxShadow: "0 0 35px rgba(255,228,77,0.55)",
                  }}
                >
                  Schedule time with Jess
                </a>

                <a
                  href="#pricing"
                  style={{
                    display: "inline-block",
                    borderRadius: "16px",
                    border: "2px solid rgba(255,255,255,0.35)",
                    background: "#1ff5ff",
                    padding: "14px 24px",
                    fontSize: "14px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "#000000",
                    textDecoration: "none",
                    boxShadow: "0 0 35px rgba(31,245,255,0.45)",
                  }}
                >
                  View pricing
                </a>
              </div>
            </div>

            <div
              style={{
                borderRadius: "32px",
                border: "2px solid rgba(255,255,255,0.3)",
                background: "rgba(0,0,0,0.2)",
                padding: "24px",
                boxShadow: "0 0 45px rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  color: "#fff3a2",
                  margin: 0,
                }}
              >
                At a glance
              </p>

              <div style={{ marginTop: "20px", display: "grid", gap: "16px" }}>
                {[
                  {
                    title: "What we are",
                    text: "Embedded infrastructure for studios, not traditional outsourcing and not recruitment.",
                    bg: "#ff63b9",
                  },
                  {
                    title: "Pod size",
                    text: "Typically 3 to 6 people tailored to current operational needs.",
                    bg: "#ff8a3d",
                  },
                  {
                    title: "Collaboration",
                    text: "Flexible collaboration across North America and Europe.",
                    bg: "#7c4dff",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.25)",
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
                        color: "rgba(255,255,255,0.95)",
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

      <section style={{ background: "#1ff5ff", color: "#000000" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "900px", marginBottom: "32px" }}>
            <p style={{ ...sectionTitle, color: "#4d1369" }}>What Aspire is</p>
            <h2 style={sectionHeading}>
              Clear, embedded, and built to work inside real studios
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {[
              {
                title: "What is Aspire",
                body: "Aspire builds small embedded teams that integrate directly into studio workflows across Live Ops, QA, and production support.",
                bg: "#7af9ff",
              },
              {
                title: "What is a POD",
                body: "A POD is a dedicated team of 3 to 6 people working inside your tools, workflows, and timelines as part of your studio.",
                bg: "#54efff",
              },
              {
                title: "Where we fit",
                body: "We support studios across pre production, production, launch, and Live Ops with structures that scale as needs change.",
                bg: "#2be6ff",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "28px",
                  border: "2px solid rgba(0,0,0,0.15)",
                  background: item.bg,
                  padding: "24px",
                  boxShadow: "0 0 24px rgba(0,0,0,0.12)",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: 1.7, color: "rgba(0,0,0,0.85)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#7c4dff", color: "#ffffff" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "900px", marginBottom: "32px" }}>
            <p style={{ ...sectionTitle, color: "#ffe44d" }}>Support areas</p>
            <h2 style={sectionHeading}>
              Designed around the operational layer modern studios need
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {supportAreas.map((item, index) => (
              <div
                key={item}
                style={{
                  borderRadius: "16px",
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

      <section style={{ background: "#ff8a3d", color: "#000000" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "900px", marginBottom: "32px" }}>
            <p style={{ ...sectionTitle, color: "#5a1b00" }}>Why Aspire is different</p>
            <h2 style={sectionHeading}>Built to feel like part of the team</h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            }}
          >
            {differentiators.map((item, index) => (
              <div
                key={item}
                style={{
                  borderRadius: "24px",
                  border: "2px solid rgba(0,0,0,0.15)",
                  padding: "20px",
                  fontSize: "14px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.6,
                  letterSpacing: "0.08em",
                  boxShadow: "0 0 24px rgba(0,0,0,0.1)",
                  background: index % 2 === 0 ? "#ff9f5f" : "#ffb178",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" style={{ background: "#ffe44d", color: "#000000" }}>
        <div style={sectionWrap}>
          <div style={{ maxWidth: "900px", marginBottom: "32px" }}>
            <p style={{ ...sectionTitle, color: "#5f4700" }}>Pricing</p>
            <h2 style={sectionHeading}>Flexible monthly structures</h2>
            <p
              style={{
                margin: 0,
                maxWidth: "760px",
                fontSize: "20px",
                lineHeight: 1.8,
                color: "rgba(0,0,0,0.8)",
              }}
            >
              Final structure depends on scope and support mix. These ranges are designed
              to give a quick starting point.
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
                  border: "2px solid rgba(0,0,0,0.15)",
                  padding: "24px",
                  boxShadow: "0 0 24px rgba(0,0,0,0.1)",
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
                <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.7, color: "rgba(0,0,0,0.8)" }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                boxShadow: "0 0 35px rgba(255,62,165,0.25)",
              }}
            >
              <p style={{ ...sectionTitle, color: "#ffe44d" }}>How we start</p>
              <ol style={{ margin: "20px 0 0", paddingLeft: "22px", lineHeight: 2 }}>
                <li>Understand the current team structure and operational gaps</li>
                <li>Design the right POD around the studio’s goals</li>
                <li>Integrate into workflow, tools, and timelines</li>
                <li>Launch, optimize, and scale as needed</li>
              </ol>
            </div>

            <div
              style={{
                borderRadius: "30px",
                border: "2px solid rgba(31,245,255,0.6)",
                background: "#07181a",
                padding: "28px",
                boxShadow: "0 0 35px rgba(31,245,255,0.22)",
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
                Happy to discuss what this could look like for your team
              </h3>
              <p
                style={{
                  margin: 0,
                  maxWidth: "680px",
                  fontSize: "18px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                We can walk through current needs, identify where Aspire fits best,
                and outline a simple POD structure to review together.
              </p>
              <a
                href="mailto:jessica@aspireagencyglobal.com?subject=Aspire%20PODS%20meeting"
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                  borderRadius: "16px",
                  border: "2px solid rgba(255,255,255,0.2)",
                  background: "#ff3ea5",
                  padding: "14px 24px",
                  fontSize: "14px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 0 35px rgba(255,62,165,0.35)",
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
ಲ it is
another error. check the image

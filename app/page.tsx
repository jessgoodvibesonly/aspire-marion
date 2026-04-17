export default function AspireMarionPage() {
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
      price: "$12K – $20K/month",
      description: "3–5 embedded team members",
    },
    {
      tier: "Growth POD",
      price: "$20K – $45K/month",
      description: "Scaled team across functions",
    },
    {
      tier: "Multi-POD",
      price: "$45K+/month",
      description: "Full operational infrastructure",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #000000 100%)",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1
            style={{
              fontSize: 42,
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Canadian PODS Supporting Game Development & Live Ops
          </h1>

          <p style={{ marginTop: 20, opacity: 0.8 }}>
            Production • Operations • Development • Support
          </p>

          <p style={{ marginTop: 10, opacity: 0.6 }}>
            Embedded teams. Predictable cost. Built for Live Ops.
          </p>
        </div>

        {/* SUPPORT AREAS */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 26, marginBottom: 20 }}>
            What We Support
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            {supportAreas.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: 20,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 26, marginBottom: 20 }}>
            Why Aspire PODS
          </h2>

          <div style={{ display: "grid", gap: 15 }}>
            {differentiators.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: 15,
                  borderRadius: 10,
                  background: "rgba(167,139,250,0.1)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 26, marginBottom: 20 }}>
            Pricing
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            {pricing.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: 20,
                  borderRadius: 12,
                  background: "rgba(34,211,238,0.08)",
                }}
              >
                <h3 style={{ fontSize: 20 }}>{item.tier}</h3>
                <p style={{ fontWeight: "bold", marginTop: 10 }}>
                  {item.price}
                </p>
                <p style={{ marginTop: 10, opacity: 0.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="mailto:jessica@aspireagencyglobal.com"
            style={{
              display: "inline-block",
              padding: "15px 30px",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6)",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Apply for a POD
          </a>
        </div>
      </div>
    </main>
  );
}

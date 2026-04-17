export default function AspireMarionMiniPage() {
  const supportAreas = [
    'Live Ops support',
    'QA and testing',
    'Production coordination',
    'Player support and community',
    'Localization',
    'Monetization support',
  ]

  const differentiators = [
    'Embedded into your actual workflow',
    'Built as long term infrastructure',
    'Small teams that move with your game lifecycle',
    'Designed for Live Ops stability',
    'Flexible without hiring overhead',
  ]

  const pricing = [
    {
      tier: 'Single POD',
      price: '$12K – $20K',
      note: 'Ideal for focused operational support with a small embedded team.',
    },
    {
      tier: 'Growth POD',
      price: '$20K – $45K',
      note: 'For studios needing broader coverage across multiple support functions.',
    },
    {
      tier: 'Multi POD',
      price: '$45K+',
      note: 'Built for larger studio needs, multi function coverage, or scaled infrastructure.',
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative overflow-hidden bg-[#ff3ea5] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,87,0.45),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,255,255,0.22),transparent_32%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-white/30 bg-black/20 shadow-[0_0_40px_rgba(255,255,255,0.18)] backdrop-blur-sm">
              <img src="/aspire-pods-logo.png" alt="Aspire PODS logo" className="h-14 w-14 object-contain" />
            </div>
            <div className="rounded-full border-2 border-white/30 bg-black/20 px-5 py-2 text-sm font-black uppercase tracking-[0.22em] text-white shadow-[0_0_30px_rgba(255,255,255,0.12)] backdrop-blur-sm">
              Aspire PODS • Where people matter
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.38em] text-[#fff3a2]">
                Game studio operations reimagined
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.15)] md:text-7xl">
                Embedded PODS for studios scaling globally
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/95 md:text-xl">
                A quick overview of Aspire’s PODS model, where we fit, and pricing. Aspire builds small embedded teams that integrate directly into studio workflows across Live Ops, QA, and production support.
              </p>
              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-white/90">
                Happy to walk through how this could fit your current team and projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:jessica@aspireagencyglobal.com?subject=Aspire%20PODS%20intro"
                  className="rounded-2xl border-2 border-white/40 bg-[#ffe44d] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black shadow-[0_0_35px_rgba(255,228,77,0.55)] transition hover:scale-[1.02]"
                >
                  Schedule time with Jess
                </a>
                <a
                  href="#pricing"
                  className="rounded-2xl border-2 border-white/35 bg-[#1ff5ff] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black shadow-[0_0_35px_rgba(31,245,255,0.45)] transition hover:scale-[1.02]"
                >
                  View pricing
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border-2 border-white/30 bg-black/20 p-6 shadow-[0_0_45px_rgba(255,255,255,0.12)] backdrop-blur-sm">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#fff3a2]">At a glance</p>
              <div className="mt-5 space-y-4 text-sm">
                <div className="rounded-2xl border border-white/25 bg-[#ff63b9] p-4 shadow-[0_0_25px_rgba(255,255,255,0.08)]">
                  <p className="font-black uppercase tracking-[0.12em] text-white">What we are</p>
                  <p className="mt-2 leading-6 text-white/95">Embedded infrastructure for studios, not traditional outsourcing and not recruitment.</p>
                </div>
                <div className="rounded-2xl border border-white/25 bg-[#ff8a3d] p-4 shadow-[0_0_25px_rgba(255,255,255,0.08)]">
                  <p className="font-black uppercase tracking-[0.12em] text-white">Pod size</p>
                  <p className="mt-2 leading-6 text-white/95">Typically 3 to 6 people tailored to current operational needs.</p>
                </div>
                <div className="rounded-2xl border border-white/25 bg-[#7c4dff] p-4 shadow-[0_0_25px_rgba(255,255,255,0.08)]">
                  <p className="font-black uppercase tracking-[0.12em] text-white">Collaboration</p>
                  <p className="mt-2 leading-6 text-white/95">Flexible collaboration across North America and Europe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1ff5ff] text-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4d1369]">What Aspire is</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">Clear, embedded, and built to work inside real studios</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'What is Aspire',
                body: 'Aspire builds small embedded teams that integrate directly into studio workflows across Live Ops, QA, and production support.',
                bg: 'bg-[#7af9ff]',
              },
              {
                title: 'What is a POD',
                body: 'A POD is a dedicated team of 3 to 6 people working inside your tools, workflows, and timelines as part of your studio.',
                bg: 'bg-[#54efff]',
              },
              {
                title: 'Where we fit',
                body: 'We support studios across pre production, production, launch, and Live Ops with structures that scale as needs change.',
                bg: 'bg-[#2be6ff]',
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-[28px] border-2 border-black/15 ${item.bg} p-6 shadow-[0_0_24px_rgba(0,0,0,0.12)]`}>
                <h3 className="text-xl font-black uppercase tracking-[0.08em]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-black/85">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7c4dff] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ffe44d]">Support areas</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">Designed around the operational layer modern studios need</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportAreas.map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl border-2 border-white/20 p-5 text-base font-black uppercase tracking-[0.08em] shadow-[0_0_24px_rgba(255,255,255,0.08)] ${
                  index % 3 === 0 ? 'bg-[#936bff]' : index % 3 === 1 ? 'bg-[#865cff]' : 'bg-[#a07dff]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ff8a3d] text-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#5a1b00]">Why Aspire is different</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">Built to feel like part of the team</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {differentiators.map((item, index) => (
              <div
                key={item}
                className={`rounded-[24px] border-2 border-black/15 p-5 text-sm font-black uppercase leading-6 tracking-[0.08em] shadow-[0_0_24px_rgba(0,0,0,0.1)] ${
                  index % 2 === 0 ? 'bg-[#ff9f5f]' : 'bg-[#ffb178]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#ffe44d] text-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#5f4700]">Pricing</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">Flexible monthly structures</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-black/80">
              Final structure depends on scope and support mix. These ranges are designed to give a quick starting point.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((item, index) => (
              <div
                key={item.tier}
                className={`rounded-[30px] border-2 border-black/15 p-6 shadow-[0_0_24px_rgba(0,0,0,0.1)] ${
                  index === 0 ? 'bg-[#fff06f]' : index === 1 ? 'bg-[#fff387]' : 'bg-[#fff6a0]'
                }`}
              >
                <p className="text-sm font-black uppercase tracking-[0.24em] text-black/70">{item.tier}</p>
                <p className="mt-4 text-4xl font-black uppercase tracking-tight">{item.price}</p>
                <p className="mt-4 text-base leading-7 text-black/80">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border-2 border-[#ff3ea5]/60 bg-[#180816] p-7 shadow-[0_0_35px_rgba(255,62,165,0.25)]">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ffe44d]">How we start</p>
              <ol className="mt-5 space-y-4 text-white">
                <li><span className="font-black text-[#1ff5ff]">1.</span> Understand the current team structure and operational gaps</li>
                <li><span className="font-black text-[#1ff5ff]">2.</span> Design the right POD around the studio’s goals</li>
                <li><span className="font-black text-[#1ff5ff]">3.</span> Integrate into workflow, tools, and timelines</li>
                <li><span className="font-black text-[#1ff5ff]">4.</span> Launch, optimize, and scale as needed</li>
              </ol>
            </div>

            <div className="rounded-[30px] border-2 border-[#1ff5ff]/60 bg-[#07181a] p-7 shadow-[0_0_35px_rgba(31,245,255,0.22)]">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#1ff5ff]">Next step</p>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-tight md:text-4xl">
                Happy to discuss what this could look like for your team
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/85">
                We can walk through current needs, identify where Aspire fits best, and outline a simple POD structure to review together.
              </p>
              <a
                href="mailto:jessica@aspireagencyglobal.com?subject=Aspire%20PODS%20meeting"
                className="mt-6 inline-flex rounded-2xl border-2 border-white/20 bg-[#ff3ea5] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(255,62,165,0.35)] transition hover:scale-[1.02]"
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

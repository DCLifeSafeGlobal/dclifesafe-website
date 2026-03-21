import React, { useMemo, useState } from "react";

const navItems = [
  { key: "home", label: "Home" },
  { key: "surfviving", label: "Surfviving™" },
  { key: "workshop", label: "Workshop" },
  { key: "worksheet", label: "Worksheet" },
  { key: "contact", label: "Contact" },
];

function Shell({ page, setPage, children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setPage("home")} className="text-left">
            <div className="text-lg font-semibold tracking-wide text-cyan-300">
              DC LifeSafe Global™
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Expedition Medicine • Safety • Training
            </div>
          </button>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`transition hover:text-white ${
                  page === item.key ? "text-white" : "text-slate-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              DC LifeSafe Global™
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Practical education, field-ready skills, and professional
              credibility for real-world training.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Navigation
            </div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setPage(item.key)}
                  className="text-left hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Contact
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              info@dclifesafe.com
            </p>
            <p className="text-sm leading-7 text-slate-400">
              Medicine beyond the trail
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_30%),linear-gradient(180deg,#03111e_0%,#071d2e_42%,#03111e_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
              U.S.-Based Credibility • Latin American Reach
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
              Safety, medicine, and training for people who go further.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              DC LifeSafe Global is a modern platform for emergency education,
              travel preparedness, field-minded skill training, and practical
              professional outreach.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setPage("contact")}
                className="rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950"
              >
                Request Information
              </button>

              <button
                onClick={() => setPage("surfviving")}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white"
              >
                Explore Surfviving™
              </button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Core Focus", "Education that saves lives"],
              ["Approach", "Practical, credible, global"],
              [
                "Ideal Audience",
                "Travelers, outdoor groups, community partners, schools, organizations, and clients seeking trusted safety training.",
              ],
            ].map(([title, text], idx) => (
              <div
                key={title}
                className={`rounded-[2rem] border border-white/10 bg-white/5 p-6 ${
                  idx === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  {title}
                </div>
                <div className="mt-3 text-2xl font-semibold leading-snug">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            About
          </div>
          <h2 className="mt-3 text-4xl font-semibold">
            Built for trust, readiness, and real-world impact.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            This platform connects education, field experience, practical safety
            training, and international perspective into one professional brand.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Brand Pillars
          </div>
          <div className="mt-5 grid gap-3">
            {[
              "Medicine beyond the trail",
              "Preparedness with real-world application",
              "Education with international perspective",
              "Trust, service, and community impact",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Featured Program
          </div>

          <div className="mt-4 grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-4xl font-semibold">
                Surfviving™ — Riding the Emotional Wave
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                A field-ready emotional regulation model inspired by
                evidence-based approaches such as DBT, translated into clear,
                visual, practical skills for real-life use.
              </p>
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setPage("surfviving")}
                  className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
                >
                  Open Surfviving™ Page
                </button>
                <button
                  onClick={() => setPage("worksheet")}
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white"
                >
                  Worksheet Page
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-cyan-950/40">
              <img
                src="/surfviving-hero.png"
                alt="Surfviving hero"
                className="w-full rounded-[1.25rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SurfvivingPage({ setPage }) {
  const stages = [
    [
      "1. Rise",
      "Building Stress",
      "Awareness begins. Emotions start increasing — anxiety, pressure, frustration.",
    ],
    [
      "2. Peak",
      "Highest Intensity",
      "Emotional intensity reaches its highest point. Reactions may feel overwhelming.",
    ],
    [
      "3. Tube",
      "Critical Moment",
      "This is the decision point. You may react impulsively, or use your skills.",
    ],
    [
      "4. Ride Out",
      "Regaining Control",
      "The wave moves forward. Clarity returns, and control improves.",
    ],
  ];

  return (
    <main>
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_30%),linear-gradient(180deg,#06172a_0%,#0b2236_45%,#06172a_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-24">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Field Psychology Skills™
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Surfviving™
          </h1>

          <p className="mt-3 text-2xl text-cyan-200 md:text-3xl">
            Riding the Emotional Wave
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            You don’t control the wave. You train to ride it.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
            Surfviving™ is inspired by evidence-based approaches such as DBT
            (Dialectical Behavior Therapy), but translated into real-world,
            field-ready performance skills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setPage("worksheet")}
              className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
            >
              Open Worksheet Page
            </button>

            <button
              onClick={() => setPage("workshop")}
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white"
            >
              Join the Workshop
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
          <img
            src="/control-the-wave.jpg"
            alt="Control the wave visual"
            className="w-full rounded-[1.25rem] object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Understanding the Wave
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stages.map(([title, subtitle, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-2xl font-semibold">{title}</h3>
              <div className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-400">
                {subtitle}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Signature Statement
            </div>
            <blockquote className="mt-6 text-3xl font-semibold leading-tight text-white">
              “You can fall inside the wave… or learn to ride through it.”
            </blockquote>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Core Skills
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                ["STOP", "Pause the reaction."],
                ["Breathing", "Regulate your body."],
                ["Observe", "Name what you feel."],
                ["Proceed", "Choose intentional action."],
              ].map(([name, text]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
                >
                  <div className="text-xl font-semibold text-white">{name}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkshopPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Workshop
      </div>
      <h1 className="text-5xl font-bold tracking-tight">
        Surfviving™ Workshop
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
        A guided, skill-based training session designed to teach emotional
        regulation in a real-world, memorable, visual format.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          ["Format", "Skill-based education, not therapy"],
          [
            "Duration",
            "30 min express • 60 min standard • 90 min full workshop",
          ],
          [
            "Audience",
            "Healthcare teams, community groups, travelers, students, and organizations",
          ],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              {title}
            </div>
            <p className="mt-3 text-lg leading-8 text-white">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8">
        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
          Current CTA
        </div>
        <p className="mt-4 text-lg leading-8 text-cyan-50">
          This section can later connect to a Google Form, booking page, or
          waitlist.
        </p>
      </div>
    </main>
  );
}

function WorksheetPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Worksheet
      </div>

      <h1 className="text-5xl font-bold tracking-tight">
        Ride the Wave — Free Worksheet
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
        A printable worksheet designed to identify where you are in the wave,
        what you are feeling, which skill you will use, and what action comes
        next.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Includes
          </div>

          <ul className="mt-5 space-y-3 text-base text-slate-300">
            <li>• Where are you in the wave?</li>
            <li>• What are you feeling?</li>
            <li>• What skill will you use?</li>
            <li>• What will you do next?</li>
          </ul>

          <div className="mt-8">
            <a
              href="/surfviving-worksheet.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950"
            >
              Download Worksheet PDF
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-6">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white">
            <img
              src="/surfviving-worksheet-preview.jpg"
              alt="Worksheet preview"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Contact
      </div>
      <h1 className="text-5xl font-bold tracking-tight">
        Ready to shape the full site?
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Email
          </div>
          <p className="mt-4 text-xl font-semibold">info@dclifesafe.com</p>
          <p className="mt-3 text-base leading-8 text-slate-400">
            This section can later hold a full contact form, partner inquiry
            form, or workshop request form.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Tagline
          </div>
          <p className="mt-4 text-xl font-semibold">
            Medicine beyond the trail
          </p>
          <p className="mt-3 text-base leading-8 text-slate-400">
            Built for trust, readiness, and practical education.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  const pageView = useMemo(() => {
    switch (page) {
      case "surfviving":
        return <SurfvivingPage setPage={setPage} />;
      case "workshop":
        return <WorkshopPage />;
      case "worksheet":
        return <WorksheetPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  }, [page]);

  return (
    <Shell page={page} setPage={setPage}>
      {pageView}
    </Shell>
  );
}

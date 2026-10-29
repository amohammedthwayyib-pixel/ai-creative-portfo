import Link from "next/link";
import { certs, education, experience, interests, languages, services, site, skills, stats, tools, workflow } from "@/data/site";

const wrap = "mx-auto max-w-6xl px-5 py-20 scroll-mt-16";
const h2 = "mt-1 bg-gradient-to-r from-white via-bone to-white/60 bg-clip-text text-center font-display text-4xl font-semibold text-transparent sm:text-5xl";
const eyebrow = "text-center text-sm text-amber";
const card = "glass lift p-6";
const chip = "rounded-full border border-bone/15 px-3 py-1 text-sm text-bone/80";

export function About() {
  return (
    <section id="about" className={wrap}>
      <p className={eyebrow}>Digital identity</p><h2 className={h2}>About me</h2>
      <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-lg leading-relaxed text-bone/75">
          <p>I&apos;m a digital marketing executive based in Kerala, India. I like the work where a clear idea, a tight edit and the right audience come together, and I check the numbers to see what worked.</p>
          <p>I recently finished a digital marketing internship at QuadCubes, where I ran Meta Ads for a client account. I&apos;m finishing my B.Com in Computer Applications at Alagappa University and looking for a role where I can keep running campaigns and making video.</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-medium">Core interests</h3>
          <ul className="mt-3 flex flex-wrap gap-2">{interests.map((i) => <li key={i} className={chip}>{i}</li>)}</ul>
          <h3 className="mt-6 font-display text-xl font-medium">Languages</h3>
          <p className="mt-2 text-bone/70">{languages.join(", ")}</p>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className={wrap}>
      <p className={eyebrow}>Professional trajectory</p><h2 className={h2}>Experience</h2>
      <div className="mt-8 space-y-5">
        {experience.map((e) => (
          <article key={e.role} className={`${card} sm:p-8`}>
            <p className="font-mono text-sm text-amber">{e.period}</p>
            <h3 className="mt-2 font-display text-2xl font-medium">{e.role}</h3>
            <p className="text-bone/60">@ {e.org}, {e.place}</p>
            <p className="mt-4 max-w-2xl text-bone/75">{e.desc}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div><h4 className="text-sm text-bone/50">Tools</h4><ul className="mt-2 flex flex-wrap gap-2">{e.stack.map((s) => <li key={s} className={chip}>{s}</li>)}</ul></div>
              <div><h4 className="text-sm text-bone/50">Core responsibilities</h4><ul className="mt-2 list-disc space-y-1 pl-5 text-bone/75">{e.duties.map((d) => <li key={d}>{d}</li>)}</ul></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className={wrap}>
      <p className={eyebrow}>Academic path</p><h2 className={h2}>Education</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.title} className={card}><p className="font-mono text-sm text-amber">{e.period}</p><h3 className="mt-2 font-display text-xl font-medium">{e.title}</h3><p className="mt-1 text-bone/70">{e.sub}</p></div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className={wrap}>
      <p className={eyebrow}>Systems overview</p><h2 className={h2}>Skill matrix</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.title} className={card}><h3 className="font-display text-xl font-medium">{s.title}</h3><ul className="mt-3 space-y-1.5 text-bone/70">{s.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
        ))}
      </div>
      <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tools">{tools.map((t) => <li key={t} className={chip}>{t}</li>)}</ul>
    </section>
  );
}

export function Workflow() {
  return (
    <section id="process" className={wrap}>
      <p className={eyebrow}>How I work</p><h2 className={h2}>My creative workflow</h2>
      <ol className="mt-8 grid gap-4 md:grid-cols-5">
        {workflow.map((w, i) => (
          <li key={w.t} className={`${card} p-5`}><span className="font-mono text-sm text-amber">{i + 1}</span><h3 className="mt-2 font-display text-lg font-medium">{w.t}</h3><p className="mt-1 text-sm text-bone/65">{w.d}</p></li>
        ))}
      </ol>
    </section>
  );
}

export function Results() {
  return (
    <section id="results" className={wrap}>
      <p className={eyebrow}>Command center</p><h2 className={h2}>Results and milestones</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-bone/70">Meta Ads campaign for Vismaya Amusement Park, run during my QuadCubes internship.</p>
      <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((x) => (<div key={x.l} className={card}><dd className="font-display text-4xl font-semibold">{x.v}</dd><dt className="mt-1 text-sm text-bone/60">{x.l}</dt></div>))}
      </dl>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className={wrap}>
      <p className={eyebrow}>Digital archive</p><h2 className={h2}>Certifications and learning</h2>
      <p className="mt-3 text-center text-bone/70">From my Digital Marketing Training at CDA Academy.</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{certs.map((c) => <li key={c} className={`${card} p-5 font-display text-lg`}>{c}</li>)}</ul>
    </section>
  );
}

export function Contact() {
  return (
    <footer id="contact" className={wrap}>
      <p className={eyebrow}>Get in touch</p><h2 className={`${h2} mx-auto max-w-2xl`}>Let&apos;s collaborate</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-bone/70">Open to digital marketing roles and freelance briefs in paid social, performance marketing and short-form video.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href={`mailto:${site.email}`} className="rounded-full bg-violet px-6 py-3 font-medium text-ink">{site.email}</a>
        <a href={site.resume} download className="rounded-full border border-bone/25 px-6 py-3">Download resume</a>
      </div>
      <ul className="mt-6 flex flex-wrap justify-center gap-5 text-bone/70">{site.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-bone hover:underline">{s.label}</a></li>)}</ul>
    </footer>
  );
}

export function CTA() {
  return (
    <section className={`${wrap} text-center`}>
      <h2 className={h2}>Have a brief or an opening?</h2>
      <Link href="/contact" className="mt-8 inline-block rounded-full bg-violet px-6 py-3 font-medium text-ink">Get in touch</Link>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className={wrap}>
      <h2 className={h2}>What I can do for you</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-bone/70">Skills from my internship, training and personal projects.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((x) => (
          <div key={x.title} className={`${card} flex flex-col items-center p-8 text-center`}>
            <span aria-hidden className="mb-5 rounded-2xl border border-bone/10 bg-bone/5 p-4 text-4xl">{x.icon}</span>
            <h3 className="font-display text-xl font-medium">{x.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-bone/65">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-bone/10 px-5 py-8 text-center text-sm text-bone/50">
      <p>© {new Date().getFullYear()} {site.name}. Digital marketing executive, Kerala, India.</p>
      <ul className="mt-3 flex justify-center gap-5">{site.socials.map((x) => <li key={x.label}><a href={x.href} target="_blank" rel="noopener noreferrer" className="hover:text-bone">{x.label}</a></li>)}<li><a href={`mailto:${site.email}`} className="hover:text-bone">Email</a></li></ul>
    </footer>
  );
}

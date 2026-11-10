import { ArrowUpRight } from 'lucide-react'

import { education, experience, site } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(44px,7.5vw,112px)]" lines={['Banker, analyst,', 'DevOps by training']} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src={site.portrait} alt={site.name} className="aspect-[3/4] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              I am a probationary officer at South Indian Bank, with an MBA in Finance and Marketing from Chandigarh University and a B.Tech in Computer Science before it.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              The route here was not a straight line. I spent a year and a half as an associate DevOps consultant at Oodles Technologies, provisioning cloud infrastructure and keeping client environments running, then moved into banking through Bajaj Finserv's CPBFI programme. The technology background turned out to be the useful part: most of branch banking runs on systems, and most of compliance runs on records.
            </p>
            <p>
              Four branches in three states — Hyderabad, Mehsana, Prayagraj and now Howrah — teach you quickly that the same product looks different to a customer in each place. I like the part of the job where the numbers and the person meet. Outside work I am usually reading about markets, learning a new tool, or explaining one to somebody else.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Experience</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.17} className="mt-16">
            <h2 className="text-[14px] text-muted">Education</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {education.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 grid grid-cols-3 gap-6">
            {[
              ['4', 'branches, three states'],
              ['6', 'certifications'],
              ['1', 'published paper'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{value}</p>
                <p className="mt-2 text-[14px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}

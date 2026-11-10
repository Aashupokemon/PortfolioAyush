import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { certifications, projects, services, site } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'
import { WorkCard } from '../components/WorkCard'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <HeroField />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
          <h1 className="font-display text-[clamp(64px,13.5vw,210px)]">
            {site.name.split(' ').map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease }}>
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }} className="mt-10 border-t border-fg/15 pt-6">
            <p className="max-w-md text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]">{site.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line py-5" aria-hidden>
        <ul className="font-display flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-[28px] text-fg/70 sm:text-[36px]">
          {[...site.marquee, ...site.marquee].map((item, i) => (
            <li key={i} className="flex items-center gap-10">
              {item}
              <span className="round size-2 rounded-full bg-accent" />
            </li>
          ))}
        </ul>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-24 sm:px-8 sm:pt-32">
        <div className="flex items-end justify-between">
          <Lines as="h2" className="font-display text-[44px] sm:text-[64px]" lines={['Selected work']} />
          <Reveal className="hidden text-[14px] text-muted sm:block">{projects.length} case studies, 2021 to now</Reveal>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <Parallax src={site.portrait} alt={site.name} className="aspect-[3/4] max-w-[460px] rounded-image" strength={6} />
          </Reveal>
          <div className="flex flex-col justify-center">
            <Lines
              as="h2"
              className="font-display text-balance text-[40px] sm:text-[56px] lg:text-[64px]"
              lines={['Numbers, people', 'and the systems', 'between them']}
            />
            <Reveal delay={0.2} className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-muted">
              <p>
                Banking is a technical job that looks like a people job: a customer, a form, and a system that has to agree with both. I have spent the last few years on the branch side of that and the years before them on the infrastructure side, which makes the numbers easier to trust and the systems easier to explain.
              </p>
              <p className="mt-4">I am a probationary officer at South Indian Bank, posted in Howrah, and I am from {site.location}.</p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8">
              <Link to="/about" className="link-draw inline-flex items-center gap-1.5 text-[15px] font-medium">
                More about me
                <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <Lines as="h2" className="font-display text-[40px] sm:text-[56px]" lines={['What I do']} />
            <Reveal delay={0.1} className="mt-4 max-w-xs text-[15px] text-muted">
              Four things I keep coming back to. Most days involve two of them.
            </Reveal>
          </div>
          <Services />
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <Certifications />
      </section>
    </>
  )
}

// Slow colour fields behind the hero: the accent, a coral and a warm peach,
// blurred and drifting, fading into the paper before the intro line. The
// grain keeps it from reading as a flat gradient.
function HeroField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_96%)]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, ease }} className="absolute inset-0">
        <div className="round absolute -top-[25%] right-[-12%] h-[95%] w-[70%] animate-drift-a rounded-full bg-[radial-gradient(closest-side,rgb(47_59_255/0.72),transparent)] blur-3xl" />
        <div className="round absolute -top-[10%] left-[-12%] h-[80%] w-[62%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(255_106_61/0.62),transparent)] blur-3xl" />
        <div className="round absolute top-[22%] left-[32%] h-[70%] w-[56%] animate-drift-c rounded-full bg-[radial-gradient(closest-side,rgb(255_196_120/0.7),transparent)] blur-3xl" />
        <div className="round absolute top-[45%] right-[12%] h-[50%] w-[40%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(196_170_255/0.55),transparent)] blur-3xl" />
      </motion.div>
      <div className="grain absolute inset-0" />
    </div>
  )
}

function Services() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="border-t border-line">
      {services.map((s, i) => {
        const isOpen = open === i
        return (
          <li key={s.title} className="border-b border-line">
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)} className="group flex w-full items-center gap-6 py-7 text-left">
              <span className="w-10 shrink-0 text-[14px] tabular-nums text-faint">0{i + 1}</span>
              <span className={cx('font-display flex-1 text-[32px] transition-colors sm:text-[44px]', isOpen ? 'text-fg' : 'text-fg/60 group-hover:text-fg')}>{s.title}</span>
              <span className={cx('grid size-10 shrink-0 place-items-center rounded-[12px] border border-line-strong transition-colors duration-300', isOpen && 'border-fg bg-fg text-bg')}>
                <Plus className={cx('size-4 transition-transform duration-500', isOpen && 'rotate-45')} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }} className="overflow-hidden">
                  <p className="max-w-xl pb-8 pl-16 text-pretty text-[16px] leading-relaxed text-muted">{s.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

function Certifications() {
  return (
    <div className="rounded-[32px] bg-fg px-6 py-14 text-bg sm:px-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[14px] text-bg/50">Certifications</p>
        <ul className="mt-6 divide-y divide-bg/15 border-y border-bg/15">
          {certifications.map((c) => (
            <li key={c.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <span className="font-display text-[24px] leading-tight sm:text-[30px]">{c.title}</span>
              <span className="shrink-0 text-[14px] text-bg/60">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import headshotUrl from '../assets/Rishi.jpg'
import resumePdfUrl from '../assets/Rishi_Resume.pdf'
import ThemeToggle from '../components/ThemeToggle'
import Chip from '../components/Chip'
import { profile } from '../data_profile'



function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header-glass">
      <div className="container-xl py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-semibold text-lg">
          <img src={headshotUrl} alt="Headshot" className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-white/10" />
          RV
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a className="link nav-pill" href="#experience">Experience</a>
          <a className="link nav-pill" href="#projects">Projects</a>
          <a className="link nav-pill" href="#skills">Skills</a>
          <a className="link nav-pill" href="#education">Education</a>
          <a className="link nav-pill" href="#contact">Contact</a>
          <a className="link nav-pill" href="https://github.com/rishivankayala?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
          <a className="link nav-pill" href={resumePdfUrl} download>Resume</a>
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="btn" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">☰</button>
        </div>

        {open && (
          <div className="absolute left-0 right-0 top-full md:hidden bg-white dark:bg-[#0b0f19] border-b border-slate-100 dark:border-white/10">
            <div className="container-xl py-3 flex flex-col gap-3 text-sm">
              <a className="link" href="#experience" onClick={() => setOpen(false)}>Experience</a>
              <a className="link" href="#projects" onClick={() => setOpen(false)}>Projects</a>
              <a className="link" href="#skills" onClick={() => setOpen(false)}>Skills</a>
              <a className="link" href="#education" onClick={() => setOpen(false)}>Education</a>
              <a className="link" href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <a className="link" href="https://github.com/rishivankayala?tab=repositories" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>GitHub</a>
              <a className="link" href={resumePdfUrl} download onClick={() => setOpen(false)}>Resume</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}




function Hero() {
  const roles = ['Java Full Stack Developer', 'Spring Boot • React • Microservices', 'Cloud: AWS & GCP'];
  const [typed, setTyped] = useState('');
  const [ri, setRi] = useState(0);
  const [ci, setCi] = useState(0);
  const [back, setBack] = useState(false);

  useEffect(() => {
    const current = roles[ri % roles.length];
    let t: any;
    if (!back && ci <= current.length) {
      t = setTimeout(() => { setTyped(current.slice(0, ci)); setCi(ci + 1); }, 40);
    } else if (!back && ci > current.length) {
      t = setTimeout(() => setBack(true), 1200);
    } else if (back && ci > 0) {
      t = setTimeout(() => { setTyped(current.slice(0, ci)); setCi(ci - 1); }, 25);
    } else {
      setBack(false); setRi((v) => v + 1);
    }
    return () => clearTimeout(t);
  }, [ci, ri, back]);

  return (
    <section id="home" className="container-xl py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <div className="badge mb-4 w-max">Open to opportunities</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="sr-only">{profile.name}</span>
            {Array.from(profile.name).map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="inline-block"
              >{ch}</motion.span>
            ))}
          </h1>
          <div className="mt-3 h-7 text-brand font-medium tracking-wide">
            <span>{typed}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="opacity-80 mt-4 max-w-xl">{profile.summary}</p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn" href={resumePdfUrl} download>Download Resume</a>
          </div>
        </div>
        <motion.img
          src={headshotUrl}
          alt="Headshot"
          className="rounded-2xl w-full md:w-4/5 ml-auto border border-slate-200 dark:border-white/10"
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .2 }}
        />
      </motion.div>
    </section>
  )
}


function Projects() {
  return (
    <motion.section id="projects" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="container-xl py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {profile.projects.map((p) => (
          <motion.article
            key={p.name}
            className="card group perspective"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-start justify-between gap-4 transform-gpu transition group-hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <span className="text-sm opacity-70">{p.date}</span>
            </div>
            <div className="mt-2 flex flex-wrap">
              {p.stack.map(s => <Chip key={s}>{s}</Chip>)}
            </div>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              {p.description.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            {p.link && (
              <a className="link mt-4 inline-block" href={p.link} target="_blank" rel="noreferrer">
                Visit project ↗
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}


function Experience() {
  return (
    <motion.section id="experience" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="container-xl py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10"></div>
        <div className="space-y-8">
          {profile.experience.map((e) => (
            <div key={e.company} className="relative">
              <div className="absolute -left-1.5 md:-left-0.5 top-2 w-3 h-3 rounded-full bg-brand"></div>
              <div className="card">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{e.role} · {e.company}</h3>
                  <div className="text-sm opacity-70">{e.period}</div>
                </div>
                <ul className="mt-3 list-disc pl-6 space-y-2">
                  {e.bullets.map((b: any, i: number) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}


function Skills() {
  return (
    <motion.section id="skills" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="container-xl py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
      <div className="card group perspective">
        <div className="flex flex-wrap">{profile.skills.map(s => <Chip key={s}>{s}</Chip>)}</div>
      </div>
    </motion.section>
  )
}

function Education() {
  return (
    <motion.section id="education" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="container-xl py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {profile.education.map((ed) => (
          <div key={ed.school} className="card group perspective">
            <div className="font-semibold">{ed.degree}</div>
            <div className="opacity-80">{ed.school}</div>
            <div className="text-sm opacity-70">{ed.year}</div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

function Contact() {
  return (
    <motion.section id="contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="container-xl py-16">
      <div className="card text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Let’s build something great</h2>
        <p className="mt-3 opacity-80">Reach me via email or LinkedIn.</p>
        <div className="mt-4 flex justify-center gap-3">
          <a className="badge" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="badge" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <footer className="text-center text-sm opacity-70 mt-6">© {new Date().getFullYear()} {profile.name}</footer>
    </motion.section>
  )
}


export default function App() {
  const [active, setActive] = useState<string>('home');
  useEffect(() => {
    const ids = ['projects','experience','skills','education','contact'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive((e.target as HTMLElement).id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="font-display text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-[#0b0f19] animated-bg">
      <ScrollProgress />
      <Header active={active} />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <BackToTop />
    </div>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[9999]">
      <div className="h-full bg-brand" style={{ width: p + '%' }} />
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={'fixed bottom-5 right-5 btn ' + (show ? 'opacity-100' : 'opacity-0 pointer-events-none')}
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  );
}

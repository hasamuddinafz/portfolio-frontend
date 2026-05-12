'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timeline = [
    {
        period: 'June 2024 – July 2024',
        title: 'Fullstack Web Developer Intern',
        company: 'Karabük Technokent',
        location: 'Karabük, Turkey',
        description: 'Modernized the company\'s frontend, developed dynamic forms, and optimized the email submission system.',
        type: 'work',
    },
    {
        period: 'June 2023 – July 2023',
        title: 'Fullstack Web Developer Intern',
        company: 'Real Solutions',
        location: 'Düzce, Turkey',
        description: 'Built an order management system using .NET Core and Angular with role-based access control.',
        type: 'work',
    },
    {
        period: '2021 – Present',
        title: 'Computer Engineering',
        company: 'Karabük University',
        location: 'Karabük, Turkey',
        description: 'Focused on software architectures, web technologies, and system design.',
        type: 'education',
    },
]

const WorkIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
)

const EduIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
)

export default function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="relative py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                {/* Etiket */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <span className="w-8 h-px bg-accent" />
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">
                        My Professional Journey
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-bold text-text-primary mb-20"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
                >
                    A timeline of key experiences
                    <br />
                    <span style={{ WebkitTextStroke: '1.5px var(--color-text-primary)', color: 'transparent' }}>
                        and educational background.
                    </span>
                </motion.h2>

                {/* Timeline */}
                <div className="relative">
                    {/* Dikey çizgi */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border origin-top hidden md:block"
                    />

                    <div className="flex flex-col gap-12">
                        {timeline.map(function (item, i) {
                            const isLeft = i % 2 === 0
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="relative flex flex-col md:flex-row items-center gap-8"
                                >
                                    {/* Sol kart */}
                                    <div className={`w-full md:w-[calc(50%-40px)] ${isLeft ? 'md:block' : 'md:invisible'}`}>
                                        {isLeft && (
                                            <div
                                                className="p-6 rounded-xl border border-border bg-bg-secondary hover:border-accent transition-all duration-300"
                                            >
                                                <span className="text-xs font-mono text-accent mb-3 block">{item.period}</span>
                                                <h3 className="font-semibold text-text-primary text-lg mb-1">{item.title}</h3>
                                                <p className="text-sm text-accent mb-3">{item.company} — {item.location}</p>
                                                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Orta ikon */}
                                    <div
                                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 hidden md:flex"
                                        style={{ backgroundColor: 'var(--color-accent)', color: '#f0ece4' }}
                                    >
                                        {item.type === 'work' ? <WorkIcon /> : <EduIcon />}
                                    </div>

                                    {/* Sağ kart */}
                                    <div className={`w-full md:w-[calc(50%-40px)] ${!isLeft ? 'md:block' : 'md:invisible'}`}>
                                        {!isLeft && (
                                            <div
                                                className="p-6 rounded-xl border border-border bg-bg-secondary hover:border-accent transition-all duration-300"
                                            >
                                                <span className="text-xs font-mono text-accent mb-3 block">{item.period}</span>
                                                <h3 className="font-semibold text-text-primary text-lg mb-1">{item.title}</h3>
                                                <p className="text-sm text-accent mb-3">{item.company} — {item.location}</p>
                                                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobil kart */}
                                    <div className="w-full md:hidden">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div
                                                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: 'var(--color-accent)', color: '#f0ece4' }}
                                            >
                                                {item.type === 'work' ? <WorkIcon /> : <EduIcon />}
                                            </div>
                                            <span className="text-xs font-mono text-accent">{item.period}</span>
                                        </div>
                                        <div className="p-6 rounded-xl border border-border bg-bg-secondary">
                                            <h3 className="font-semibold text-text-primary text-lg mb-1">{item.title}</h3>
                                            <p className="text-sm text-accent mb-3">{item.company} — {item.location}</p>
                                            <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>

                                </motion.div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const StackIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
    </svg>
)

const CodeIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
)

const BoltIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
)

const services = [
    {
        icon: StackIcon,
        title: 'Full-Stack Development',
        description: 'End-to-end development of robust, scalable web applications from database to UI.',
    },
    {
        icon: CodeIcon,
        title: 'Frontend Engineering',
        description: 'Building beautiful, responsive, and intuitive user interfaces with modern frameworks.',
    },
    {
        icon: BoltIcon,
        title: 'Performance & SEO',
        description: 'Optimizing applications for speed, efficiency, and search engine visibility.',
    },
]

export default function Services() {
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
                        Services I Provide
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-bold text-text-primary mb-4"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
                >
                    From concept to deployment,
                    <br />
                    <span style={{ WebkitTextStroke: '1.5px var(--color-text-primary)', color: 'transparent' }}>
                        I've got you covered.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-text-muted text-sm max-w-lg mb-16 leading-relaxed"
                >
                    From initial concept to final deployment, I offer a range of services
                    to bring your project to life.
                </motion.p>

                {/* 3 Kart */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map(function (s, i) {
                        return (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 32 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="group relative p-8 rounded-2xl border border-border bg-bg-secondary hover:border-accent transition-all duration-300 cursor-default overflow-hidden"
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 0%, rgba(200,75,49,0.08) 0%, transparent 70%)',
                                    }}
                                />

                                {/* İkon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                                    style={{
                                        backgroundColor: 'var(--color-bg-tertiary)',
                                        color: 'var(--color-text-muted)',
                                    }}
                                >
                                    <s.icon />
                                </div>

                                {/* Başlık */}
                                <h3
                                    className="font-semibold text-text-primary mb-3 text-lg leading-tight group-hover:text-accent transition-colors duration-300"
                                    style={{ letterSpacing: '-0.01em' }}
                                >
                                    {s.title}
                                </h3>

                                {/* Açıklama */}
                                <p className="text-sm text-text-muted leading-relaxed mb-6">
                                    {s.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
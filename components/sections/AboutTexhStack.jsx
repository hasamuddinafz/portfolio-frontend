'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const tabs = [
    {
        id: 'frontend',
        label: 'Frontend',
        items: [
            'React.js & Next.js',
            'JavaScript (ES6+)',
            'Tailwind CSS & Sass',
            'Redux Toolkit & Context API',
            'React Query',
            'API Integration',
        ],
    },
    {
        id: 'backend',
        label: 'Backend',
        items: [
            '.NET Core & EF Core',
            'ASP.NET Core MVC & Web API',
            'Node.js & Express.js',
            'RESTful API Design',
            'Authentication (JWT, Identity)',
        ],
    },
    {
        id: 'tools',
        label: 'Databases & Tools',
        items: [
            'PostgreSQL',
            'Microsoft SQL Server',
            'MongoDB',
            'Git & GitHub',
            'Docker',
            'Figma',
        ],
    },
]

const CodeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
)

export default function TechStack() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [active, setActive] = useState('frontend')

    const activeTab = tabs.find(t => t.id === active)

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
                        My Technical Expertise
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-bold text-text-primary mb-4"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
                >
                    Technologies I work with
                    <br />
                    <span style={{ WebkitTextStroke: '1.5px var(--color-text-primary)', color: 'transparent' }}>
                        every day.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-text-muted text-sm max-w-lg mb-16 leading-relaxed"
                >
                    A curated list of the technologies and tools I use to build modern,
                    high-performance applications.
                </motion.p>

                {/* Tab container */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="rounded-2xl border border-border bg-bg-secondary p-6"
                >
                    {/* Tab butonları */}
                    <div className="flex items-center gap-2 p-1.5 rounded-xl bg-bg-tertiary mb-8">
                        {tabs.map(function (tab) {
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActive(tab.id)}
                                    className="relative flex-1 py-2.5 px-4 text-sm font-medium rounded-lg transition-colors duration-200"
                                    style={{
                                        color: active === tab.id ? '#f0ece4' : 'var(--color-text-muted)',
                                    }}
                                >
                                    {active === tab.id && (
                                        <motion.div
                                            layoutId="tab-bg"
                                            className="absolute inset-0 rounded-lg"
                                            style={{ backgroundColor: 'var(--color-accent)' }}
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Tab içeriği */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-text-muted">
                                    <CodeIcon />
                                </span>
                                <span className="font-semibold text-text-primary">
                                    {activeTab.label}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {activeTab.items.map(function (item) {
                                    return (
                                        <span
                                            key={item}
                                            className="flex items-center gap-1.5 px-3 py-2 text-sm font-mono text-text-secondary border border-border rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
                                        >
                                            <span className="text-accent text-xs">⚡</span>
                                            {item}
                                        </span>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </motion.div>

            </div>
        </section>
    )
}
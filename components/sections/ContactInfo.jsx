'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const info = [
    {
        label: 'Phone',
        value: '+90 (541) 565 45 60',
        href: 'tel:+905415654560',
    },
    {
        label: 'Email',
        value: 'hasamuddin.afz@gmail.com',
        href: 'mailto:hasamuddin.afz@gmail.com',
    },
    {
        label: 'Location',
        value: 'Karabük, Turkey',
        href: null,
    },
]

const socials = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/hasamuddin-afzali/',
        icon: faLinkedin,
    },
    {
        label: 'GitHub',
        href: 'https://github.com/hasamuddinafz',
        icon: faGithub,
    },
]

export default function ContactInfo() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden">

            {/* Rust glow */}
            <div
                className="absolute bottom-0 left-0 pointer-events-none z-0"
                style={{
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, rgba(200,75,49,0.08) 0%, transparent 70%)',
                    transform: 'translate(-20%, 20%)',
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

                {/* Etiket */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <span className="w-8 h-px bg-accent" />
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">
                        Get In Touch
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Sol — başlık */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="font-bold text-text-primary leading-tight mb-6"
                            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
                        >
                            Let's build
                            <br />
                            <span style={{ WebkitTextStroke: '1.5px var(--color-text-primary)', color: 'transparent' }}>
                                something great.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-text-muted leading-relaxed max-w-md"
                        >
                            I'm always open to new opportunities and interesting collaborations.
                            Feel free to reach out — I'll get back to you within 24 hours.
                        </motion.p>
                    </div>

                    {/* Sağ — bilgiler */}
                    <div className="flex flex-col gap-6">

                        {/* İletişim bilgileri */}
                        {info.map(function (item, i) {
                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="flex flex-col gap-1 pb-6 border-b border-border"
                                >
                                    <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
                                        {item.label}
                                    </span>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-lg font-medium text-text-primary hover:text-accent transition-colors duration-200"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="text-lg font-medium text-text-primary">
                                            {item.value}
                                        </span>
                                    )}
                                </motion.div>
                            )
                        })}

                        {/* Sosyal linkler */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex items-center gap-4 pt-2"
                        >
                            {socials.map(function (s) {
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                                    >
                                        <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-200">
                                            <FontAwesomeIcon icon={s.icon} style={{ width: 18, height: 18 }} />
                                        </div>
                                        <span>{s.label}</span>
                                    </a>
                                )
                            })}
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    )
}
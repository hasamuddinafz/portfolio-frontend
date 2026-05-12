'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        >
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <Image
                    src="/bg.jpg"
                    alt=""
                    fill
                    className="object-cover object-center opacity-10"
                    priority
                />
            </motion.div>

            <div
                className="absolute bottom-0 left-0 pointer-events-none z-0"
                style={{
                    width: 600,
                    height: 600,
                    background: 'radial-gradient(circle, rgba(200,75,49,0.1) 0%, transparent 70%)',
                    transform: 'translate(-20%, 20%)',
                }}
            />

            <motion.div style={{ y: textY }} className="relative z-10 w-full">
                <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="w-8 h-px bg-accent" />
                        <span className="text-xs font-mono text-accent uppercase tracking-widest">
                            Building digital experiences
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="font-bold text-text-primary leading-none"
                        style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', letterSpacing: '-0.03em' }}
                    >
                        Hasamuddin
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="font-bold leading-none mb-10"
                        style={{
                            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                            letterSpacing: '-0.03em',
                            WebkitTextStroke: '1.5px var(--color-text-primary)',
                            color: 'transparent',
                        }}
                    >
                        Frontend Dev
                        <span style={{ WebkitTextStroke: '1.5px var(--color-accent)' }}>.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.44, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-border"
                    >
                        <p className="text-sm text-text-muted max-w-sm leading-relaxed">
                            I build interfaces that don't just work — they feel right.
                            Clean code, powerful experiences.
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href="#projects"
                                className="group flex items-center gap-2 btn btn-primary px-6 py-3 text-sm"
                            >
                                View Projects
                                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </a>
                            <a
                                href="/hasamuddin-afzali-cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline px-6 py-3 text-sm"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-px h-10"
                    style={{ background: 'linear-gradient(to bottom, #c84b31, transparent)' }}
                />
            </motion.div>
        </section>
    )
}
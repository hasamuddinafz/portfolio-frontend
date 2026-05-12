'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
    {
        number: '01',
        title: 'Creative Problem-Solving',
        description: 'Finding elegant solutions to complex technical challenges.',
    },
    {
        number: '02',
        title: 'Clean & Scalable Code',
        description: 'Writing maintainable code that grows with your business.',
    },
    {
        number: '03',
        title: 'User-Centric Focus',
        description: 'Prioritizing intuitive and engaging user experiences.',
    },
]

export default function AboutHero() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

    return (
        <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">

            {/* Rust glow */}
            <div
                className="absolute top-0 right-0 pointer-events-none z-0"
                style={{
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, rgba(200,75,49,0.08) 0%, transparent 70%)',
                    transform: 'translate(20%, -20%)',
                }}
            />

            <motion.div style={{ y: textY }} className="relative z-10 w-full">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Etiket */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <span className="w-8 h-px bg-accent" />
                        <span className="text-xs font-mono text-accent uppercase tracking-widest">
                            About Hasamuddin Afzali
                        </span>
                    </motion.div>

                    {/* Başlık */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="font-bold text-text-primary leading-tight mb-6"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
                    >
                        Passionate Developer
                        <br />
                        <span
                            className="font-bold"
                            style={{
                                WebkitTextStroke: '1.5px var(--color-text-primary)',
                                color: 'transparent',
                            }}
                        >
                            Crafting Digital Experiences
                        </span>
                    </motion.h1>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-text-muted leading-relaxed max-w-2xl mb-20"
                        style={{ fontSize: '1.05rem' }}
                    >
                        I specialize in transforming ideas into high-quality, user-friendly software.
                        Driven by curiosity and problem-solving, I build digital products that are
                        both impactful and elegant.
                    </motion.p>

                    {/* 3 özellik */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border">
                        {features.map(function (f, i) {
                            return (
                                <motion.div
                                    key={f.number}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="group p-8 bg-bg-secondary hover:bg-bg-tertiary transition-colors duration-300"
                                >
                                    <span className="text-xs font-mono text-accent mb-4 block">{f.number}</span>
                                    <h3 className="font-semibold text-text-primary mb-2 text-lg leading-tight">
                                        {f.title}
                                    </h3>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        {f.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </motion.div>
        </section>
    )
}
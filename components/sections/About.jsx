'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const words = ['The', 'web', 'should', 'feel', 'as', 'good', 'as', 'it', 'looks.']

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const lineX = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])
    const marqueeWords = [
        'Web Design', 'Frontend Dev', 'UI/UX', 'React', 'Next.js',
        'Performance', 'Clean Code', 'Accessibility', 'Motion Design',
    ]
    return (
        <section ref={ref} className="relative py-32 overflow-hidden">

            {/* Marquee yazı bandı */}
            <div className="relative w-full overflow-hidden border-y border-border py-4 mb-20">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    {[...Array(2)].map(function (_, outer) {
                        return (
                            <div key={outer} className="flex gap-8 shrink-0">
                                {marqueeWords.map(function (word, i) {
                                    return (
                                        <span key={i} className="flex items-center gap-8">
                                            <span className="text-sm font-mono text-text-muted uppercase tracking-widest">
                                                {word}
                                            </span>
                                            <span className="text-accent text-xs">✦</span>
                                        </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-6">

                {/* Etiket */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-16"
                >
                    <span className="w-8 h-px bg-accent" />
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">About</span>
                </motion.div>

                {/* Büyük tipografik slogan */}
                <div className="mb-24">
                    <div
                        className="font-bold leading-none flex flex-wrap gap-x-6 gap-y-2"
                        style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', letterSpacing: '-0.03em' }}
                    >
                        {words.map(function (word, i) {
                            const isOutline = i % 2 !== 0
                            return (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.8,
                                        delay: i * 0.07,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    style={
                                        isOutline
                                            ? {
                                                WebkitTextStroke: '1.5px var(--color-text-primary)',
                                                color: 'transparent',
                                            }
                                            : { color: 'var(--color-text-primary)' }
                                    }
                                >
                                    {word}
                                </motion.span>
                            )
                        })}
                    </div>
                </div>

                {/* Alt kısım — bio + CTA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end pt-12 border-t border-border">

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-text-muted leading-relaxed max-w-md"
                    >
                        I'm Hasamuddin — a frontend developer who obsesses over the details.
                        Fast, accessible, and beautifully crafted interfaces are what I do.
                        Every pixel, every interaction, every line of code matters.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex justify-start md:justify-end"
                    >
                        <a
                            href="/about"
                            className="group flex items-center gap-3 text-sm font-medium text-text-primary"
                        >
                            <span className="relative pb-0.5">
                                Read more
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                            </span>
                            <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                <ArrowUpRight size={14} />
                            </span>
                        </a>
                    </motion.div>

                </div>

            </div>
        </section>
    )
}
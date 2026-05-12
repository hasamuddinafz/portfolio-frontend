'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function ContactCTA() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

    return (
        <section ref={ref} className="relative py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative rounded-2xl overflow-hidden"
                    style={{ minHeight: '480px' }}
                >
                    {/* Arka plan parallax */}
                    <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
                        <Image
                            src="/bg2.jpg"
                            alt=""
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>

                    {/* Overlay — her zaman koyu */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)',
                        }}
                    />

                    {/* Rust glow */}
                    <div
                        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(200,75,49,0.2) 0%, transparent 70%)',
                            transform: 'translate(-30%, 30%)',
                        }}
                    />

                    {/* İçerik */}
                    <div
                        className="relative z-10 flex flex-col justify-between p-10 md:p-16"
                        style={{ minHeight: '480px' }}
                    >

                        {/* Üst etiket */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center gap-3"
                        >
                            <span className="w-8 h-px" style={{ backgroundColor: '#c84b31' }} />
                            <span
                                className="text-xs font-mono uppercase tracking-widest"
                                style={{ color: '#c84b31' }}
                            >
                                Let's work together
                            </span>
                        </motion.div>

                        {/* Alt — başlık + buton */}
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mt-auto">

                            <div className="flex flex-col gap-2">
                                <motion.h2
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="font-bold leading-tight"
                                    style={{
                                        fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                                        letterSpacing: '-0.03em',
                                        color: '#f0ece4',
                                    }}
                                >
                                    Got a project
                                    <br />
                                    in mind?
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="text-sm mt-3 max-w-sm leading-relaxed"
                                    style={{ color: '#b8b0a4' }}
                                >
                                    I'm always open to new opportunities and interesting collaborations.
                                    Let's build something great together.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="flex flex-col gap-3 shrink-0"
                            >
                                <a
                                    href="mailto:hasamuddin.afz@gmail.com"
                                    className="group flex items-center gap-2 btn btn-primary px-8 py-4 text-sm"
                                >
                                    Get in touch
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>
                                <span
                                    className="text-xs text-center font-mono"
                                    style={{ color: '#b8b0a4' }}
                                >
                                    hasamuddin.afz@gmail.com
                                </span>
                            </motion.div>

                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
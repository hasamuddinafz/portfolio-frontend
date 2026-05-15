'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Rust glow */}
            <div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                    width: 600,
                    height: 600,
                    background: 'radial-gradient(circle, rgba(200,75,49,0.1) 0%, transparent 70%)',
                    transform: 'translate(-50%, -50%)',
                }}
            />

            {/* Grid */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center px-6">

                {/* 404 büyük */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative mb-8"
                >
                    <span
                        className="font-bold select-none"
                        style={{
                            fontSize: 'clamp(8rem, 20vw, 16rem)',
                            letterSpacing: '-0.05em',
                            lineHeight: 1,
                            WebkitTextStroke: '2px var(--color-border)',
                            color: 'transparent',
                        }}
                    >
                        404
                    </span>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-text-primary"
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.03em', whiteSpace: 'nowrap' }}
                    >
                        Page not found
                        <span className="text-accent">.</span>
                    </motion.span>
                </motion.div>

                {/* Açıklama */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-text-muted text-sm max-w-sm leading-relaxed mb-10"
                >
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </motion.p>

                {/* Butonlar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="flex items-center gap-4"
                >
                    <a
                        href="/"
                        className="group flex items-center gap-2 btn btn-primary px-6 py-3 text-sm"
                    >
                        Go Home
                        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                    <a
                        href="/projects"
                        className="group flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                        View Projects
                        <ArrowUpRight
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </motion.div>

            </div>
        </section>
    )
}
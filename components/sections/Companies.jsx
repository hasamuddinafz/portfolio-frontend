'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const logos = [
    { name: 'Demirsoy Plast', src: '/assets/logos/Demirsoyplast.png' },
    { name: 'Aydoğan GYD', src: '/assets/logos/Aydogangyd.png' },
    { name: 'BarutBey', src: '/assets/logos/barutbey.png' },
    { name: 'Birlik Ajans', src: '/assets/logos/BirlikAjans.jpg' },
    { name: 'Burger Boss', src: '/assets/logos/burger-boss.png' },
    { name: 'Dilbaz', src: '/assets/logos/dilbaz.png' },
    { name: 'Karabük Teknokent', src: '/assets/logos/teknokent.png' },
    { name: 'Wizsha Tasarim', src: '/assets/logos/wizha.png' },
]

export default function Companies() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="relative py-24 overflow-hidden">


            <div className="max-w-6xl mx-auto px-6">

                {/* Etiket */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <span className="w-8 h-px bg-accent" />
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">
                        Companies I've worked with
                    </span>
                </motion.div>

                {/* Logo marquee */}
                <div className="relative overflow-hidden">
                    {/* Sol fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, var(--color-bg-primary), transparent)' }}
                    />
                    {/* Sağ fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, var(--color-bg-primary), transparent)' }}
                    />

                    <motion.div
                        className="flex gap-16 items-center"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    >
                        {[...Array(2)].map(function (_, outer) {
                            return (
                                <div key={outer} className="flex gap-16 items-center shrink-0">
                                    {logos.map(function (logo) {
                                        return (
                                            <div
                                                key={logo.name}
                                                className="relative h-30 w-50 shrink-0 opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                                            >
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
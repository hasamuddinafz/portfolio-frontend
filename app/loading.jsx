'use client'

import { motion } from 'framer-motion'

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary">

            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-8"
            >
                <span
                    className="font-bold"
                    style={{ fontSize: '2rem', letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
                >
                    Hasamuddin<span style={{ color: 'var(--color-accent)' }}>.</span>
                </span>

                {/* Bar animasyonu */}
                <div className="flex items-center gap-1.5">
                    {[0, 1, 2, 3, 4].map(function (i) {
                        return (
                            <motion.div
                                key={i}
                                className="w-1 rounded-full"
                                style={{ backgroundColor: 'var(--color-accent)' }}
                                animate={{ height: ['8px', '24px', '8px'] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    ease: 'easeInOut',
                                }}
                            />
                        )
                    })}
                </div>
            </motion.div>

        </div>
    )
}
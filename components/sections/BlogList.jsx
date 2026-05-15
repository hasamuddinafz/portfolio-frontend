'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function BlogList({ blogs = [] }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="relative py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <span className="w-8 h-px bg-accent" />
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">Blog</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-bold text-text-primary mb-16"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
                >
                    Thoughts & Ideas
                    <span style={{ WebkitTextStroke: '1.5px var(--color-accent)', color: 'transparent' }}>.</span>
                </motion.h1>

                {blogs.length === 0 ? (
                    <p className="text-text-muted text-sm py-16 text-center">No posts found.</p>
                ) : (
                    <div className="flex flex-col divide-y divide-border">
                        {blogs.map((post, i) => {
                            const tags = post.tags
                                ? post.tags.split(',').map(t => t.trim())
                                : []

                            const date = post.createdAt
                                ? new Date(post.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })
                                : ''

                            return (
                                <motion.a
                                    key={post.id || post.slug}
                                    href={`/blogs/${post.slug}`}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 py-8 items-start"
                                >
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono text-text-muted">{date}</span>
                                        </div>
                                        <h2
                                            className="font-bold text-text-primary group-hover:text-accent transition-colors duration-300"
                                            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', letterSpacing: '-0.02em' }}
                                        >
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 text-xs font-mono text-text-muted border border-border rounded-full group-hover:border-accent group-hover:text-accent transition-all duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="hidden md:flex items-start pt-8">
                                        <ArrowUpRight
                                            size={20}
                                            className="text-text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                                        />
                                    </div>
                                </motion.a>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}
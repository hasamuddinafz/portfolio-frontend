'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function BlogDetail({ post }) {
    return (
        <article className="relative py-32 overflow-hidden">
            <div className="max-w-3xl mx-auto px-6">

                {/* Geri */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <a
                        href="/blogs"
                        className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                        ← Back to Blog
                    </a>
                </motion.div>

                {/* Meta */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <span className="text-xs font-mono text-text-muted">{post.date}</span>
                    <span className="text-xs text-text-muted">·</span>
                    <span className="text-xs font-mono text-text-muted">{post.readTime}</span>
                </motion.div>

                {/* Başlık */}
                <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-bold text-text-primary leading-tight mb-6"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
                >
                    {post.title}
                </motion.h1>

                {/* Taglar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border"
                >
                    {post.tags.map(function (tag) {
                        return (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-xs font-mono text-accent border border-border-accent rounded-full"
                            >
                                {tag}
                            </span>
                        )
                    })}
                </motion.div>

                {/* İçerik */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="prose-content"
                >
                    {post.content.split('\n\n').map(function (block, i) {
                        if (block.startsWith('## ')) {
                            return (
                                <h2
                                    key={i}
                                    className="font-bold text-text-primary mt-12 mb-4"
                                    style={{ fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', letterSpacing: '-0.02em' }}
                                >
                                    {block.replace('## ', '')}
                                </h2>
                            )
                        }
                        return (
                            <p key={i} className="text-text-muted leading-relaxed mb-6">
                                {block}
                            </p>
                        )
                    })}
                </motion.div>

                {/* Alt — diğer yazılar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-20 pt-12 border-t border-border"
                >
                    <a
                        href="/blog"
                        className="group flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors duration-200"
                    >
                        View all posts
                        <ArrowUpRight
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </motion.div>

            </div>
        </article>
    )
}
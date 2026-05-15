'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function FeaturedProjects({ projects = [] }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const featured = projects.slice(0, 3)
    if (featured.length === 0) return null
    return (
        <section ref={ref} className="relative py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex items-end justify-between mb-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="w-8 h-px bg-accent" />
                            <span className="text-xs font-mono text-accent uppercase tracking-widest">
                                Featured Work
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="font-bold text-text-primary"
                            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
                        >
                            Selected Projects
                        </motion.h2>
                    </div>

                    <motion.a
                        href="/projects"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden md:flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                        View all
                        <ArrowUpRight size={14} />
                    </motion.a>
                </div>

                <div className="flex flex-col divide-y divide-border">
                    {featured.map((project, i) => (
                        <ProjectRow key={project.id || i} project={project} index={i} isInView={isInView} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-10 md:hidden"
                >
                    <a
                        href="/projects"
                        className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                        View all projects
                        <ArrowUpRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section >
    )
}

function ProjectRow({ project, index, isInView }) {
    const tags = project.techStack
        ? project.techStack.split(',').map(t => t.trim())
        : project.tags || []

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 py-8 items-start cursor-default"
        >
            <span className="text-xs font-mono text-text-muted group-hover:text-accent transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
            </span>

            <div className="flex flex-col gap-3">
                <h3
                    className="font-bold text-text-primary group-hover:text-accent transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', letterSpacing: '-0.02em' }}
                >
                    {project.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-lg">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-mono text-text-muted border border-border rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-3 md:pt-1">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-text-muted hover:text-text-primary transition-colors duration-200"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} style={{ width: 18, height: 18 }} />
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-text-muted hover:text-text-primary transition-colors duration-200"
                        aria-label="Live"
                    >
                        <ArrowUpRight size={18} />
                    </a>
                )}
            </div>
        </motion.div >
    )
}
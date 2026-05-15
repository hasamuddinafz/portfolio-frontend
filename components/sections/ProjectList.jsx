'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ProjectRow({ project, index, isInView }) {
    const tags = project.techStack
        ? project.techStack.split(',').map(t => t.trim())
        : project.tags || []

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group grid grid-cols-1 md:grid-cols-[60px_1fr_120px_auto] gap-4 md:gap-8 py-8 border-b border-border items-start"
        >
            <span className="text-xs font-mono text-text-muted group-hover:text-accent transition-colors duration-300 pt-1">
                {String(index + 1).padStart(2, '0')}
            </span>

            <div className="flex flex-col gap-3">
                <h3
                    className="font-bold text-text-primary group-hover:text-accent transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', letterSpacing: '-0.02em' }}
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
                            className="px-2.5 py-1 text-xs font-mono text-text-muted border border-border rounded-full group-hover:border-accent group-hover:text-accent transition-all duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
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
                )
                }
            </div >
        </motion.div >
    )
}

export default function ProjectList({ projects = [] }) {
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
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">
                        All Projects
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-bold text-text-primary mb-16"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
                >
                    Selected Work
                    <span style={{ WebkitTextStroke: '1.5px var(--color-accent)', color: 'transparent' }}>.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden md:grid grid-cols-[60px_1fr_120px_auto] gap-8 pb-4 border-b border-border"
                >
                    <span className="text-xs font-mono text-text-muted uppercase tracking-widest">#</span>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-widest">Project</span>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-widest">Links</span>
                </motion.div>

                <div>
                    {projects.length === 0 ? (
                        <p className="text-text-muted text-sm py-16 text-center">No projects found.</p>
                    ) : (
                        projects.map((project, i) => (
                            <ProjectRow
                                key={project.id || i}
                                project={project}
                                index={i}
                                isInView={isInView}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}
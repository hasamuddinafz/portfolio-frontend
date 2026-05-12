'use client'

import { ArrowUpRight } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hasamuddin-afzali/', icon: faLinkedin },
    { label: 'GitHub', href: 'https://github.com/hasamuddinafz', icon: faGithub },
    { label: 'Mail', href: 'mailto:hasamuddin.afz@gmail.com', icon: faEnvelope },
]

const links = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
]

export default function Footer() {
    return (
        <footer className="border-t border-border mt-24">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-between gap-12">

                    <div className="flex flex-col gap-4 max-w-xs">
                        <a href="/" className="font-semibold text-xl text-text-primary">
                            Hasamuddin<span className="text-accent">.</span>
                        </a>
                        <p className="text-sm text-text-muted leading-relaxed">
                            Clean code, great experiences. Always ready for the next project.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            {socials.map(function (s) {
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="text-text-muted hover:text-text-primary transition-colors duration-200"
                                    >
                                        <FontAwesomeIcon icon={s.icon} style={{ width: 18, height: 18 }} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">
                            Navigation
                        </span>
                        {links.map(function (link) {
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="group flex items-center gap-1 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                                >
                                    {link.label}
                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                </a>
                            )
                        })}
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-border">
                    <span className="text-xs text-text-muted">
                        © 2026 Hasamuddin. All rights reserved.
                    </span>
                    <span className="text-xs text-text-muted font-mono">
                        Designed & Built by Hasamuddin Afzali
                    </span>
                </div>

            </div>
        </footer>
    )
}
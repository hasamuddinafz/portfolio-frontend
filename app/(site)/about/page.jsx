import Experience from '@/components/sections/AboutExperience'
import AboutHero from '@/components/sections/AboutHero'
import Services from '@/components/sections/AboutService'
import TechStack from '@/components/sections/AboutTexhStack'
import React from 'react'

export const metadata = {
    title: 'About — Hasamuddin Afzali',
    description: 'Passionate frontend developer specializing in building high-quality, user-friendly web applications. Learn more about my journey, skills, and services.',
    keywords: ['About', 'Frontend Developer', 'Full-Stack', 'React', 'Next.js', 'Hasamuddin Afzali'],
    openGraph: {
        title: 'About — Hasamuddin Afzali',
        description: 'Passionate frontend developer specializing in building high-quality, user-friendly web applications.',
        url: 'https://hasamuddinafzali.com/about',
        siteName: 'Hasamuddin Afzali',
        locale: 'en_US',
        type: 'website',
    },
}
export default function page() {
    return (
        <div>
            <AboutHero />
            <Experience />
            <Services />
            <TechStack />
        </div>
    )
}

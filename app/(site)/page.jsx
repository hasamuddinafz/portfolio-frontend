import About from "@/components/sections/About";
import Companies from "@/components/sections/Companies";
import ContactCTA from "@/components/sections/ContactCTA";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import { getProjects } from "@/libs/api";

export const metadata = {
    title: 'Hasamuddin Afzali',
    description: 'I build interfaces that don\'t just work — they feel right. Clean code, powerful experiences.',
    keywords: ['Frontend Developer', 'React', 'Next.js', 'UI/UX'],
    openGraph: {
        title: 'Hasamuddin Afzali — Frontend Developer',
        description: 'I build interfaces that don\'t just work — they feel right.',
        url: 'https://hasamuddinafzali.com',
        siteName: 'Hasamuddin Afzali',
        locale: 'en_US',
        type: 'website',
    },
}
export default async function page() {
    const projects = await getProjects();
    return (
        <div>
            <Hero />
            <About />
            <Companies />
            <FeaturedProjects projects={projects} />
            <ContactCTA />
        </div>
    )
}

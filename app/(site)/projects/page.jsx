import ProjectList from "@/components/sections/ProjectList"
import { getProjects } from "@/libs/api"

export const metadata = {
    title: 'Projects — Hasamuddin Afzali',
    description: 'A collection of my selected work and projects.',
}

export default async function ProjectsPage() {
    const projects = await getProjects()
    return <ProjectList projects={projects} />
}
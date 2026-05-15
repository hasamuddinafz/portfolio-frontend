import BlogList from "@/components/sections/BlogList"
import { getBlogs } from "@/libs/api"

export const metadata = {
    title: 'Blog — Hasamuddin Afzali',
    description: 'Thoughts, ideas and articles about web development, design and technology.',
}

export default async function BlogPage() {
    const blogs = await getBlogs()
    return <BlogList blogs={blogs} />
}
import BlogDetail from '@/components/sections/BlogDetail'
import { getBlogBySlug, getBlogs } from '@/libs/api'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const blogs = await getBlogs()
    return blogs.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = await getBlogBySlug(slug)
    if (!post) return {}
    return {
        title: `${post.title} — Hasamuddin Afzali`,
        description: post.excerpt,
    }
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params
    const post = await getBlogBySlug(slug)
    if (!post) notFound()
    return <BlogDetail post={post} />
}


import BlogDetail from '@/components/sections/BlogDetail'
import { getPostBySlug, posts } from '@/data/Blog'

import { notFound } from 'next/navigation'

export function generateStaticParams() {
    return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) return {}
    return {
        title: `${post.title} — Hasamuddin Afzali`,
        description: post.excerpt,
    }
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) notFound()
    return <BlogDetail post={post} />
}
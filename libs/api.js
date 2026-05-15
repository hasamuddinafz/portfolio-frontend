const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.hasamuddinafzali.com/api'

export async function getProjects() {
    const res = await fetch(`${API_URL}/project`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    return res.json()
}

export async function getBlogs() {
    const res = await fetch(`${API_URL}/blog`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    return res.json()
}

export async function getBlogBySlug(slug) {
    const res = await fetch(`${API_URL}/blog/slug/${slug}`, { next: { revalidate: 60 } })
    if (!res.ok) return null
    return res.json()
}
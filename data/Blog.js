export const posts = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with Next.js 15',
        excerpt: 'A comprehensive guide to building modern web applications with Next.js 15 and the App Router.',
        date: 'May 10, 2026',
        readTime: '5 min read',
        tags: ['Next.js', 'React', 'Web Dev'],
        content: `
Next.js 15 brings significant improvements to the developer experience and performance. In this guide, we'll explore the key features and how to get started.

## What's New in Next.js 15

The latest version introduces several exciting features including improved caching, better TypeScript support, and enhanced performance optimizations.

## Setting Up Your Project

Getting started is straightforward. Simply run the following command to create a new Next.js project with all the latest features enabled.

## App Router

The App Router is now the recommended way to build Next.js applications. It provides a more intuitive file-based routing system with support for layouts, loading states, and error boundaries.

## Conclusion

Next.js 15 is a major step forward for the framework. The new features make it easier than ever to build fast, scalable web applications.
    `.trim(),
    },
    {
        slug: 'mastering-tailwind-css',
        title: 'Mastering Tailwind CSS in 2026',
        excerpt: 'Deep dive into Tailwind CSS v4 and how to build beautiful, maintainable user interfaces.',
        date: 'April 28, 2026',
        readTime: '7 min read',
        tags: ['Tailwind CSS', 'CSS', 'Design'],
        content: `
Tailwind CSS has revolutionized the way we style web applications. Version 4 brings even more power and flexibility to the table.

## What Changed in v4

The new version introduces a CSS-first configuration approach, eliminating the need for a JavaScript config file in most cases.

## The @theme Directive

One of the most exciting features is the @theme directive, which allows you to define your design tokens directly in CSS.

## Performance Improvements

Tailwind v4 is significantly faster than previous versions, with a new engine that can process your styles in milliseconds.

## Conclusion

Tailwind CSS v4 is a game-changer for frontend development. The new features make it easier to build consistent, beautiful interfaces.
    `.trim(),
    },
    {
        slug: 'framer-motion-animations',
        title: 'Creating Stunning Animations with Framer Motion',
        excerpt: 'Learn how to bring your React applications to life with smooth, professional animations.',
        date: 'April 15, 2026',
        readTime: '6 min read',
        tags: ['Framer Motion', 'Animation', 'React'],
        content: `
Framer Motion is the go-to animation library for React applications. It provides a simple yet powerful API for creating complex animations.

## Getting Started

Installing Framer Motion is as simple as running npm install framer-motion and importing the motion component.

## Basic Animations

The most common use case is animating elements as they enter and leave the viewport. This can be achieved with the initial, animate, and exit props.

## Advanced Techniques

For more complex animations, Framer Motion provides hooks like useScroll, useTransform, and useSpring.

## Conclusion

Framer Motion makes it incredibly easy to add professional animations to your React applications without writing complex CSS keyframes.
    `.trim(),
    },
]

export function getPostBySlug(slug) {
    return posts.find(p => p.slug === slug) || null
}
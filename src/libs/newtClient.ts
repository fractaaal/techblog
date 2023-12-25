import { Article, Tag } from '@/types/article'
import { createClient } from 'newt-client-js'
import { cache } from 'react'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const perPage = 10

export const getArticles = cache(async () => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: ['_id', 'title', 'slug', 'coverImage', 'tags', 'author', '_sys'],
    },
  })
  return items
})

// ページネーション付きで記事を取得する
export const getPaginatedArticles = cache(async (page: number) => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      limit: perPage,
      skip: (page - 1) * perPage,
      select: ['_id', 'title', 'slug', 'coverImage', 'tags', 'author', '_sys'],
    },
  })
  return items
})

export const getArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      body: {
        fmt: 'text',
      },
    },
  })
  return article
})

// タグで記事を取得する
export const getArticlesByTag = cache(async (tagId: string, page: number) => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      limit: perPage,
      skip: (page - 1) * perPage,
      tags: {
        in: [tagId],
      },
    },
  })
  return items
})

export const getAllArticlesByTag = cache(async (tagId: string) => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      tags: {
        in: [tagId],
      },
    },
  })
  return items
})

// タグ一覧を取得する
export const getTags = cache(async () => {
  const { items } = await client.getContents<Tag>({
    appUid: 'blog',
    modelUid: 'tag',
  })
  return items
})

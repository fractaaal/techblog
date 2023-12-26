import { Article } from '@/types/article'

export const generateShareText = (article: Article) => {
  return `${article?.meta?.title}\n\n ${article?.meta?.description}\n\n#${article?.tags
    .map((tag) => tag?.name)
    .join(' #')}\n\n`
}

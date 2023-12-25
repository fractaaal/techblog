export const formatDate = (date: string) => {
  const newDate = new Date(date)

  const formatUpdatedAt = newDate.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return formatUpdatedAt
}

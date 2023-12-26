export type Article = {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
  }
  title: string
  slug: string
  meta: {
    title: string
    description: string
    ogImage: {
      _id: string
      altText: string
      description: string
      fileName: string
      fileSize: number
      fileType: string
      height: 924
      metadata: {}
      src: string
      title: string
      width: number
    }
  }
  body: string
  coverImage: {
    _id: string
    altText: string
    description: string
    fileName: string
    fileSize: number
    fileType: string
    height: number
    metadata: {}
    src: string
    title: string
    width: number
  }
  author: Author
  tags: Array<Tag>
}

export type Tag = {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
  }
  name: string
  slug: string
}

export type Author = {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
  }
  fullName: string
  slug: string
  biography: string
  profileImage: Partial<string>
}

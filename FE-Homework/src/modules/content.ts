export interface ResponseContent {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: Category
}

export interface Category {
  id: number
  name: string
  image: string
}

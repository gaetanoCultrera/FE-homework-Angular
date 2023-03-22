export interface ResponseContent {
  id: string
  title: string
  price: number
  description: string
  images: string[]
  category: Category
}

export interface Category {
  id: number
  name: string
  image: string
}

export interface ContactForm {
  name: string
  surname: string
  email: string
  subject: string
  textArea: string
  checkbox: boolean
}

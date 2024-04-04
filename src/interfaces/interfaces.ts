export interface IProduct {
  id: number
  title: string
  price: number
  description?: string
  category?: string
  image: string
  rating?: {
    rate?: number
    count?: number
  }
}

export interface IButtons {
  id: number
  title: string
  value: number | null
}
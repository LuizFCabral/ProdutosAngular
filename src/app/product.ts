export interface Product{
  id: number,
  desc: string,
  price: number,
  brand: string,
  specifications: [
    {
      color: string,
      weight: number,
      voltage: number,
    }
  ]
}

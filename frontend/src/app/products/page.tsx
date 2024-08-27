'use client'

import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

interface Product {
  id: number
  name: string
  price: number
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
      <AddProductForm setProducts={setProducts} />
    </div>
  )
}

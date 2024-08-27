'use client'

import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
}

export default function AddProductForm({ setProducts }: { setProducts: React.Dispatch<React.SetStateAction<Product[]>> }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const addProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3001/api/v1/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product: { name, price: parseFloat(price) } })
    })
    if (res.ok) {
      const newProduct = await res.json()
      setProducts(prev => [...prev, newProduct])
      setName('')
      setPrice('')
    }
  }

  return (
    <form onSubmit={addProduct}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  )
}

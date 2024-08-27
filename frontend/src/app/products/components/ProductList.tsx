interface Product {
  id: number
  name: string
  price: number
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}: ${product.price}</div>
      ))}
    </div>
  )
}

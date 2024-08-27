import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome to BMX Store</h1>
      <Link href="/products">View Products</Link>
    </main>
  )
}

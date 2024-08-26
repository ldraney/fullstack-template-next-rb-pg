'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error fetching data'))
  }, [])

  return (
    <main>
      <h1>Full Stack Template</h1>
      <p>Message from API: {message}</p>
    </main>
  )
}


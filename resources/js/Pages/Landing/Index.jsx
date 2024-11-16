import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Index() {
  return (
    <div className='flex justify-end'>
      <h1>Halaman Landing Page</h1>
      <Link href={route('login')}>Login</Link>
    </div>
  )
}

import React from 'react'

import './page.css'
import { League_Spartan } from 'next/font/google'

const inter = League_Spartan({weight: '400', subsets: ['latin'] })

function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }){
  return (

    <body className='h-screen'>
      <main className={inter.className}>
    {children}
    </main>
    </body>

   
  )
}

export default HomeLayout;
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Home() {
  return (
    <div>Protected
      <UserButton/>
    </div>
    
  )
}

export default Home
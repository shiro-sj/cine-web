import { SignInButton, SignUpButton } from '@clerk/nextjs'
import React from 'react'

function Landing() {
  return (
    <div>
        <SignInButton/>
        <SignUpButton/>
    </div>

  )
}

export default Landing
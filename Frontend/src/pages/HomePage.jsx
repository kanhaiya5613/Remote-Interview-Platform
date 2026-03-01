import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import toast from 'react-hot-toast'

function HomePage() {
  return (
    <>
    <button className='btn btn-primary' onClick={()=> toast.success("Successfully Clicked")}>Click me</button>
    <SignedOut>
      <SignInButton mode='model'>
        <button>Login</button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
        <SignOutButton/>
    </SignedIn>

    <UserButton/>
    </>
  )
}

export default HomePage
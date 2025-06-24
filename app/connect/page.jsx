"use server"
import { auth } from '@/auth'
import ConnectComponent from '@/components/ConnectComponent'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()

  if(!session){
    redirect("/auth/signin")
  }
  
  return (
    <main>
      <ConnectComponent session={session}/>
    </main>
  )
}

export default page

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.name} <br/>
      Signed in as {session} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}
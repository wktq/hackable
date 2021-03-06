import { signIn, signOut, useSession } from 'next-auth/client'

const IndexPage = () => {
  const [ session, loading ] = useSession()

  if(loading) return null

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.name} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
}

export default IndexPage
import '../styles/globals.css'
import { Provider } from "next-auth/client"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}

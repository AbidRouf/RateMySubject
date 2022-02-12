import '../styles/style.css'
import Layout from '../components/Layout'
import { SessionProvider } from "next-auth/react"


// library.add(faSearch, faTimes, faEnvelope, faAdjust)


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
        </SessionProvider>
    )
}

export default MyApp
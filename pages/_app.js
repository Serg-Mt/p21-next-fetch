import { Header } from '@/components/header';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
  <Header/>
    <main className="prose p-2">
      <Component {...pageProps} />
    </main>
  </>
}

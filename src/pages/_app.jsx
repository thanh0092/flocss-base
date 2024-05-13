
import "@/styles/app.scss";

export default function App({ Component, pageProps }) {
  return <div className="min-h-screen">
    <Component {...pageProps} />
  </div>
}
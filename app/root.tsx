import { LinksFunction } from '@remix-run/cloudflare'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import ReactLenis from '@studio-freight/react-lenis'
import Footer from './components/layout/footer'
import Header from './components/layout/header'
import './tailwind.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      cross_origin: 'true',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap',
    },
    { rel: 'stylesheet', href: 'https://use.typekit.net/ast7rab.css' },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-stone-950">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark bg-stone-950 font-serif text-stone-100">
        <ReactLenis root>
          <Header />
          {children}
          <Footer />
        </ReactLenis>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

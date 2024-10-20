import './App.css'
import { Adhan } from './components/Adhan'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Prayer from './components/Prayer'
import QuranPlayer from './components/QuranPlayer'
import Sobha from './components/Sobha'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <QuranPlayer />
      <Sobha />
      <Prayer />
      <Adhan/>
      <Footer />
      <Analytics />

    </>
  )
}

export default App

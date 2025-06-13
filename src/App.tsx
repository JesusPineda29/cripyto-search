import { useEffect } from "react"
import { CriptoSearchForm } from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import { CryptoPriceDisplay } from "./components/CryptoPriceDisplay"
import './Spinner.css'
import { Footer } from "./components/Footer"


export const App = () => {
  const fetchCriptos = useCryptoStore((state)=> state.fetchCryptos)

  useEffect(()=> {
    fetchCriptos()
  }, [])

  return (
    <>
    <main className="container">
      <h1 className="app-title">
        Cotizador de <span>Cripto Monedas</span>
      </h1>

      <div className="content">
        <CriptoSearchForm />
        <CryptoPriceDisplay />
      </div>
    </main>
    <Footer />
  </>
  )
}




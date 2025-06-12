import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Cryptocurrency } from './types'
import { getCriptos } from './services/CryptoService'

type Cryptostore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos : () => Promise<void>
}



export const useCryptoStore = create<Cryptostore>()(devtools((set) => ({
    cryptocurrencies: [],

    fetchCryptos: async () => {
        const cryptocurrencies = await getCriptos()
        set(()=> ({
            cryptocurrencies : cryptocurrencies
        }))
    }
})))



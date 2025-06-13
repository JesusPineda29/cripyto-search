import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Cryptocurrency, Pair } from './types'
import { getCriptos, fetchCurrentCryptoPrice } from './services/CryptoService'

type Cryptostore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos : () => Promise<void>
    fetchData : (pair: Pair) => Promise<void>
}



export const useCryptoStore = create<Cryptostore>()(devtools((set) => ({
    cryptocurrencies: [],

    fetchCryptos: async () => {
        const cryptocurrencies = await getCriptos()
        set(()=> ({
            cryptocurrencies : cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        await fetchCurrentCryptoPrice(pair)
    }
})))



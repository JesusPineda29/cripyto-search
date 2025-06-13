import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Cryptocurrency, CryptoPrice, Pair } from './types'
import { getCriptos, fetchCurrentCryptoPrice } from './services/CryptoService'

type Cryptostore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}



export const useCryptoStore = create<Cryptostore>()(devtools((set) => ({

    cryptocurrencies: [],

    result: {} as CryptoPrice,

    loading: false,

    fetchCryptos: async () => {
        const cryptocurrencies = await getCriptos()
        set(() => ({
            cryptocurrencies: cryptocurrencies
        }))
    },

    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})))

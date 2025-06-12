import { create } from 'zustand'
import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from './schema/crypto-schema'
import type { Cryptocurrency } from './types'


type Cryptostore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos : () => Promise<void>
}


async function getCriptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    
    if(result.success) {
        return result.data
    }
}


export const useCryptoStore = create<Cryptostore>((set) => ({
    cryptocurrencies: [],

    fetchCryptos: async () => {
        const cryptocurrencies = await getCriptos()
        set(()=> ({
            cryptocurrencies : cryptocurrencies
        }))
    }
}))



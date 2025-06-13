import { useMemo } from "react"
import { useCryptoStore } from "../store"


export const CryptoPriceDisplay = () => {

    const result = useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => {
        if (!result || Object.keys(result).length === 0) return false
        return !Object.values(result).includes('')
    }, [result])

    return (
        <div className="result-wrapper">
            {hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img 
                            src={`https://cryptocompare.com/${result.IMAGEURL}`} 
                            alt="IMAGEN CRYPTOMONEDA" 
                        />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>El precio es de: <span>{result.HIGHDAY}</span></p>
                            <p>El precio es de: <span>{result.LOWDAY}</span></p>
                            <p>El precio es de: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>El precio es de: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

import { useState } from "react"

export const useCounter = (numero:number = 10) => {
    const [valor, setValor] = useState(numero)
    
    const acumular = (numero:number) => {
        const tmp = valor + numero;
        if(tmp >= 0 && tmp <= 10 ){
            setValor(tmp)
        }
    }
    return {
        valor,
        acumular
    }
}

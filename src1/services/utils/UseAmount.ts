import axios from "axios"
import { useEffect, useState } from "react"

export const UseAmonut = (url: string) => {
    const [amount, setAmount] = useState<number>(0)
    
    useEffect(() => {
        const amt = async () => {
            try {
                const res = await axios.get(url)
                setAmount(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        amt();

        return () => {
            
        }
    }, [url])
    return amount;
}



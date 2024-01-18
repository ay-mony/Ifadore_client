import axios from "axios"
import { useEffect, useMemo, useState, useCallback } from "react"



export const useBal = (url: string) => {
    const [amount, setAmount] = useState<number>(0)
    const getPollTax = useMemo(() => async () => {
        try {
          const res = await axios.get(url);
          setAmount(res.data.totalAmount);
        } catch (error) {
          console.log(error);
        }
        getPollTax()
      }, [url])
      return amount;
}


export const useAmount = (url: string) => {
  const [amount, setAmount] = useState<number>(0);

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(url);
      setAmount(res.data.totalAmount);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    return () => {

    };
  }, [url, fetchData]);

  const memoizedFetchData = useMemo(() => fetchData, [fetchData]);

  return {
    amount,
    refetch: memoizedFetchData, 
  };
};
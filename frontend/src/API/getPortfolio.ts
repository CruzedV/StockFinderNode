import { useState, useEffect } from 'react';
import axios from "axios"

export function GetPortfolio(url:string){
  const [data,setData] = useState("")
  useEffect(() => {
    (
      async function(){
        const res = await axios.get(url)
        console.log(res.data.positions)
        setData(res.data)
      }
    )()
  }, [url])
  return [data]
}
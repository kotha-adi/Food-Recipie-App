import { useEffect, useState } from "react"

const URl ="https://api.spoonacular.com/recipes/complexSearch"
export default function FetchFood({foodArray,setFoodArray}){
    const Api_Key1=import.meta.env.VITE_APP_API_KEY1;

    const [query,setQuery]=useState("pizza")
    useEffect(()=>{
        async function fetchFood(){
            const res= await fetch(`${URl}?query=${query}&apiKey=${Api_Key1}`)
            const data= await res.json()
            setFoodArray(data.results)
        }
        fetchFood()
    },[query])
    return(
        <div>
            <center><input type="text" onChange={(e)=>setQuery(e.target.value)} value={query} className="input" /></center>

        </div>
    )
}
import React from "react";
import { useState, useEffect } from "react";

export const Product = () => {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            console.log("calling fetchData")
            const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
            const data = await response.json()
            setProducts(data)
        }
        fetchData()
    }, [])
      
return(
    <>
    {
        products.map((p) => {
            return (
                <div key={p.id}>
                    <h2>{p.name}</h2>
                    <p>{p.link}</p>
                </div>
            )
        }) 
    }
</> 
)
}
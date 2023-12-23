import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Details(){
    const [details,setDetails]=useState([])
    var {id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/' +id)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    })
    return(
        <>
        <div className="container-fluid row">
            <div className="col-lg-6 text-center">
                <img src={details.image} className="h-50"/>
            </div>
            <div className="col-lg-6">
                <h4>{details.title}</h4>
                <p>{details.description}</p>
                <h5>{details.category}</h5>
                <p>{details.price}</p>
                
            </div>
        </div>
        </>
    );
}
import React from "react";
import './tasknine.css'
import { useState } from "react";


 export function Tasknine(){
    const [countMango,setCountMango]=useState(0)
    const [countBanana,setCountBanana]=useState(0)

        return(
            <>
            <div className="mainDiv1 text-center d-flex justify-content-center align-items-center ">
                <div className=" bg-light col-11 rounded pt-5 h-75 col-md-8 ms-4 d-flex flex-lg-column flex-column justify-content-center align-items-center">
                    <h1>Bob ate <span >{countMango}</span> mangoes and <span>{countBanana}</span> bananas</h1>
                    <div className="d-flex gap-5 flex-lg-row flex-column justify-content-center text-center pt-3">
                        <div className="d-flex flex-lg-column mx-auto flex-column col-6 col-lg-4">
                            <img className="h-75 w-100 col-12"  src="https://thumbs.dreamstime.com/b/mango-ripe-white-background-35283521.jpg"></img>
                            <button onClick={()=>setCountMango(countMango+1)} className=" button mt-4 bg-primary text-light rounded col-lg-4 mx-auto">Eat Mango</button>
                        </div>
                        <div className="d-flex flex-lg-column mx-auto flex-column col-5 col-lg-4">
                            <img className="w-100 h-75 col-10" src="https://media.istockphoto.com/id/1154935375/photo/peeled-banana-on-white-background-photo-with-clipping-path.jpg?s=612x612&w=0&k=20&c=1k2Vczv77F2k6FhlFwL1xrtvQ1lq6_1aaO8Eo4rHKQ8="></img>
                            <button onClick={()=>setCountBanana(countBanana+1)} className="button mt-4 col-lg-4 bg-primary rounded text-light mx-auto">Eat Banana</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );

 }
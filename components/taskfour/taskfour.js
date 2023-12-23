import React from "react";
import './taskfour.css'

function Taskfour() {

    return (
        <>
            <div className="taskfourbg text-center">
            <div className="d-flex align-items-center justify-content-center my-auto flex-lg-column flex-md-column flex-column">
                <h1 className="text-light col-lg-6 text-center mx-auto my-auto pt-5">Social Buttons</h1>
                <div className="d-flex align-items-center justify-content-center mx-auto col-lg-4 flex-column flex-lg-row mx-sm-auto">
                    <button className="likeButton  mt-5 m-2">Like</button> <button className="cmtButton  mt-5 m-2" >Comment</button> <button className="shrButton  mt-5 m-2 bg-primary" >Share</button>
                </div>
                </div>
            </div>
        </>
    );
}
export default Taskfour
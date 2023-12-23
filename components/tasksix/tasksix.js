import React from "react";
import './tasksix.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Tasksix() {
    return (
        
        <div className="backgroundDiv d-flex align-items-center justify-content-center">
            <div className="secondBg bg-light col-lg-8 d-flex justify-content-center align-items-center flex-lg-row flex-column">
                <img className="rounded w-25 h-50 col-lg-5" src="https://www.pngitem.com/pimgs/m/298-2989348_laptop-circle-icon-png-transparent-png.png" />
                <div className="d-flex flex-column col-lg-7 gap-4">
                    <h2 className="mx-auto">Member Login</h2>
                    <input placeholder="Email" type="text" className="col-lg-6 rounded mx-auto"></input>
                    <input placeholder="Enter Password" type="password" className="col-lg-6 rounded mx-auto" ></input>
                    <button className="col-lg-6 mx-auto text-light loginbtn" >LOGIN</button>
                    <p className="mx-auto">Forgot<a href="" className="text-decoration-none">Username/Password?</a></p>
                    <a className="mx-auto text-decoration-none" href="">Create your account  <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
                </div>
            </div>
        
    );

}
export default Tasksix
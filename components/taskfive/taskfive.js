import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function Taskfive(){
    return(
        <>
            <div>
                <h1 className="text-center">Notifications</h1>
                <div className="d-flex flex-lg-column flex-sm-column flex-column">
                    <button class="btn1" className="bg-info text-start mt-3 text-light col-sm-4 col-lg-6 col-6 mx-auto"><FontAwesomeIcon icon={faCircleCheck} />  Information Message</button>
                    <button className="bg-success text-start mt-3 text-light col-sm-4 col-lg-6 mx-auto col-6"><FontAwesomeIcon icon={faCircleCheck} />  Success Message</button>
                    <button className="bg-warning text-start mt-3 text-light col-sm-4 col-lg-6 mx-auto col-6 "><FontAwesomeIcon icon={faBell} />  Warning Message</button>
                    <button className="bg-danger text-start mt-3 text-light col-sm-4 col-lg-6 mx-auto col-6"><FontAwesomeIcon icon={faTriangleExclamation} />  Error Message</button>
                </div>
            </div>
        </>
    );
}
export default Taskfive
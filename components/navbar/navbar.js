import React from "react";
import { Link } from "react-router-dom";

function Mynav(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <Link to="/taskone" className="text-decoration-none">HelloWorld</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/tasktwo' className="text-decoration-none">CongratsCard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/taskthree' className="text-decoration-none">SuperLeague</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/taskfour' className="text-decoration-none" >SocialButtons</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/taskfive' className="text-decoration-none">Notifications</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/tasksix' className="text-decoration-none" >MemberLogin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/taskseven' className="text-decoration-none" >Learn 4.0</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/taskeight' className="text-decoration-none" >Count</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/tasknine' className="text-decoration-none" >FruitCounter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/taskten' className="text-decoration-none" >Feedback</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/product' className="text-decoration-none" >ProductPage</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Mynav
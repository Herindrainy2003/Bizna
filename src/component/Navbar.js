import { BrowserRouter } from "react-router-dom";
import React  from "react";
import { Link  } from "react-router-dom";


function Navbar (){
    return(

   <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" to="/">Sera</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
     
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                     <Link className="nav-link"  to="/" >Ireo Sera</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/addProduct" >Hisera</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/recommanded" >Misy Mitady</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/addRecomanded" >Hitady Sera</Link>
                    </li>
                </ul>
              
            </div>
      
    </nav>
   
    )
}

export default Navbar
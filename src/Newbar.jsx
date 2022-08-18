
import PropTypes from "prop-types";

// import { Link } from "react-router-dom";

const Newbar=(props)=>{
    return(<>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}   `} style={{borderRadius:'20px'}} >
  <div className="container-fluid">
    <a className={`navbar-brand ${props.mode==='dark'?'light':'dark'}`} href="#/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className={`nav-link active ${props.mode==='dark'?'light':'dark'}`} aria-current="page" href="#/">Careers</a>
        </li>
       
        <li className="nav-item">
          <a className={`nav-link ${props.mode==='dark'?'light':'dark'}`} target="_blank" href="#/">Contact Us</a>
        </li>
        <li className="nav-item dropdown ">
          <a className={`nav-link dropdown-toggle ${props.mode==='dark'?'light':'dark'} `} href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item " href="#/">Food</a></li>
            <li><a className="dropdown-item" href="#/">Drinks</a></li>
            <li><a className="dropdown-item" href="#/">Books</a></li>
            <li><a className="dropdown-item" href="#/">Phone Now</a></li>
            <li><hr className="dropdown-divider"/></li>
          
          </ul>
        </li>
      
      </ul>

      <div className={`form-check form-switch  ${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input " type="checkbox" role="switch" id="abc" onClick={props.toggle} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  />
</div>
     
    </div>
  </div>
</nav>
    
    
    </>);
}
Newbar.propTypes = {
    title: PropTypes.string,
   
  }
export default Newbar;
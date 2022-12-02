import React from 'react'
import{Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="assets/img/icon-deal.png" alt="Icon" style={{width: "30px", height: "30px"}}/>
                    </div>
                    <h1 className="m-0 text-primary">Makaan</h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/About" className="nav-item nav-link">About</Link>
                        <div className="nav-item dropdown">
                            <Link to="/Property" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to ="/PropertyList" className="dropdown-item">Property List</Link>
                                <Link to = "/PropertyType" className="dropdown-item">Property Type</Link>
                                <Link to ="/PropertyAgent" className="dropdown-item">Property Agent</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="/Pages1" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to ="/Testimonial" className="dropdown-item">Testimonial</Link>
                                <Link to="/Error" className="dropdown-item">404 Error</Link>
                            </div>
                        </div>
                        <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <a href="" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar
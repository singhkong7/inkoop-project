import React from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import {AiOutlineMenu } from 'react-icons/ai';
import {BiSearchAlt2} from "react-icons/bi";
function Navbar() {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><AiOutlineMenu /></span>
        </button>
        <a className="navbar-brand" href="#"><h1>BookPod.</h1></a>
        <span><BiSearchAlt2/></span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"  id="nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><h3>Home</h3></a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><h3>Categories</h3></a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><h3>Podcasts</h3></a>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                 <button className="btn btn-outline-success" type="submit"><span><BiSearchAlt2/></span></button>
            </form>
        </div>
    </div>
</nav>
        </>
    )
}

export default Navbar

import { BrowserRouter,Link,Router,Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Posts from './Employees';

const Navbar = ()=>{
    return(
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Testing</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to ="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to ="/Posts" className="nav-link" >Post</Link>
                        </li>
                        <li className="nav-item">
                        <Link to ="/About" className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Posts" element={<Posts/>}></Route>
                    <Route path="/About" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navbar;
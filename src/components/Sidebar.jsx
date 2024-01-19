import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/Spotify_Logo.png"
import { Col, Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';






export function Sidebar() {
    const [search,setsearch] =useState("")
    const navigate = useNavigate();

    function handleSearch(){
        const searchUrl = `/artist/${search}`;
        navigate(searchUrl);
    }
    return (
        <Col className='col-2 '>
            <div className='fixed-left d-flex justify-content-between'>

                <div style={{paddingLeft:"3px"}}>
                    <Navbar className="">
                        <Container>
                            <Navbar.Brand href="/">
                                <img src={logo} alt="" style={{ width: "131px", height: "40px" }} />
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar href="/" className="colLink">
                        <Container>
                            
                                <Link to="/" >
                                    <FontAwesomeIcon icon={faHouse} />&nbsp;
                                    Home
                                </Link>
                            
                        </Container>
                    </Navbar>
                    
    
                    <Navbar className="colLink">
                        <Container>
                            
                                <Link to="/library">
                                    <FontAwesomeIcon icon={faBookOpen} />&nbsp;
                                    Your Library
                                </Link>
                            
                        </Container>
                    </Navbar>
                    <Navbar>
                        <Container>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    onChange={(e) => setsearch(e.target.value)}
                                    aria-label="Search"
                                    
                                />
                                <Button variant="outline-success" onClick={handleSearch}>GO</Button>
                            </Form>
                        </Container>
                    </Navbar>
                    <br />
                </div>
                <div className='bottoninav '>
                    <div>
                        <button className=" signup-btn" >Sign Up</button>
                        <button className=" login-btn" >Login</button>
                    </div>
                    <a href="#">Cookie Policy</a> |
                    <a href="#"> Privacy</a>
                </div>
            </div>
        </Col>
    )
}



{/* <div class="col-2">
            <nav
                class="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
                <div class="nav-container">
                    <a class="navbar-brand" href="index.html">
                        <img src={logo} alt="Spotify_Logo" style={{ width: "131px", height: "40px" }} />
                    </a>
                    <button 
                        class="navbar-toggler"
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                     >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <ul>
                                <li>
                                    <a class="nav-item nav-link" href="index.html"><i class="fas fa-home fa-lg"></i>&nbsp; Home
                                    </a>
                                </li>
                                <li>
                                    <a class="nav-item nav-link" href="#">
                                        <i class="fas fa-book-open fa-lg">
                                        </i>&nbsp;
                                        YourLibrary
                                    </a>
                                </li>
                                <li>
                                    <div class="input-group mt-3">
                                        <input
                                            type="text"
                                            class="form-control mb-2"
                                            id="searchField"
                                            placeholder="Search"
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                        />
                                        <div class="input-group-append" style={{ marginBottom: "4%" }}>
                                            <button class="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" >
                                                GO
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="nav-btn">
                    <button class="btn signup-btn" type="button">Sign Up</button>
                    <button class="btn login-btn" type="button">Login</button>
                    <a href="#">Cookie Policy</a> |
                    <a href="#"> Privacy</a>
                </div>
            </nav>
        </div> */}
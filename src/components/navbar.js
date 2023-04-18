import React from "react";
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsWhatsapp } from 'react-icons/bs';
import { HashLink as Link } from 'react-router-hash-link';
import Offcanvas from 'react-bootstrap/Offcanvas';
import $ from 'jquery'

const Navcomponent = () => {
    const hidenav = () => {
        document.body.style.overflow = 'visible';
        const check = document.querySelector('.offcanvas');
        check.style.opacity = 0
        check.style.zIndex = -1
    }
    useEffect(() => {
        // var backtoTop = document.getElementById("back-to-top");
        // window.addEventListener("scroll", function () {
        //     if (window.scrollY > 4100) {
        //         backtoTop.classList.add('active')
        //     }
        //     else {
        //         backtoTop.classList.remove('active')
        //     }
        //     backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
        // })

        $(".navbar-toggler").on("click", function () {
            $(".nav-item").toggleClass('animate');
            $(".iconone").toggleClass('active');
            $(".icontwo").toggleClass('active');
            $(".toggletwoicon").toggleClass('active');
            $(".togglefouricon").toggleClass('active');
        });

    }, []);
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/"><img src={'./assets/images/newLogo.png'} className="logomain" alt="logo" /></Navbar.Brand>
                        <Navbar.Brand href="/"><img src={'./assets/images/mainlogo2.png'} className="logomain1" alt="mainlogo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                            <span className="navbar-toggler-icon1"></span>
                            <span className="navbar-toggler-icon2"></span>
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <img src={'./assets/images/logo.png'} className="logomob" alt="logo" />
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="">
                                    <div className="container">
                                        <div className="float-start col-md-5 offset-md-1">
                                            <ul>
                                                <li>
                                                    <a onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        href="/"
                                                    ><span>HOME</span>
                                                    </a>
                                                    {/* <Link onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="/"
                                                    ><span>HOME</span>
                                                    </Link> */}
                                                </li>
                                                <li>
                                                    <Link onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="#ABOUT"
                                                    ><span>ABOUT</span>
                                                    </Link>
                                                </li>
                                                <li onClick={hidenav}>
                                                    <Link data-cursor-stick
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="#portfolio"
                                                    ><span>PORTFOLIO</span>
                                                    </Link>
                                                </li>
                                                <li onClick={hidenav}>
                                                    <Link data-cursor-stick
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="#news"
                                                    ><span>NEWS</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="#services"
                                                    ><span>CAREER</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={hidenav}
                                                        className="nav-link"
                                                        smooth={true}
                                                        to="#footer"
                                                    ><span>CONTACT</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            {/* <div className='navsocialmob'>
                                                <a href="https://www.facebook.com/constantineprandcommunications/" className="">Facebook</a>
                                                <a href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y=" className="">Instagram</a>
                                                <a href="https://www.linkedin.com/company/constantine-pr-communications/" className="">Linkedin</a>
                                            </div> */}
                                            <div className='navsocial'>
                                                <a href="https://www.facebook.com/CenturyTown" className="">Facebook</a>
                                                <a href="https://www.instagram.com/centurytown/" className="">Instagram</a>
                                                {/* <a href="" className="">Twitter</a> */}
                                                <a href="https://www.linkedin.com/company/88015852/admin/" className="">Linkedin</a>
                                            </div>
                                        </div>
                                        <div className="float-end mobnavsocialicon col-md-5 offset-md-1">
                                            <div className="c"><a href="">centurytown.com.pk</a></div>
                                            <p>La ristorazione è la nostra passione e il nostro DNA. Grazie ad uno spirito artigiano e un know-how industriale, sappiamo costruire il vostro impianto completo</p>
                                        </div>
                                    </div>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Navcomponent;
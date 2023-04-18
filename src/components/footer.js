import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Nav, Navbar } from "react-bootstrap";
import Pdf from '../../src/Century Town - Business Catalogue.pdf';
import Pdfplan from '../../src/Payment Plan.pdf';

const Footer = () => {
  return (
    <>
      <Navbar className="footernavbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={"./assets/images/mainlogo2.png"} className="logofooter" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <section id="footer" className="">
        <div className="container-fluid footercontent">
          {/* <h1 className='talk'>Let's Talk.</h1> */}
          <div className="row">
            <div className="col-md-2 offset-md-1">
              <div className="gridview gridview1">
                <h4>About Us</h4>
                <div className="footerlinks mar20">
                  <Link className="nav-link" to= "/who-we-are">
                  Who We Are
                  </Link>
                  <a href="" className="nav-link">
                    Contact Us
                  </a>
                  <a href="" className="nav-link">
                    We Care
                  </a>
                  <a href="" className="nav-link">
                    FAQ
                  </a>
                  <a href="" className="nav-link">
                    Career
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="gridview gridview1">
                <h4>Catalogue</h4>
                <div className="footerlinks mar20">
                {/* <Link className="nav-link" to="/profile">
                    Profile
                  </Link> */}
                  {/* <a href = {Pdf} target = "_blank" className="nav-link">Profile</a> */}
                  {/* <a href = {Pdfplan} target = "_blank" className="nav-link">Payment Plan</a> */}
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="gridview gridview1">
                <h4>Communities</h4>
                <div className="footerlinks mar20">
                  <a href="" className="nav-link">
                    Century Town
                  </a>
                  {/* <a href="" className="nav-link">Bahria Town</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row emailrow">
            <div className="col-md-5 offset-md-7">
              <div className="gridview gridview1">
                <p>
                  Sign up to receive exclusive news and offers about the latest
                  launches
                </p>
                <div className="footerlinks">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="ENTER YOUR EMAIL"
                        className="inputemail"
                      />
                      <Button type="submit" className="sbmitbtn">
                        SUBSCRIBE
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="copywrightfooter">
        <div className="row bottomnav">
          <div className="col-md-4">
            <div className="termscondition">
              <a href="" className="">
                Privacy Policy
              </a>
              {/* <a href="" className="pad20">terms-and-condition
                Terms & Conditions
              </a> */}
              <Link className="pad20" to="/terms-and-condition">
              Terms & Conditions
                  </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sociallink">
              <a href="https://www.facebook.com/CenturyTown" className="">
                Facebook
              </a>
              <a
                href="https://www.instagram.com/centurytown/"
                className="pad20"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/88015852/admin/"
                className="pad20"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="copywright">All Rights Reserved - © 2023</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

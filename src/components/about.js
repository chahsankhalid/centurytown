import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "aos/dist/aos.css";
import { gsap, Elastic } from "gsap";
import SplitType from 'split-type';
import SplitText from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OwlCarousel from 'react-owl-carousel';
import { BsPlay } from 'react-icons/bs';
import { GiCrossedBones } from 'react-icons/gi';
gsap.registerPlugin(ScrollTrigger);


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <Button className="closebtn" onClick={props.onHide}><GiCrossedBones /></Button>
                    </Modal.Title>
                </Modal.Header>
                <video autoPlay loop playsInline controls className="back-video" id="backVideo">
                    <source src={'./assets/videos/landing.mp4'} type="video/mp4" />
                </video>
            </Modal.Body>
        </Modal>
    );
}
const About = () => {
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        let split = SplitText.create(".deeptext", { type: "charsdeep,words" });
        const ceotextreveal = new SplitType('.ceotext')
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#ABOUT',
                toggleActions: "restart none restart reset"
            }
        });

        tl.set('#ABOUT', { autoAlpha: 1 });
        // tl.from(split.chars, {
        //     opacity: 0,
        //     duration: 0.5,
        //     stagger: 0.01
        // });
        tl.to(ceotextreveal.chars,{
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1
        })
    }, [])

    return (
        <>

            <section id="ABOUT">
                <div className="container Row">
                    <div className="ceo-heading Column">
                        <div className="ceo-headingchild">
                            <h2 className="ceotext deeptext">Interview of</h2>
                            <h2 className="ceotext deeptext">the <span className="offwhite">Project’s</span></h2>
                            <h2 className="ceotext deeptext"><span className="offwhite">Chairman</span></h2>
                            <hr className="underline" />
                        </div>
                    </div>
                    <div className="ceoimg Column">
                        <div className='reveal'>
                            {/* <img className="ceo-img" src={'./assets/images/Aoun.png'} alt="" /> */}
                        </div>
                        <Button variant="primary" className="playbtn" onClick={() => setModalShow(true)}>
                            <BsPlay />
                        </Button>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                    <div className="ceo-content Column">
                        <p>Led by the region’s top town planners, architects, and engineers, Century Town aims to combine architectural heritage with the wonders of nature. Our aim is to level up the living standard of Pakistan’s middle class.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
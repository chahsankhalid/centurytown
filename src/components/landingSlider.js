
import React, { useEffect } from 'react';
import MouseFollower from "mouse-follower";
import SplitType from 'split-type'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import $ from 'jquery'
gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);
const Landing = () => {

    useEffect(() => {
        const yourHome = new SplitType('.yourhome')
        gsap.to(yourHome.chars,{
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1
        })
        // $(window).on('scroll', function () {
        //     var iframe = document.querySelector('back-video');
        //     if ($(this).scrollTop() > 900) {
        //         iframe.unmuted()
        //     } else {
        //         iframe.muted()
        //     }
        // });
    }, [])
    return (
        <>
            <section id="landingsection">
                <video autoPlay loop playsInline muted className="back-video" id="backVideo">
                    <source src={'./assets/videos/landing.mp4'} type="video/mp4" />
                </video>
                <div className='landingcontent'>
                {/* <h1 className='yourhome'>Your Home</h1> */}
                {/* <p>For centuries to come…</p> */}
                {/* <p>Experience Life at its Finest!</p>
                <p>Serene | Comforting | Nurturing | Contemporary | Safe</p> */}
                </div>
                {/* <p>La ristorazione è la nostra passione e il nostro DNA. Grazie ad uno spirito artigiano e un know-how industriale, sappiamo costruire il vostro impianto completo, dal piccolo locale alla grande distribuzione.</p> */}
            </section>
        </>
    )
}
export default Landing  
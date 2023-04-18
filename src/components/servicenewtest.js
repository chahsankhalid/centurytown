import React, { useEffect } from 'react';
import SplitText from 'split-type';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
gsap.registerPlugin(ScrollTrigger);


const Services = () => {
    useEffect(() => {
        let split = SplitText.create(".exteriortext", { type: "charsdeep,words" });
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#portfolio',
                toggleActions: "restart none restart reset"
            }
        });

        tl.set('#portfolio', { autoAlpha: 1 });
        tl.from(split.chars, {
            opacity: 0,
            duration: 0.5,
            stagger: 0.01
        });
        // ScrollTrigger.create({
        //     trigger: '#services',
        //     start: 'top 20%',
        //     // end: 'top center',
        //     markers: false,
        //     scrub: 1,
        //     onEnter: () => {
        //         console.log('onEnter')
        //         gsap.from(split.chars, {
        //             autoAlpha: 0,
        //             opacity: 0,
        //             duration: 0.5,
        //             stagger: 0.01
        //         });
        //     },
        // })
        AOS.init();
    }, [])

    return (
        <>
            <section id="portfolio">
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-md-6 padleftnone'>
                            <div className='outer-wrapper'>
                                <div className='infrastructure-left'>
                                    <div className='reveal'>
                                        <img className="infrastructureimg" src={'./assets/images/infrastructure.png'} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='infrastructure-content'>
                                <h5 className='exteriortext'>PLANNED FOR CENTURIES</h5>
                                <h2 className='exteriortext'>Deep, Luxurious</h2>
                                <h2 className='exteriortext'>Finishes Unveil</h2>
                                <h2 className='exteriortext'>The Cool Sprint</h2>
                                <h2 className='exteriortext'><span className='apocfont'>of</span> Evening. AN</h2>
                                <h2 className='exteriortext'><span className='lightbrown'>ENCHANTING</span></h2>
                                <h2 className='exteriortext'><span className='lightbrown'>RETREAT INTO<span className='apocfont'>&nbsp;&nbsp;  The</span></span></h2>
                                <h2 className='exteriortext'>RITUALS OF THE</h2>
                                <h2 className='exteriortext'>NIGHT.</h2>
                                {/* <h2 className='exteriortext'>NIGHT.</h2> */}
                                <p>Decently equipped with contemporary amenities<br />
                                    and luxuries of a world-class lifestyle, Century Town has been planned<br />
                                    not just for your affluent lifestyle, but for your generations.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <div className='infrastructure-content'>
                                <h5 className='exteriortext'>LUXURIOUS YET AFFORDABLE</h5>
                                <h2 className='exteriortext'>AN ATMOSPHERE</h2>
                                <h2 className='exteriortext'>THAT COMBINES</h2>
                                <h2 className='exteriortext'>NATURE'S BEAUTY</h2>
                                <h2 className='exteriortext'><span className='apocfont'>With</span><span className='lightbrown'>ASTOUNDING</span></h2>
                                <h2 className='exteriortext'>ARCHITECTURAL</h2>
                                <h2 className='exteriortext'>MARVELS <span className='lightbrown'> A PLACE</span></h2>
                                <h2 className='exteriortext'><span className='lightbrown'>YOU CAN TRULY</span></h2>
                                <h2 className='exteriortext'><span className='lightbrown'>CALL HOME!</span></h2>
                                <p>Decently equipped with contemporary amenities<br />
                                    and luxuries of a world-class lifestyle, Century Town has been planned<br />
                                    not just for your affluent lifestyle, but for your generations.</p>
                            </div>
                        </div>
                        <div className='col-md-6 padrightnone'>
                            <div className='outer-wrapper'>
                                <div className='infrastructure-left'>
                                    <div className='reveal'>
                                        <img className="infrastructureimg" src={'./assets/images/Image.png'} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
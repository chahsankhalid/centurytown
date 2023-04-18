import React, { useEffect } from 'react';
import SplitType from 'split-type'
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Aboutmore = () => {
    useEffect(() => {
        let revealContainers = document.querySelectorAll(".reveal");
        let revealtext = document.querySelectorAll(".textheritage");
        const textheritagereveal = new SplitType('.textheritage')

        revealContainers.forEach((container) => {
            let image = container.querySelector("img");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "restart none restart reset"
                }
            });

            let tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: revealtext,
                    toggleActions: "restart none none reset"
                }
            });

            tl1.to(textheritagereveal.chars,{
                y: 0,
                stagger: 0.05,
                delay: 0.2,
                duration: 0.1
            })
            tl.set(container, { autoAlpha: 1 });
            tl.from(container, 1.5, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });

        // heritageContent.forEach((heritageContentcontainer) => {
        //     let split = SplitText.create(".textheritage", { type: "chars,words" });
        //     let heading = heritageContentcontainer.querySelector("h1");

        //     let tl1 = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: heritageContentcontainer,
        //             toggleActions: "restart none restart reset"
        //         }
        //     });
        //     tl1.from(split.chars, {
        //         opacity: 0,
        //         duration: 0.5,
        //         stagger: 0.01
        //     });
        // });

        // let splitcentury = SplitText.create(".my-text", { type: "charsdeep,words" });
        // const text = new SplitType('.my-text');
        //   ScrollTrigger.create({
        //     trigger: '#Historyimgs',
        //     start: 'top top',
        //     // end: 'top center',
        //     // end: "bottom 99%",
        //     markers: false,
        //     scrub: 1,
        //     onEnter: () => {
        //         gsap.from(splitcentury.chars, {
        //             opacity: 0,
        //             duration: 1,
        //             stagger: 0.01
        //         });
        //     },
        // })
    }, [])
    return (
        <>
            {/* <section id='History'>
                <div className='leftarrowbtn circleouter'>
                    <BsArrowLeft />
                </div>
                <h4><span className='lightbrown'>History</span> Belongs to us!</h4>
                <div className='rightarrowbtn circleouter'>
                    <BsArrowRight />
                </div>
            </section> */}
            <section id="Historyimgs">
                <div className='verticaltext'>
                    <p>CENTURY TOWN</p>
                </div>
                <div className='container imgrevealcontainer'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className='heritagecontent'>
                                <h1 className='textheritage'>Heritage</h1>
                                <h1 className='textheritage lightbrown'>& Modernity</h1>
                                <h1 className='textheritage'>Combined</h1>
                                <p>Located in a swiftly developing region of the twin cities, Century Town aims to combine undulating topography with the finest architecture.</p>
                            </div>
                        </div>
                        <div className='col-md-4 offset-md-1'>
                            <div className='reveal'>
                                <img src={'./assets/images/heritage1.png'} className="historyimg1" />
                            </div>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 forcenturyparentdiv'>
                            <div className='reveal'>
                                <img src={'./assets/images/history1.png'} className="historyimg1" />
                            </div>
                            <p>A place where heritage, modernity, nature, and technical expertise are merged to develop a marvel of modern living.</p>
                        </div>
                        <div className='col-md-4 righthistoryimg offset-md-3'>
                            <div className='reveal'>
                                <img src={'./assets/images/history3.png'} className="historyimg1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

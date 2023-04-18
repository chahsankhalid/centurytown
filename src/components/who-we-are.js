import React,{useEffect} from "react";
import Navcomponent from "./navbar";
import Footer from "./footer";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const Whoweare = () => {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            smoothTouch: 0.1,
            effects: true,
        });
    }, [])
  return (
    <>
      <div className="smooth-wrapper" id="smooth-wrapper">
        <div id="smooth-content">
          <Navcomponent />
          <section id="whoweare"></section>
          <section id="whowearecontent">
            <div className="container whowearecontainer">
              <div className="row">
                <div className="col-md-8">
                  <div className="heritagecontent">
                    <h1 className="textheritage lightbrown">Who</h1>
                    <h1 className="textheritage">We Are</h1>
                    <hr className="borderline" />
                    <p className="whowearepara">
                      Century Developer is one of the world’s most valuable and
                      admired real estate development companies. With proven
                      competencies in properties, shopping malls & retail and
                      hospitality & leisure, Century Town shapes new lifestyles
                      with a focus on design excellence, build quality and
                      timely delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row directorsrow">
                <div className="col-md-5">
                  <div className="heritagecontent">
                    <h1 className="textheritage boardofd">
                      <span className="lightbrown">Board of</span> Directors
                    </h1>
                    <p className="whowearepara">
                      Century Town’s leadership team is comprised of the
                      industry's most experienced leaders, who have secured our
                      place as one of the world's greatest real estate and
                      lifestyle developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

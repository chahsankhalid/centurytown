import React,{useEffect} from "react";
import Navcomponent from "./navbar";
import Footer from "./footer";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const Termsandcondition = () => {
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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heritagecontent terms-condition">
                  <h1 className="textheritage lightbrown">Acceptance of the</h1>
                  <h1 className="textheritage">Terms of Use</h1>
                  <hr className="borderline borderlineterms" />
                </div>
                <ol className="termsli">
                  <li>
                    The applicant is required to get a booking form/application
                    for Century Town, a project of Vadi Developers from
                    registered offices by depositing cash PKR. 2000/=
                    (non-refundable). No processing fee will be charged.
                  </li>
                  <br></br>
                  <li>
                    This booking form can be used for booking only one
                    plot/file.
                  </li>
                  <br></br>
                  <li>
                    The applicant shall submit the duly filled form with his/her
                    signature and thumb impression with a copy of his/her CNIC
                    or passport, contact details, and two passport-size
                    photographs.
                  </li>
                  <br></br>
                  <li>
                    All payments are to be made according to the category/size
                    of the plot as per the schedule of payments through bank
                    draft/pay order in favor of Century Town (Pvt) Ltd.
                  </li>
                  <br></br>
                  <li>
                    Nothing in this application form prejudices the right of
                    Century Town (Pvt) Ltd. to improve/increase/change or modify
                    the condition above for the ultimate betterment of the
                    project/scheme.
                  </li>
                  <br></br>
                  <li>
                    A surcharge of 0.05% per day will be imposed for
                    Installments received after the due date. Failure to submit
                    two (2) consecutive installments within the prescribed
                    period can lead to the blockage of the file. Century Town
                    (Pvt) Ltd. reserves the right to block/hold the file and
                    allotment to be canceled forthwith.
                  </li>
                  <br></br>
                  <li>
                    In case of blockage/cancellation of the file, the amount
                    deposited may be refunded with a 20% deduction of the total
                    cost of the plot. The refund will be made with postdated
                    cheque without any profit, interest, or markup.
                  </li>
                  <br></br>
                  <li>
                    The Corner, Park facing / Special category, and Main
                    boulevard plots will have 10% extra charges for each
                    category. Century Town (Pvt) Ltd. reserves the right to
                    change the extra charges by issuing 1 month’s notice.
                  </li>
                  <br></br>
                  <li>
                    The discount (if any), formally announced by the
                    company/scheme will be made available to the relevant
                    applicant only and accordingly adjusted in the payment plan
                    against the property.
                  </li>
                  <br></br>
                  <li>
                    A file/plot once sold/allotted or transferred by Century
                    Town (Pvt) Ltd. cannot be surrendered or applied for
                    cancellation. However, in case the allotment is canceled on
                    grounds specified by the company or for any other reason of
                    whatsoever nature, the submitted payment will be refunded
                    with a 20% deduction from the total cost of the plot.
                  </li>
                  <br></br>
                  <li>
                    In case of the excess area with any plot, a proportionate
                    extra amount will be charged in addition to the total
                    amount. In case of less area of plot proportionate amount
                    will be adjusted accordingly.
                  </li>
                  <br></br>
                  <li>
                    A 10% rebate will be given to applicants making 100% payment
                    of the plot.
                  </li>
                  <br></br>
                  <li>
                    The construction elevation approved by Century Town (Pvt)
                    Ltd. can be constructed on the given plot. No further
                    construction or modification can be executed without
                    obtaining prior written approval from the management of
                    Century Town (Pvt) Ltd.
                  </li>
                  <br></br>
                  <li>
                    Century Town (Pvt) Ltd. reserves the right to make any
                    adjustments (without notice) in the master plan of the
                    project/block/plots due to architectural/structural or
                    engineering constraints.
                  </li>
                  <br></br>
                  <li>
                    The development charges include the charges for internal
                    development of roads, footpaths, main water supply, street
                    lights, sewerage, and other amenities but do not include the
                    cost of provision of electricity, sui-gas, telephone,
                    mosque, maintenance, transport system, etc. Provision of
                    utility connections and service charges shall be obtained
                    later.
                  </li>
                  <br></br>
                  <li>
                    The allottee shall be liable to pay escalation and other
                    charges and the rates specified by the company or imposed by
                    the government from time to time.
                  </li>
                  <br></br>
                  <li>
                    The Plot allotted to an applicant in Century Town shall not
                    be used for any other purpose other than the category
                    assigned or meant for.
                  </li>
                  <br></br>
                  <li>
                    In case of transfer of file/plot, the allottee shall be
                    bound to clear all dues till that time. The
                    transfer/registration/mutation charges shall also be borne
                    by the allottee along with other applicable government
                    taxes, fees, charges, costs, and expenses.
                  </li>
                  <br></br>
                  <li>
                    Transfer of file/plot is subject to the issuance of a No
                    Objection Certificate (NOC) by the Company.
                  </li>
                  <br></br>
                  <li>
                    Allottees of Century Town shall not obtain any kind of bank
                    loan/mortgage/pledge any plot allotted to him/her without
                    written approval/No Objection Certificate issued by the
                    competent authority of the Society.
                  </li>
                  <br></br>
                  <li>
                    Vadi Developers / Century Town (Pvt) Ltd. reserves the right
                    to allot/sell a canceled/blocked plot due to non-payment of
                    dues or for any reason whatsoever to any other applicant and
                    the ex-allottee shall have no right to such plot.
                  </li>
                  <br></br>
                  <li>
                    In case of any confusion or misunderstanding between the
                    parties, the decision of the management committee of Century
                    Town (Pvt) Ltd. shall be final.
                  </li>
                  <br></br>
                  <li>
                    The allottee shall enter into a maintenance and management
                    agreement with the society as soon as the Possession has
                    been announced by the Society, even if the possession is
                    taken over by the allottee or not. The monthly maintenance
                    will be charged/payable by the allottee after the possession
                    is declared.
                  </li>
                  <br></br>
                  <li>
                    The allottee shall at the time of taking possession of
                    Residential & commercial property sign an agreement with the
                    Society that the applicant/allottee will obtain NOC from the
                    Society before the commencement of any business activity on
                    commercial property.
                  </li>
                  <br></br>
                  <li>
                    For Commercial & Residential properties, the Company’s NOC
                    would be required before signing of lease/rent agreement
                    with a third party and the allottee will submit complete
                    particulars of the respective tenant/occupant as per
                    Company’s Rental/Lease Policy.
                  </li>
                  <br></br>
                  <li>
                    Every allottee shall be bound to abide by these terms and
                    conditions in addition to the by-laws, rules, and
                    regulations, governing allotment, possession, construction,
                    and transfer enforced from time to time by the scheme and
                    competent authorities.
                  </li>
                  <br></br>
                  <li>
                    The pre-launch prices are launched for investors only and
                    remain in force/applicable for a certain period. The Company
                    reserves the right to revise/change the prices from time to
                    time.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

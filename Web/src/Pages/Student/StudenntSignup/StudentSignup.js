import React, { useState } from "react";
import "./StudentSignup.css";
import Navbar from "../../../Components/General/Navbar/Navbar";

const StudentSignup = () => {
  const [search, setsearch] = useState();
  return <div className="u-body u-gradient u-xl-mode">

<>

<Navbar />
 
  <section
    className="u-align-center u-clearfix u-palette-1-base u-section-113"
    id="sec-aa48"
  >
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-align-left u-container-style u-layout-cell u-shape-rectangle u-size-33 u-layout-cell-1">
              <div className="u-container-layout u-container-layout-1">
                <img
                  className="u-image u-image-1"
                  src="images/favicon.png?rand=d5a2"
                  data-image-width={261}
                  data-image-height={50}
                />
              </div>
            </div>
            <div
              className="u-container-style u-layout-cell u-shape-rectangle u-size-27 u-white u-layout-cell-2"
              data-animation-name=""
              data-animation-duration={0}
              data-animation-delay={0}
              data-animation-direction=""
            >
              <div className="u-container-layout u-container-layout-2">
                <h1 className="u-align-center u-text u-text-1">
                  Student Sign-up
                </h1>
                {/* <h2 class="u-align-center u-text u-text-2">Contact Us</h2> */}
                <div className="u-align-left u-form u-form-1">
                  <form
                    action="https://forms.nicepagesrv.com/Form/Process"
                    className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form"
                    style={{ padding: 10 }}
                    source="email"
                    name="form"
                  >
                    <div className="u-form-group u-form-name">
                      <label
                        htmlFor="name-5a14"
                        className="u-form-control-hidden u-label"
                        wfd-invisible="true"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        id="name-5a14"
                        name="name"
                        className="u-input u-input-rectangle u-palette-1-light-3"
                        required=""
                        autofocus="autofocus"
                      />
                    </div>
                    <div className="u-form-group">
                      <label
                        htmlFor="text-18e9"
                        className="u-form-control-hidden u-label"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        id="text-18e9"
                        name="text"
                        className="u-input u-input-rectangle u-palette-1-light-3"
                        required="required"
                      />
                    </div>
                    <div className="u-form-email u-form-group">
                      <label
                        htmlFor="email-5a14"
                        className="u-form-control-hidden u-label"
                        wfd-invisible="true"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter a valid Google mail address"
                        id="email-5a14"
                        name="email"
                        className="u-input u-input-rectangle u-palette-1-light-3"
                        required=""
                      />
                    </div>
                    <div className="u-form-group">
                      <label
                        htmlFor="text-170c"
                        className="u-form-control-hidden u-label"
                      />
                      <input
                        type="text"
                        placeholder="Password"
                        id="text-170c"
                        name="text-1"
                        className="u-input u-input-rectangle u-palette-1-light-3"
                        required="required"
                      />
                    </div>
                    <div className="u-align-left u-form-group u-form-submit">
                      <a
                        href="#"
                        className="u-active-palette-1-base u-border-2 u-border-grey-75 u-btn u-btn-submit u-button-style u-custom-color-3 u-hover-custom-color-5 u-btn-1"
                      >
                        Submit
                      </a>
                      <input
                        type="submit"
                        defaultValue="submit"
                        className="u-form-control-hidden"
                        wfd-invisible="true"
                      />
                    </div>
                    <div
                      className="u-form-send-message u-form-send-success"
                      wfd-invisible="true"
                    >
                      {" "}
                      Thank you! Your message has been sent.{" "}
                    </div>
                    <div
                      className="u-form-send-error u-form-send-message"
                      wfd-invisible="true"
                    >
                      {" "}
                      Unable to send your message. Please fix errors then try
                      again.{" "}
                    </div>
                    <input
                      type="hidden"
                      defaultValue=""
                      name="recaptchaResponse"
                      wfd-invisible="true"
                    />
                    <input
                      type="hidden"
                      name="formServices"
                      defaultValue="e3f25556afb89dc421bcac31676d2a1c"
                    />
                  </form>
                </div>
                <a
                  href="https://nicepage.com/static-site-generator"
                  className="u-btn u-button-style u-white u-btn-2"
                >
                  <span className="u-file-icon u-icon">
                    <img src="images/300221.png" alt="" />
                  </span>
                  &nbsp;Sign-up With Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
 
</>


</div>;
};

export default StudentSignup;


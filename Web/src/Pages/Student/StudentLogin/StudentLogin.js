import React, { useState } from "react";
import "./StudentLogin.css";
import Navbar from "../../../Components/General/Navbar/Navbar";

const StudentLogin = () => {
  const [search, setsearch] = useState();
  return <div className="u-body u-gradient u-xl-mode">

<>

<Navbar/> 
  <section
    className="u-align-center u-clearfix u-palette-1-base u-section-112"
    id="carousel_f2a1"
  >
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-align-left u-container-style u-layout-cell u-shape-rectangle u-size-33-lg u-size-33-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
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
              className="u-align-center u-container-style u-layout-cell u-shape-rectangle u-size-27-lg u-size-27-xl u-size-60-md u-size-60-sm u-size-60-xs u-white u-layout-cell-2"
              data-animation-name=""
              data-animation-duration={0}
              data-animation-delay={0}
              data-animation-direction=""
            >
              <div className="u-border-2 u-border-custom-color-1 u-container-layout u-container-layout-2">
                <h1 className="u-text u-text-1">Login</h1>
                <div className="u-align-left u-form u-form-1">
                  <form
                    action="https://forms.nicepagesrv.com/Form/Process"
                    className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form"
                    style={{ padding: 0 }}
                    source="email"
                    name="form"
                  >
                    <div className="u-form-group u-form-name u-label-top">
                      <label htmlFor="name-5a14" className="u-label">
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="Enter email address"
                        id="name-5a14"
                        name="name"
                        className="u-input u-input-rectangle u-palette-1-light-3 u-input-1"
                        required=""
                      />
                    </div>
                    <div className="u-form-email u-form-group u-label-top">
                      <label htmlFor="email-5a14" className="u-label">
                        Password
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Password"
                        id="email-5a14"
                        name="Enter Password"
                        className="u-input u-input-rectangle u-palette-1-light-3 u-input-2"
                        required=""
                      />
                    </div>
                    <div className="u-align-right u-form-group u-form-submit u-label-top">
                      <a
                        href="#"
                        className="u-active-custom-color-5 u-border-none u-btn u-btn-submit u-button-style u-custom-color-3 u-hover-custom-color-5 u-text-active-white u-text-body-alt-color u-text-hover-white u-btn-1"
                      >
                        Submit
                      </a>
                      <input
                        type="submit"
                        defaultValue="submit"
                        className="u-form-control-hidden"
                      />
                    </div>
                    <div className="u-form-send-message u-form-send-success">
                      {" "}
                      Thank you! Your message has been sent.{" "}
                    </div>
                    <div className="u-form-send-error u-form-send-message">
                      {" "}
                      Unable to send your message. Please fix errors then try
                      again.{" "}
                    </div>
                    <input
                      type="hidden"
                      defaultValue=""
                      name="recaptchaResponse"
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
                  className="u-border-none u-btn u-button-style u-white u-btn-2"
                >
                  <span className="u-file-icon u-icon">
                    <img src="/images/300221.png" alt=""/>
                  </span>
                  &nbsp; &nbsp;Continue With Google
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

export default StudentLogin;
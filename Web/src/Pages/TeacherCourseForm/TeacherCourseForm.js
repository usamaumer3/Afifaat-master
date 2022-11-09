import React, { useState } from "react";
import "./TeacherCourseForm.css";
import Navbar from "../../Components/General/Navbar/Navbar";

const TeacherCourseForm = () => {
  const [search, setsearch] = useState();
  return <div className="u-body u-gradient u-xl-mode">

<>

<Navbar />
  <section
    className="u-clearfix u-image u-section-1 "
    id="carousel_b8d5"
    data-image-width={1980}
    data-image-height={1320}
  >
    <div className="u-clearfix u-sheet ">
      <div className="u-align-center u-container-style u-group u-radius-50 u-shape-round u-white u-group-1">
        <div className="u-container-layout u-container-layout-1 ">
          <h2 className="u-text u-text-default course-info-class d-flex justify-self-center text-center">Course Info</h2>
          <div className="u-align-left u-hover-feature u-social-icons u-spacing-47 u-social-icons-1">
            <a
              className="u-social-url"
              target="_blank"
              href="https://facebook.com/facebook.com"
            >
              <span className="u-icon u-icon-circle u-social-facebook u-social-icon u-text-custom-color-2 u-icon-1">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 112 112"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-85e5"
                  />
                </svg>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 112 112"
                  id="svg-85e5"
                  className="u-svg-content"
                >
                  <path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z" />
                </svg>
              </span>
            </a>
            <a
              className="u-social-url"
              target="_blank"
              href="https://twitter.com/twitter.com"
            >
              <span className="u-icon u-icon-circle u-social-icon u-social-twitter u-text-custom-color-2 u-icon-2">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 112 112"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-ab8e"
                  />
                </svg>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 112 112"
                  id="svg-ab8e"
                  className="u-svg-content"
                >
                  <path d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2 c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7 c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2 c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5 c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z" />
                </svg>
              </span>
            </a>
            <a
              className="u-social-url"
              target="_blank"
              href="https://linkedin.com/in/linkedin.com"
            >
              <span className="u-icon u-icon-circle u-social-icon u-social-linkedin u-text-custom-color-2 u-icon-3">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 112 112"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-d711"
                  />
                </svg>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 112 112"
                  id="svg-d711"
                  className="u-svg-content"
                >
                  <path d="M33.8,96.8H14.5v-58h19.3V96.8z M24.1,30.9L24.1,30.9c-6.6,0-10.8-4.5-10.8-10.1c0-5.8,4.3-10.1,10.9-10.1 S34.9,15,35.1,20.8C35.1,26.4,30.8,30.9,24.1,30.9z M103.3,96.8H84.1v-31c0-7.8-2.7-13.1-9.8-13.1c-5.3,0-8.5,3.6-9.9,7.1 c-0.6,1.3-0.6,3-0.6,4.8V97H44.5c0,0,0.3-52.6,0-58h19.3v8.2c2.6-3.9,7.2-9.6,17.4-9.6c12.7,0,22.2,8.4,22.2,26.1V96.8z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="u-border-2 u-border-custom-color-2 u-form ">
            <form
              action="https://forms.nicepagesrv.com/Form/Process"
              className="u-clearfix u-form-spacing-18 u-form-vertical u-inner-form d-flex justify-self-center"
              style={{ padding: 9 }}
              source="email"
              name="form"
            >
              <div className="u-form-group u-form-name u-label-top">
                <label
                  htmlFor="name-daf4"
                  className="u-label u-text-palette-1-dark-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Course Name"
                  id="name-daf4"
                  name="name"
                  className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-3-dark-2 u-input u-input-rectangle u-white"
                  required=""
                />
              </div>
              <div className="u-form-group u-form-select u-label-top u-form-group-2">
                <label
                  htmlFor="select-1281"
                  className="u-label u-text-palette-1-dark-1"
                >
                  Course Selection{" "}
                </label>
                <div className="u-form-select-wrapper">
                  <select
                    id="select-1281"
                    name="select"
                    className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-3-dark-2 u-input u-input-rectangle u-white"
                    required="required"
                  >
                    <option value="Item 1">Item 1</option>
                    <option value="Item 2">Item 2</option>
                    <option value="Item 3">Item 3</option>
                    <option value="item 4">item 4</option>
                    <option value="item 5">item 5</option>
                  </select>
                  <svg
                    className="u-caret u-caret-svg"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    style={{ fill: "currentColor" }}
                    xmlSpace="preserve"
                  >
                    <polygon className="st0" points="8,12 2,4 14,4 " />
                  </svg>
                </div>
              </div>
              <div className="u-form-group u-label-top u-form-group-3">
                <label
                  htmlFor="text-101f"
                  className="u-label u-text-palette-1-dark-1"
                >
                  Course Field
                </label>
                <input
                  type="text"
                  placeholder="Course Field "
                  id="text-101f"
                  name="text"
                  className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-3-dark-2 u-input u-input-rectangle u-white"
                  required="required"
                />
              </div>
              <div className="u-form-group u-label-top u-form-group-4">
                <label
                  htmlFor="text-dd94"
                  className="u-label u-text-palette-1-dark-1"
                >
                  Input
                </label>
                <input
                  type="text"
                  placeholder="Course Description"
                  id="text-dd94"
                  name="text-1"
                  className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-3-dark-2 u-input u-input-rectangle u-white"
                  required="required"
                  autofocus="autofocus"
                />
              </div>
              <div className="u-form-group u-form-select u-label-top u-form-group-5">
                <label
                  htmlFor="select-308a"
                  className="u-label u-text-palette-1-dark-1"
                >
                  Course Language
                </label>
                <div className="u-form-select-wrapper">
                  <select
                    id="select-308a"
                    name="select-1"
                    className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-3-dark-2 u-input u-input-rectangle u-white"
                  >
                    <option value="English">English</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Arabic">Arabic</option>
                  </select>
                  <svg
                    className="u-caret u-caret-svg"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    style={{ fill: "currentColor" }}
                    xmlSpace="preserve"
                  >
                    <polygon className="st0" points="8,12 2,4 14,4 " />
                  </svg>
                </div>
              </div>
              <div className="u-form-group u-label-top u-form-group-6">
                <label
                  htmlFor="text-a752"
                  className="u-label u-text-palette-1-dark-1"
                >
                  Course Image
                </label>
                <input
                  type="text"
                  placeholder="Image"
                  id="text-a752"
                  name="text-2"
                  className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-3-dark-2 u-input u-input-rectangle u-white"
                />
              </div>
              <div className="u-form-group u-label-top u-form-group-7">
                <label
                  htmlFor="text-bf8b"
                  className="u-label u-text-palette-1-dark-1"
                >
                  Course Introductory Video
                </label>
                <input
                  type="text"
                  placeholder="Introductory Video"
                  id="text-bf8b"
                  name="text-3"
                  className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-3-dark-2 u-input u-input-rectangle u-white"
                  required="required"
                />
              </div>
              <div className="u-form-group u-form-textarea u-label-top u-form-group-8">
                <label
                  htmlFor="textarea-778f"
                  className="u-label u-text-palette-1-dark-1"
                >
                  Course Outline
                </label>
                <textarea
                  rows={4}
                  cols={50}
                  id="textarea-778f"
                  name="textarea"
                  className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-3-dark-2 u-input u-input-rectangle u-white"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="u-form-agree u-form-group u-label-top u-form-group-9">
                <input
                  type="checkbox"
                  id="agree-f183"
                  name="agree"
                  className="u-agree-checkbox"
                  required=""
                />
                <label
                  htmlFor="agree-f183"
                  className="u-agree-label u-label u-text-palette-1-dark-1"
                >
                  I accept the <a href="#">Terms of Service</a>
                </label>
              </div>
              <div className="u-align-left u-form-group u-form-submit u-label-top">
                <a
                  href="#"
                  className="u-active-palette-5-dark-2 u-border-none u-btn u-btn-submit u-button-style u-hover-palette-5-dark-2 u-palette-2-base u-btn-1"
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
                Unable to send your message. Please fix errors then try again.{" "}
              </div>
              <input type="hidden" defaultValue="" name="recaptchaResponse" />
              <input
                type="hidden"
                name="formServices"
                defaultValue="e3f25556afb89dc421bcac31676d2a1c"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-white u-section-2" id="sec-744a">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-align-center u-container-style u-layout-cell u-left-cell u-size-15 u-size-30-md u-white u-layout-cell-1">
              <div className="u-container-layout u-valign-top u-container-layout-1">
                <h4 className="u-text u-text-1">Basic</h4>
                <h1 className="u-text u-text-2">$5</h1>
                <h5 className="u-text u-text-3">per month</h5>
                <p className="u-text u-text-4">
                  Sample text. <br />
                  Lorem ipsum dolor&nbsp; <br />
                  Amet, consectetur&nbsp;
                </p>
                <a
                  href="#"
                  className="u-border-radius-50 u-btn u-btn-round u-button-style u-palette-1-base u-btn-1"
                >
                  BUY NOW
                </a>
              </div>
            </div>
            <div className="u-align-center u-container-style u-layout-cell u-size-15 u-size-30-md u-white u-layout-cell-2">
              <div className="u-container-layout u-valign-top u-container-layout-2">
                <h4 className="u-text u-text-5">Personal</h4>
                <h1 className="u-text u-text-6">$15</h1>
                <h5 className="u-text u-text-7">per month</h5>
                <p className="u-text u-text-8">
                  Sample text. <br />
                  Lorem ipsum dolor&nbsp; <br />
                  Amet, consectetur&nbsp;
                </p>
                <a
                  href="#"
                  className="u-border-radius-50 u-btn u-btn-round u-button-style u-palette-1-base u-btn-2"
                >
                  BUY NOW
                </a>
              </div>
            </div>
            <div className="u-align-center u-container-style u-layout-cell u-palette-2-light-3 u-size-15 u-size-30-md u-layout-cell-3">
              <div className="u-container-layout u-valign-top u-container-layout-3">
                <h4 className="u-text u-text-9">Business</h4>
                <h1 className="u-text u-text-10">$45</h1>
                <h5 className="u-text u-text-11">per month</h5>
                <p className="u-text u-text-12">
                  Sample text. <br />
                  Lorem ipsum dolor&nbsp; <br />
                  Amet, consectetur&nbsp;
                </p>
                <a
                  href="#"
                  className="u-border-radius-50 u-btn u-btn-round u-button-style u-palette-2-base u-btn-3"
                >
                  BUY NOW
                </a>
              </div>
            </div>
            <div className="u-align-center u-container-style u-layout-cell u-right-cell u-size-15 u-size-30-md u-white u-layout-cell-4">
              <div className="u-container-layout u-valign-top u-container-layout-4">
                <h4 className="u-text u-text-13">Pro</h4>
                <h1 className="u-text u-text-14">$95</h1>
                <h5 className="u-text u-text-15">per month</h5>
                <p className="u-text u-text-16">
                  Sample text. <br />
                  Lorem ipsum dolor&nbsp; <br />
                  Amet, consectetur&nbsp;
                </p>
                <a
                  href="#"
                  className="u-border-radius-50 u-btn u-btn-round u-button-style u-palette-1-base u-btn-4"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
      <section
        className="u-clearfix u-palette-4-base u-section-12"
        id="sec-4577"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div
                  className="u-container-style u-layout-cell u-size-34-xl u-size-39-lg u-size-39-md u-size-39-sm u-size-39-xs u-layout-cell-1"
                  data-animation-name="customAnimationIn"
                  data-animation-duration={1500}
                  data-animation-delay={500}
                >
                  <div className="u-container-layout u-valign-middle-xl u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1">
                    <h2 className="u-text u-text-1">
                      {" "}
                      Start using{" "}  
                      <span style={{ fontWeight: 700 }}>Our App</span> for free
                    </h2>
                    <p className="u-text u-text-2">
                      {" "}
                      Access all Xero features for 30 days, then decide which
                      plan best suits your business.
                    </p>
                    <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1">
                      <form
                        action="https://forms.nicepagesrv.com/Form/Process"
                        className="u-clearfix u-form-horizontal u-form-spacing-13 u-inner-form"
                        source="email"
                        name="form"
                        style={{ padding: 0 }}
                      >
                        <div className="u-form-email u-form-group u-label-none">
                          <label
                            htmlFor="email-6564"
                            className="u-label u-label-1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter a valid email address"
                            id="email-6564"
                            name="email"
                            className="u-border-5 u-border-grey-5 u-grey-5 u-input u-input-rectangle u-radius-50"
                            required=""
                          />
                        </div>
                        <div className="u-align-left u-form-group u-form-submit u-label-none">
                          <a
                            href="#"
                            className="u-active-palette-1-dark-3 u-border-5 u-border-active-palette-1-dark-3 u-border-hover-palette-1-dark-3 u-border-palette-1-base u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-dark-3 u-palette-1-base u-radius-50 u-btn-1"
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
                          Unable to send your message. Please fix errors then
                          try again.{" "}
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
                    <p className="u-text u-text-3">
                      {" "}
                      Or{" "}
                      <a
                        href="https://nicepage.com/website-design"
                        className="u-active-none u-border-2 u-border-active-palette-4-light-1 u-border-hover-palette-4-light-1 u-border-no-left u-border-no-right u-border-no-top u-border-white u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-link u-button-style u-hover-none u-none u-radius-0 u-text-active-palette-4-light-1 u-text-body-alt-color u-text-hover-palette-4-light-1 u-top-left-radius-0 u-top-right-radius-0 u-btn-2"
                        target="_blank"
                      >
                        compare plans from $17 per month
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  className="u-align-left u-container-style u-layout-cell u-size-21-lg u-size-21-md u-size-21-sm u-size-21-xs u-size-26-xl u-layout-cell-2"
                  data-animation-name="customAnimationIn"
                  data-animation-duration={1500}
                  data-animation-delay={500}
                >
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <ul className="u-custom-list u-file-icon u-text u-text-default u-text-4">
                      <li style={{ paddingLeft: 10 }}>
                        <div className="u-list-icon u-text-white">
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 512 512"
                            id="svg-53bb"
                          >
                            <path
                              d="m433.1 67.1-231.8 231.9c-6.2 6.2-16.4 6.2-22.6 0l-99.8-99.8-78.9 78.8 150.5 150.5c10.5 10.5 24.6 16.3 39.4 16.3 14.8 0 29-5.9 39.4-16.3l282.7-282.5z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>{" "}
                        Safe and secure
                      </li>
                      <li style={{ paddingLeft: 10 }}>
                        <div className="u-list-icon u-text-white">
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 512 512"
                            id="svg-53bb"
                          >
                            <path
                              d="m433.1 67.1-231.8 231.9c-6.2 6.2-16.4 6.2-22.6 0l-99.8-99.8-78.9 78.8 150.5 150.5c10.5 10.5 24.6 16.3 39.4 16.3 14.8 0 29-5.9 39.4-16.3l282.7-282.5z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        Cancel any time
                      </li>
                      <li style={{ paddingLeft: 10 }}>
                        <div className="u-list-icon u-text-white">
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 512 512"
                            id="svg-53bb"
                          >
                            <path
                              d="m433.1 67.1-231.8 231.9c-6.2 6.2-16.4 6.2-22.6 0l-99.8-99.8-78.9 78.8 150.5 150.5c10.5 10.5 24.6 16.3 39.4 16.3 14.8 0 29-5.9 39.4-16.3l282.7-282.5z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        24/7 online support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </footer> 

  {/* <footer className="u-clearfix u-footer" id="sec-b1d3">
    <div className="u-clearfix u-sheet u-sheet-1">
      <a
        href="https://nicepage.com"
        className="u-image u-logo u-image-1"
        data-image-width={261}
        data-image-height={50}
      >
        <img
          src="images/favicon.png?rand=299f"
          className="u-logo-image u-logo-image-1"
        />
      </a>
      <div className="u-align-left u-border-1 u-border-white u-expanded-width u-line u-line-horizontal u-opacity u-opacity-30 u-line-1" />
      <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-row">
            <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-15 u-size-30-md u-layout-cell-1">
              <div className="u-container-layout u-valign-top u-container-layout-1">
        
                <div data-position="" className="u-position">
        
                  <div className="u-block">
                    <div className="u-block-container u-clearfix">
        
                      <h5 className="u-block-header u-text">
         Block header{" "}
         
                      </h5>
                      <div className="u-block-content u-text">
                        Block content. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit nullam nunc
                        justo sagittis suscipit ultrices.{" "}
         
                      </div>
                     
                    </div>
                  </div>
                 
                </div>
               
              </div>
            </div>
            <div className="u-align-left u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-2">
              <div className="u-container-layout u-valign-top u-container-layout-2">
               
                <div data-position="" className="u-position">
               
                  <div className="u-block">
                    <div className="u-block-container u-clearfix">
               
                      <h5 className="u-block-header u-text">
                         Block header{" "}
                                             </h5>
                      <div className="u-block-content u-text">
                      Block content. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit nullam nunc
                        justo sagittis suscipit ultrices.{" "}
                     
                      </div>
                     
                    </div>
                  </div>
                 
                </div>
               
              </div>
            </div>
            <div className="u-align-left u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-3">
              <div className="u-container-layout u-valign-top u-container-layout-3">
               
                <div data-position="" className="u-position">
               
                  <div className="u-block">
                    <div className="u-block-container u-clearfix">
                     
                      <h5 className="u-block-header u-text">
                      Block header{" "}
                     
                      </h5>
                      <div className="u-block-content u-text">
                        Block content. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit nullam nunc
                        justo sagittis suscipit ultrices.{" "}
                       
                      </div>
                      </div>
                  </div>
                 
                </div>
               
              </div>
            </div>
            <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-15 u-size-30-md u-layout-cell-4">
              <div className="u-container-layout u-valign-top u-container-layout-4">
               
                <div data-position="" className="u-position">
                  
                  <div className="u-block">
                    <div className="u-block-container u-clearfix">
                     
                      <h5 className="u-block-header u-text">
                   Block header{" "}
                      </h5>
                      <div className="u-block-content u-text">
                        Block content. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit nullam nunc
                        justo sagittis suscipit ultrices.{" "}
                  
                      </div>
                  
                    </div>
                  </div>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer> */}
  {/* <section className="u-backlink u-clearfix u-grey-80">
    <a
      className="u-link"
      href="https://nicepage.com/website-templates"
      target="_blank"
    >
      <span>Website Templates</span>
    </a>
    <p className="u-text">
      <span>created with</span>
    </p>
    <a className="u-link" href="" target="_blank">
      <span>Website Builder Software</span>
    </a>
    .
  </section> */}
</>




  </div>;
};

export default TeacherCourseForm;

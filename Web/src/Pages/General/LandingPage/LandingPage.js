import React from "react";
import Navbar from "../../../Components/General/Navbar/Navbar";
import Section1 from "../../../Components/General/Jumbotron/Jumbotron";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="u-body u-gradient u-xl-mode">
      <Navbar />
      <section className="u-align-center u-clearfix u-section-1" id="sec-08a1">
        <div
          className="u-carousel u-carousel-duration-1500 u-expanded-width u-gallery u-gallery-slider u-layout-carousel u-lightbox u-no-transition u-show-text-on-hover u-gallery-1"
          id="carousel-e131"
          data-interval={5000}
          data-u-ride="carousel"
        >
          <div className="u-carousel-inner u-gallery-inner" role="listbox">
            <div className="u-active u-carousel-item u-effect-fade u-gallery-item u-carousel-item-1">
              <div
                className="u-back-slide"
                data-image-width={1920}
                data-image-height={1080}
              >
                <img
                  className="u-back-image u-expanded"
                  src="images/51364.jpg"
                />
              </div>
              <div className="u-align-center u-over-slide u-shading u-valign-bottom u-over-slide-1">
                <h3 className="u-gallery-heading">Sample Title</h3>
                <p className="u-gallery-text">Sample Text</p>
              </div>
            </div>
            <div
              className="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-2"
              data-image-width={2836}
              data-image-height={1875}
            >
              <div
                className="u-back-slide"
                data-image-width={1969}
                data-image-height={1200}
              >
                <img
                  className="u-back-image u-expanded"
                  src="images/513831.png"
                />
              </div>
              <div className="u-align-center u-over-slide u-shading u-valign-bottom u-over-slide-2">
                <h3 className="u-gallery-heading">Sample Title</h3>
                <p className="u-gallery-text">Sample Text</p>
              </div>
            </div>
            <div className="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-3">
              <div
                className="u-back-slide"
                data-image-width={728}
                data-image-height={485}
              >
                <img
                  className="u-back-image u-expanded"
                  src="images/katherine-langford-pc-desktop-hd-wallpaper-preview.jpg"
                />
              </div>
              <div className="u-align-center u-over-slide u-shading u-valign-bottom u-over-slide-3">
                <h3 className="u-gallery-heading">Sample Title</h3>
                <p className="u-gallery-text">Sample Text</p>
              </div>
            </div>
          </div>
          <a
            className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-custom-color-2 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-body-alt-color u-carousel-control-1"
            href="#carousel-e131"
            role="button"
            data-u-slide="prev"
          >
            <span aria-hidden="true">
              <svg viewBox="0 0 451.847 451.847">
                <path
                  d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
                />
              </svg>
            </span>
            <span className="sr-only">
              <svg viewBox="0 0 451.847 451.847">
                <path
                  d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
                />
              </svg>
            </span>
          </a>
          <a
            className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-custom-color-2 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-body-alt-color u-carousel-control-2"
            href="#carousel-e131"
            role="button"
            data-u-slide="next"
          >
            <span aria-hidden="true">
              <svg viewBox="0 0 451.846 451.847">
                <path
                  d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                />
              </svg>
            </span>
            <span className="sr-only">
              <svg viewBox="0 0 451.846 451.847">
                <path
                  d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>



      <section class="u-align-center u-clearfix u-section-3" id="sec-3412">
        <div class="u-clearfix u-sheet u-sheet-1">
          <h2 class="u-text u-text-default u-text-1">Our Courses</h2>
          <div class="u-expanded-width u-layout-horizontal u-list u-list-1">
            <div class="u-repeater u-repeater-1">
              <div
                class="u-container-style u-custom-item u-hover-feature u-image u-image-round u-list-item u-radius-25 u-repeater-item u-image-1"
                data-image-width="265"
                data-image-height="195"
              >
                <div class="u-container-layout u-similar-container u-container-layout-1"></div>
              </div>
              <div
                class="u-container-style u-custom-item u-hover-feature u-image u-image-round u-list-item u-radius-25 u-repeater-item u-image-2"
                data-image-width="265"
                data-image-height="195"
              >
                <div class="u-container-layout u-similar-container u-container-layout-2"></div>
              </div>
              <div
                class="u-container-style u-custom-item u-hover-feature u-image u-image-round u-list-item u-radius-25 u-repeater-item u-image-3"
                data-image-width="265"
                data-image-height="195"
              >
                <div class="u-container-layout u-similar-container u-container-layout-3"></div>
              </div>
              <div
                class="u-container-style u-custom-item u-hover-feature u-image u-image-round u-list-item u-radius-25 u-repeater-item u-image-4"
                data-image-width="265"
                data-image-height="195"
              >
                <div class="u-container-layout u-similar-container u-container-layout-4"></div>
              </div>
              <div
                class="u-container-style u-custom-item u-hover-feature u-image u-image-round u-list-item u-radius-25 u-repeater-item u-image-5"
                data-image-width="265"
                data-image-height="195"
              >
                <div class="u-container-layout u-similar-container u-container-layout-5"></div>
              </div>
              <div
                class="u-container-style u-custom-item u-hover-feature u-image u-image-round u-list-item u-radius-25 u-repeater-item u-image-6"
                data-image-width="265"
                data-image-height="195"
              >
                <div class="u-container-layout u-similar-container u-container-layout-6"></div>
              </div>
            </div>
            <a
              class="u-absolute-vcenter u-gallery-nav u-gallery-nav-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-gallery-nav-1"
              href="#"
              role="button"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 451.847 451.847">
                  <path
                    d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
                  ></path>
                </svg>
              </span>
              <span class="sr-only">
                <svg viewBox="0 0 451.847 451.847">
                  <path
                    d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              class="u-absolute-vcenter u-gallery-nav u-gallery-nav-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-gallery-nav-2"
              href="#"
              role="button"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 451.846 451.847">
                  <path
                    d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                  ></path>
                </svg>
              </span>
              <span class="sr-only">
                <svg viewBox="0 0 451.846 451.847">
                  <path
                    d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="u-align-center u-clearfix u-section-4"
        id="carousel_2511"
      >
        <h2
          className="u-custom-font u-font-montserrat u-text u-text-default u-text-1"
          data-animation-name="customAnimationIn"
          data-animation-duration={1000}
          data-animation-delay={500}
          data-animation-direction=""
        >
          Meet The Team{" "}
          <span className="u-text-palette-4-base">
            <br />
            <span className="u-text-custom-color-2">Our ​Professionals</span>
          </span>
        </h2>
        <div className="u-expanded-width-lg u-expanded-width-xl u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            <div
              className="u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-1"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={0}
            >
              <div className="u-container-layout u-similar-container u-container-layout-1">
                <img
                  alt=""
                  className="u-image u-image-round u-radius-20 u-image-1"
                  data-image-width={404}
                  data-image-height={404}
                  src="images/2.jpg"
                  data-animation-name="customAnimationIn"
                  data-animation-duration={1500}
                  data-animation-delay={500}
                />
                <h4 className="u-align-center u-text u-text-2">mary Brown</h4>
                <p className="u-align-center u-hover-feature u-text u-text-custom-color-1 u-text-3">
                  creative leader
                </p>
                <p className="u-align-center u-text u-text-4">
                  Glavi amet ritnisl libero molestie ante ut fringilla purus
                  eros quis glavrid from dolor amet iquam lorem bibendum
                </p>
              </div>
            </div>
            <div
              className="u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-2"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={0}
            >
              <div className="u-container-layout u-similar-container u-container-layout-2">
                <img
                  alt=""
                  className="u-image u-image-round u-radius-20 u-image-2"
                  src="images/fff.jpg"
                  data-image-width={404}
                  data-image-height={404}
                  data-animation-name="customAnimationIn"
                  data-animation-duration={1500}
                  data-animation-delay={500}
                />
                <h4 className="u-align-center u-text u-text-5">Ann Richmond</h4>
                <p className="u-align-center u-hover-feature u-text u-text-custom-color-1 u-text-6">
                  creative leader
                </p>
                <p className="u-align-center u-text u-text-7">
                  Glavi amet ritnisl libero molestie ante ut fringilla purus
                  eros quis glavrid from dolor amet iquam lorem bibendum
                </p>
              </div>
            </div>
            <div
              className="u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={0}
            >
              <div className="u-container-layout u-similar-container u-container-layout-3">
                <img
                  alt=""
                  className="u-image u-image-round u-radius-20 u-image-3"
                  src="images/fggf.jpg"
                  data-image-width={404}
                  data-image-height={404}
                  data-animation-name="customAnimationIn"
                  data-animation-duration={1500}
                  data-animation-delay={500}
                />
                <h4 className="u-align-center u-text u-text-8">
                  Bob Greenfield
                </h4>
                <p className="u-align-center u-hover-feature u-text u-text-custom-color-1 u-text-9">
                  programming guru
                </p>
                <p className="u-align-center u-text u-text-10">
                  Glavi amet ritnisl libero molestie ante ut fringilla purus
                  eros quis glavrid from dolor amet iquam lorem bibendum
                </p>
              </div>
            </div>
            <div
              className="u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-4"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={0}
            >
              <div className="u-container-layout u-similar-container u-container-layout-4">
                <img
                  alt=""
                  className="u-image u-image-round u-radius-20 u-image-4"
                  src="images/fggf.jpg"
                  data-image-width={404}
                  data-image-height={404}
                  data-animation-name="customAnimationIn"
                  data-animation-duration={1500}
                  data-animation-delay={500}
                />
                <h4 className="u-align-center u-text u-text-11">
                  Bob Greenfield
                </h4>
                <p className="u-align-center u-hover-feature u-text u-text-custom-color-1 u-text-12">
                  programming guru
                </p>
                <p className="u-align-center u-text u-text-13">
                  Glavi amet ritnisl libero molestie ante ut fringilla purus
                  eros quis glavrid from dolor amet iquam lorem bibendum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-align-center u-clearfix u-color-scheme-custom-color-scheme-1 u-color-style-multicolor-1 u-custom-color-2 u-section-5"
        id="sec-4e1d"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-center u-border-2 u-border-white u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-1">
                  <span className="u-icon u-icon-circle u-icon-1">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 58.365 58.365"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-b301"
                      />
                    </svg>
                    <svg
                      className="u-svg-content"
                      viewBox="0 0 58.365 58.365"
                      x="0px"
                      y="0px"
                      id="svg-b301"
                      style={{ enableBackground: "new 0 0 58.365 58.365" }}
                    >
                      <path
                        d="M57.863,26.632l-8.681-8.061V5.365h-10v3.921L29.182,0L0.502,26.632c-0.404,0.376-0.428,1.009-0.052,1.414
	c0.375,0.404,1.008,0.427,1.414,0.052l3.319-3.082v33.349h16h16h16V25.015l3.319,3.082c0.192,0.179,0.437,0.267,0.681,0.267
	c0.269,0,0.536-0.107,0.732-0.319C58.291,27.641,58.267,27.008,57.863,26.632z M41.182,7.365h6v9.349l-6-5.571V7.365z
	 M23.182,56.365V35.302c0-0.517,0.42-0.937,0.937-0.937h10.126c0.517,0,0.937,0.42,0.937,0.937v21.063H23.182z M51.182,56.365h-14
	V35.302c0-1.62-1.317-2.937-2.937-2.937H24.119c-1.62,0-2.937,1.317-2.937,2.937v21.063h-14V23.158l22-20.429l14.28,13.26
	l5.72,5.311v0l2,1.857V56.365z"
                      />
                    </svg>
                  </span>
                  <h1
                    className="u-hover-feature u-text u-text-default u-title u-text-1"
                    data-animation-name="counter"
                    data-animation-event="scroll"
                    data-animation-duration={3000}
                  >
                    +500
                  </h1>
                  <p className="u-text u-text-default u-text-2">
                    Happy Students
                  </p>
                </div>
              </div>
              <div className="u-align-center u-border-2 u-border-white u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <span className="u-icon u-icon-circle u-icon-2">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 60 60"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-183c"
                      />
                    </svg>
                    <svg
                      className="u-svg-content"
                      viewBox="0 0 60 60"
                      x="0px"
                      y="0px"
                      id="svg-183c"
                      style={{ enableBackground: "new 0 0 60 60" }}
                    >
                      <path
                        d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951
	c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319
	c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056
	v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309
	c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043
	C53,47.519,51.089,44.427,48.014,42.889z M51,54c0,1.357-7.412,4-21,4S9,55.357,9,54v-3.238c0-2.571,1.402-4.934,3.659-6.164
	l8.921-4.866C23.073,38.917,24,37.354,24,35.655v-4.019l-0.233-0.278c-0.024-0.029-2.475-2.994-3.41-7.065l-0.091-0.396l-0.341-0.22
	C19.346,23.303,19,22.676,19,22v-4c0-0.561,0.238-1.084,0.67-1.475L20,16.228V10l-0.009-0.131c-0.003-0.027-0.343-2.799,1.605-5.021
	C23.253,2.958,26.081,2,30,2c3.905,0,6.727,0.951,8.386,2.828c1.947,2.201,1.625,5.017,1.623,5.041L40,16.228l0.33,0.298
	C40.762,16.916,41,17.439,41,18v4c0,0.873-0.572,1.637-1.422,1.899l-0.498,0.153l-0.16,0.495c-0.669,2.081-1.622,4.003-2.834,5.713
	c-0.297,0.421-0.586,0.794-0.837,1.079L35,31.623v4.125c0,1.77,0.983,3.361,2.566,4.153l9.553,4.776
	C49.513,45.874,51,48.28,51,50.957V54z"
                      />
                    </svg>
                  </span>
                  <h1
                    className="u-hover-feature u-text u-text-default u-title u-text-3"
                    data-animation-name="counter"
                    data-animation-event="scroll"
                    data-animation-duration={3000}
                  >
                    &nbsp;800
                  </h1>
                  <p className="u-text u-text-default u-text-4">Our Courses</p>
                </div>
              </div>
              <div className="u-align-center u-border-2 u-border-white u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-3">
                  <span className="u-icon u-icon-circle u-icon-3">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 54 54"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-401b"
                      />
                    </svg>
                    <svg
                      className="u-svg-content"
                      viewBox="0 0 54 54"
                      x="0px"
                      y="0px"
                      id="svg-401b"
                      style={{ enableBackground: "new 0 0 54 54" }}
                    >
                      <g>
                        <path
                          d="M27,8c-9.374,0-17,7.626-17,17c0,7.112,4.391,13.412,11,15.9V50c0,0.553,0.447,1,1,1h1v2c0,0.553,0.447,1,1,1h6
		c0.553,0,1-0.447,1-1v-2h1c0.553,0,1-0.447,1-1v-9.1c6.609-2.488,11-8.788,11-15.9C44,15.626,36.374,8,27,8z M30,49
		c-0.553,0-1,0.447-1,1v2h-4v-2c0-0.553-0.447-1-1-1h-1v-5h8v5H30z M31.688,39.242C31.277,39.377,31,39.761,31,40.192V42h-8v-1.808
		c0-0.432-0.277-0.815-0.688-0.95C16.145,37.214,12,31.49,12,25c0-8.271,6.729-15,15-15s15,6.729,15,15
		C42,31.49,37.855,37.214,31.688,39.242z"
                        />
                        <path d="M27,6c0.553,0,1-0.447,1-1V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v4C26,5.553,26.447,6,27,6z"></path>
                        <path d="M51,24h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S51.553,24,51,24z" />
                        <path d="M7,24H3c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S7.553,24,7,24z" />
                        <path
                          d="M43.264,7.322l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S43.654,6.932,43.264,7.322z"
                        />
                        <path
                          d="M12.15,38.436l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S12.541,38.045,12.15,38.436z"
                        />
                        <path
                          d="M41.85,38.436c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2.828,2.828c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L41.85,38.436z"
                        />
                        <path
                          d="M12.15,11.564c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-2.828-2.828
		c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L12.15,11.564z"
                        />
                        <path
                          d="M27,13c-6.617,0-12,5.383-12,12c0,0.553,0.447,1,1,1s1-0.447,1-1c0-5.514,4.486-10,10-10c0.553,0,1-0.447,1-1
		S27.553,13,27,13z"
                        />
                      </g>
                    </svg>
                  </span>
                  <h1
                    className="u-hover-feature u-text u-text-default u-title u-text-5"
                    data-animation-name="counter"
                    data-animation-event="scroll"
                    data-animation-duration={3000}
                  >
                    +300
                  </h1>
                  <p className="u-text u-text-default u-text-6">Our Teachers</p>
                </div>
              </div>
              <div className="u-align-center u-border-2 u-border-white u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-4">
                  <span className="u-icon u-icon-circle u-icon-4">
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 54 54"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-401b"
                      />
                    </svg>
                    <svg
                      className="u-svg-content"
                      viewBox="0 0 54 54"
                      x="0px"
                      y="0px"
                      id="svg-401b"
                      style={{ enableBackground: "new 0 0 54 54" }}
                    >
                      <g>
                        <path
                          d="M27,8c-9.374,0-17,7.626-17,17c0,7.112,4.391,13.412,11,15.9V50c0,0.553,0.447,1,1,1h1v2c0,0.553,0.447,1,1,1h6
		c0.553,0,1-0.447,1-1v-2h1c0.553,0,1-0.447,1-1v-9.1c6.609-2.488,11-8.788,11-15.9C44,15.626,36.374,8,27,8z M30,49
		c-0.553,0-1,0.447-1,1v2h-4v-2c0-0.553-0.447-1-1-1h-1v-5h8v5H30z M31.688,39.242C31.277,39.377,31,39.761,31,40.192V42h-8v-1.808
		c0-0.432-0.277-0.815-0.688-0.95C16.145,37.214,12,31.49,12,25c0-8.271,6.729-15,15-15s15,6.729,15,15
		C42,31.49,37.855,37.214,31.688,39.242z"
                        />
                        <path d="M27,6c0.553,0,1-0.447,1-1V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v4C26,5.553,26.447,6,27,6z"></path>
                        <path d="M51,24h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S51.553,24,51,24z" />
                        <path d="M7,24H3c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S7.553,24,7,24z" />
                        <path
                          d="M43.264,7.322l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S43.654,6.932,43.264,7.322z"
                        />
                        <path
                          d="M12.15,38.436l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S12.541,38.045,12.15,38.436z"
                        />
                        <path
                          d="M41.85,38.436c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2.828,2.828c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L41.85,38.436z"
                        />
                        <path
                          d="M12.15,11.564c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-2.828-2.828
		c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L12.15,11.564z"
                        />
                        <path
                          d="M27,13c-6.617,0-12,5.383-12,12c0,0.553,0.447,1,1,1s1-0.447,1-1c0-5.514,4.486-10,10-10c0.553,0,1-0.447,1-1
		S27.553,13,27,13z"
                        />
                      </g>
                    </svg>
                  </span>
                  <h1
                    className="u-hover-feature u-text u-text-default u-title u-text-7"
                    data-animation-name="counter"
                    data-animation-event="scroll"
                    data-animation-duration={3000}
                  >
                    +300
                  </h1>
                  <p className="u-text u-text-default u-text-8">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-align-center-lg u-align-center-md u-align-center-xl u-align-center-xs u-align-right-sm u-clearfix u-section-6"
        id="carousel_b4b8"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h2
            className="u-text u-text-black u-text-1"
            data-animation-name="customAnimationIn"
            data-animation-duration={1750}
            data-animation-delay={500}
          >
            Benefits of working with us{" "}
          </h2>
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div
                className="u-align-center u-container-style u-custom-item u-hover-feature u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1"
                data-animation-name="customAnimationIn"
                data-animation-duration={1500}
                data-animation-delay={500}
              >
                <div className="u-container-layout u-similar-container u-container-layout-1">
                  <h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-2">
                    01
                  </h2>
                  <h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-3">
                    Hight Quality
                  </h4>
                  <p className="u-custom-item u-text u-text-4">
                    Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                    Mauris augue neque gravida in fermentum. Praesent semper
                    feugiat nibh sed pulvinar proin id venenatis.
                  </p>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-custom-color-1 u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-list-item-2"
                data-animation-name="customAnimationIn"
                data-animation-duration={1500}
              >
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-5">
                    02
                  </h2>
                  <h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-6">
                    Creative Team
                  </h4>
                  <p className="u-custom-item u-text u-text-7">
                    Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                    Mauris augue neque gravida in fermentum. Praesent semper
                    feugiat nibh sed pulvinar proin id venenatis.
                  </p>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-custom-item u-hover-feature u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-3"
                data-animation-name="customAnimationIn"
                data-animation-duration={1500}
                data-animation-delay={500}
              >
                <div className="u-container-layout u-similar-container u-container-layout-3">
                  <h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-8">
                    03
                  </h2>
                  <h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-9">
                    Amazing Results
                  </h4>
                  <p className="u-custom-item u-text u-text-10">
                    Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                    Mauris augue neque gravida in fermentum. Praesent semper
                    feugiat nibh sed pulvinar proin id venenatis.
                  </p>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-custom-color-2 u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-list-item-4"
                data-animation-name="customAnimationIn"
                data-animation-duration={1500}
                data-animation-delay={500}
              >
                <div className="u-container-layout u-similar-container u-container-layout-4">
                  <h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-11">
                    04
                  </h2>
                  <h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-12">
                    Best Pricing
                  </h4>
                  <p className="u-custom-item u-text u-text-13">
                    Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                    Mauris augue neque gravida in fermentum. Praesent semper
                    feugiat nibh sed pulvinar proin id venenatis.
                  </p>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-custom-item u-hover-feature u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-5"
                data-animation-name="customAnimationIn"
                data-animation-duration={1500}
                data-animation-delay={500}
              >
                <div className="u-container-layout u-similar-container u-container-layout-5">
                  <h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-14">
                    05
                  </h2>
                  <h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-15">
                    Innovations
                  </h4>
                  <p className="u-custom-item u-text u-text-16">
                    Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                    Mauris augue neque gravida in fermentum. Praesent semper
                    feugiat nibh sed pulvinar proin id venenatis.
                  </p>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-custom-color-2 u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-list-item-6"
                data-animation-name="customAnimationIn"
                data-animation-duration={1500}
                data-animation-delay={500}
              >
                <div className="u-container-layout u-similar-container u-container-layout-6">
                  <h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-17">
                    06
                  </h2>
                  <h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-18">
                    24/7 Support
                  </h4>
                  <p className="u-custom-item u-text u-text-19">
                    Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                    Mauris augue neque gravida in fermentum. Praesent semper
                    feugiat nibh sed pulvinar proin id venenatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-clearfix u-section-7" id="carousel_c1f1">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div
                  className="u-align-left u-container-style u-layout-cell u-size-20 u-layout-cell-1"
                  data-animation-name="customAnimationIn"
                  data-animation-duration={1500}
                  data-animation-delay={500}
                >
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <h3 className="u-text u-text-custom-color-2 u-text-default u-text-1">
                      {" "}
                      Each course of the program comprises:
                    </h3>
                    <h4 className="u-custom-font u-font-montserrat u-text u-text-default u-text-2">
                      {" "}
                      Tech Skills
                    </h4>
                    <p className="u-text u-text-default u-text-3">
                      {" "}
                      We help businesses to innovate and grow by strengthening
                      their ideas with our customized software solutions for
                      multiple industries which includes healthcare, blockchain,
                      education, insurance and many more
                    </p>
                    <a
                      href="https://nicepage.best"
                      className="u-active-palette-4-dark-1 u-border-4 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-palette-4-base u-btn u-btn-round u-button-style u-custom-color-2 u-hover-custom-color-1 u-radius-50 u-text-active-white u-text-hover-white u-btn-1"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1750}
                      data-animation-delay={500}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <img
                      className="u-expanded-width u-image u-image-default u-image-1"
                      src="images/8401.jpg"
                      alt=""
                      data-image-width={7869}
                      data-image-height={5000}
                    />
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-shape-rectangle u-size-20 u-layout-cell-3">
                  <div className="u-container-layout u-valign-middle u-container-layout-3">
                    <div className="u-expanded-width u-list u-list-1">
                      <div className="u-repeater u-repeater-1">
                        <div className="u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-1">
                          <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
                            <h3
                              className="u-custom-font u-font-montserrat u-text u-text-custom-color-2 u-text-4"
                              data-animation-name="counter"
                              data-animation-event="scroll"
                              data-animation-duration={3000}
                            >
                              75%
                            </h3>
                            <h6 className="u-custom-font u-font-montserrat u-text u-text-5">
                              Sample Headline
                            </h6>
                            <p className="u-text u-text-6">
                              Sample text. Click to select the Text Element.
                            </p>
                          </div>
                        </div>
                        <div className="u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-2">
                          <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                            <h3
                              className="u-custom-font u-font-montserrat u-text u-text-custom-color-2 u-text-7"
                              data-animation-name="counter"
                              data-animation-event="scroll"
                              data-animation-duration={3000}
                            >
                              25%
                            </h3>
                            <h6 className="u-custom-font u-font-montserrat u-text u-text-8">
                              Sample Headline
                            </h6>
                            <p className="u-text u-text-9">
                              Sample text. Click to select the Text Element.
                            </p>
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
      </section>

      <section
        className="u-carousel u-slide u-block-bfb1-1"
        id="carousel_53b3"
        data-interval={5000}
        data-u-ride="carousel"
      >
        <ol className="u-absolute-hcenter u-carousel-indicators u-block-bfb1-2">
          <li
            data-u-target="#carousel_53b3"
            data-u-slide-to={0}
            className="u-active u-grey-30"
          />
          <li
            data-u-target="#carousel_53b3"
            className="u-grey-30"
            data-u-slide-to={1}
          />
        </ol>
        <div className="u-carousel-inner" role="listbox">
          <div className="u-active u-align-center u-carousel-item u-clearfix u-white u-section-8-1">
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="u-expanded-width u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                  <div
                    className="u-align-center u-container-style u-custom-border u-custom-item u-list-item u-palette-1-base u-radius-20 u-repeater-item u-shape-round u-list-item-1"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                  >
                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                      <span
                        className="u-icon u-icon-rounded u-radius-20 u-text-palette-4-base u-white u-icon-1"
                        data-animation-name=""
                        data-animation-duration={0}
                        data-animation-delay={0}
                        data-animation-direction=""
                      >
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 512 512"
                          style={{}}
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-2e2d"
                          />
                        </svg>
                        <svg
                          className="u-svg-content"
                          viewBox="0 0 512 512"
                          id="svg-2e2d"
                        >
                          <g>
                            <path d="m193.29 395.63c-42.64 0-77.33-34.69-77.33-77.33v-25.59c-62.506-3.875-116.177 46.692-115.959 109.34 0 60.4 49.14 109.53 109.53 109.53 62.65.217 113.214-53.436 109.34-115.95z"></path>
                            <path d="m262.94 146.56h-69.65c-26.1 0-47.33 21.24-47.33 47.33-.042 16.556.03 110.208 0 124.41 0 26.09 21.23 47.33 47.33 47.33 14.916-.029 107.366.021 124.4 0 26.1 0 47.33-21.24 47.33-47.33v-68.81h-102.08z"></path>
                            <path d="m292.94.42v219.07h219.06v-219.07z" />
                          </g>
                        </svg>
                      </span>
                      <h4 className="u-align-center u-custom-font u-font-montserrat u-text u-text-default u-text-1">
                        {" "}
                        Visualize it
                      </h4>
                      <p className="u-align-center u-text u-text-2">
                        Sample text. Click to select the text box. Click again
                        or double click to start editing the text.
                      </p>
                      <span className="u-custom-item u-file-icon u-icon u-text-palette-4-base u-icon-2">
                        <img src="images/271226-52045be9.png" alt="" />
                      </span>
                    </div>
                  </div>
                  <div
                    className="u-container-style u-custom-border u-custom-item u-list-item u-palette-4-base u-radius-20 u-repeater-item u-shape-round u-list-item-2"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={250}
                  >
                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                      <span className="u-icon u-icon-rounded u-radius-20 u-text-palette-4-base u-white u-icon-3">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 512.001 512.001"
                          style={{}}
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-38fc"
                          />
                        </svg>
                        <svg
                          className="u-svg-content"
                          viewBox="0 0 512.001 512.001"
                          x="0px"
                          y="0px"
                          id="svg-38fc"
                          style={{
                            enableBackground: "new 0 0 512.001 512.001",
                          }}
                        >
                          <g>
                            <g>
                              <path d="M502.979,317.996L230.502,199.598c26.679-30.977,43.37-68.952,48.104-109.598h16.395c8.284,0,15-6.716,15-15V15    c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h13.362    c-5.335,38.976-23.597,74.898-52.382,102.447c-29.08,27.831-66.261,44.536-105.98,47.907v-9.265c0-8.284-6.716-15-15-15h-60    c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15v-20.631    c39.772-2.876,77.462-17.167,109.042-41.233l118.953,273.754c2.391,5.5,7.81,9.022,13.753,9.022c0.283,0,0.567-0.008,0.853-0.024    c6.272-0.355,11.659-4.582,13.496-10.589l27.229-89.03c5.725-18.716,20.315-33.307,39.03-39.031l89.03-27.229    c6.008-1.837,10.234-7.224,10.589-13.497C512.332,326.329,508.741,320.5,502.979,317.996z"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <h4 className="u-align-center u-custom-font u-font-montserrat u-text u-text-default u-text-3">
                        {" "}
                        Create it
                      </h4>
                      <p className="u-align-center u-text u-text-4">
                        Sample text. Click to select the text box. Click again
                        or double click to start editing the text.
                      </p>
                      <span className="u-custom-item u-file-icon u-icon u-text-white u-icon-4">
                        <img src="images/271226-38b67041.png" alt="" />
                      </span>
                    </div>
                  </div>
                  <div
                    className="u-align-center u-container-style u-custom-border u-custom-item u-list-item u-palette-1-base u-radius-20 u-repeater-item u-shape-round u-list-item-3"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                  >
                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                      <span
                        className="u-file-icon u-icon u-icon-rounded u-radius-20 u-text-palette-4-base u-white u-icon-5"
                        data-animation-name=""
                        data-animation-duration={0}
                        data-animation-delay={0}
                        data-animation-direction=""
                      >
                        <img src="images/5680207-022cde27.png" alt="" />
                      </span>
                      <h4 className="u-align-center u-custom-font u-font-montserrat u-text u-text-default u-text-5">
                        {" "}
                        Grow it
                      </h4>
                      <p className="u-align-center u-text u-text-6">
                        Sample text. Click to select the text box. Click again
                        or double click to start editing the text.
                      </p>
                      <span className="u-custom-item u-file-icon u-icon u-text-palette-4-base u-icon-6">
                        <img src="images/271226-52045be9.png" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skrollable skrollable-between u-align-center u-carousel-item u-clearfix u-gradient u-section-8-2">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
              <h1 className="u-text u-text-body-alt-color u-text-default u-title u-text-1">
                <b>
                  <b>Gradient</b>
                </b>
                <b>
                  <b>Fill</b>
                </b>
              </h1>
              <p className="u-large-text u-text u-text-body-alt-color u-text-variant u-text-2">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
              <a
                href="#"
                className="u-btn u-btn-round u-button-style u-palette-2-base u-radius-50 u-btn-1"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <a
          className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-text-grey-30 u-block-bfb1-3"
          href="#carousel_53b3"
          role="button"
          data-u-slide="prev"
        >
          <span aria-hidden="true">
            <svg className="u-svg-link" viewBox="0 0 477.175 477.175">
              <path
                d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
              c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-text-grey-30 u-block-bfb1-4"
          href="#carousel_53b3"
          role="button"
          data-u-slide="next"
        >
          <span aria-hidden="true">
            <svg className="u-svg-link" viewBox="0 0 477.175 477.175">
              <path
                d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
              c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
              ></path>
            </svg>
          </span>
          <span className="sr-only">Next</span>
        </a>
      </section>

      {/* <section
        class="u-clearfix u-palette-1-base u-valign-middle u-section-9"
        id="carousel_3df5"
      >
        <div class="u-align-center u-container-style u-expanded-width u-group u-shape-rectangle u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <h2
              class="u-text u-text-1"
              data-animation-name="customAnimationIn"
              data-animation-duration="1500"
              data-animation-delay="500"
            >
              Welcome Message
            </h2>
            <p
              class="u-text u-text-2"
              data-animation-name="customAnimationIn"
              data-animation-duration="1500"
            >
              Amet luctus venenatis lectus magna fringilla urna porttitor
              rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget
              est lorem ipsum dolor sit amet consectetur. Mauris pellentesque
              pulvinar pellentesque habitant morbi tristique senectus. Nec
              feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit
              amet. Porta non pulvinar neque laoreet suspendisse interdum
              consectetur libero.
            </p>
            <div class="u-palette-4-base u-shape u-shape-rectangle u-shape-1"></div>
            <div class="u-palette-4-base u-shape u-shape-rectangle u-shape-2"></div>
            <a
              href="https://nicepage.best"
              class="u-active-white u-border-4 u-border-active-white u-border-hover-white u-border-palette-4-base u-btn u-btn-round u-button-style u-hover-white u-palette-4-base u-radius-50 u-text-active-palette-1-base u-text-hover-palette-1-base u-btn-1"
              data-animation-name="customAnimationIn"
              data-animation-duration="1500"
              data-animation-delay="500"
            >
              Learn More
            </a>
          </div>
        </div>
      </section> */}

      <section
        className="skrollable skrollable-between u-align-center u-clearfix u-image u-shading u-section-10"
        id="carousel_e141"
        src=""
        data-image-width={1620}
        data-image-height={1080}
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h2
            className="u-text u-text-default u-text-1"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
          >
            How Coaching Works
          </h2>
          <p
            className="u-large-text u-text u-text-variant u-text-2"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            Simple Text. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus
            quis elementum.
          </p>
          <div className="u-clearfix u-layout-custom-sm u-layout-custom-xs u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-center-xs u-align-right-lg u-align-right-md u-align-right-sm u-align-right-xl u-container-style u-layout-cell u-left-cell u-size-30-lg u-size-30-md u-size-30-sm u-size-30-xl u-size-60-xs u-layout-cell-1">
                  <div className="u-container-layout u-valign-top u-container-layout-1">
                    <a
                      href="https://nicepage.best"
                      className="u-active-white u-border-4 u-border-active-white u-border-hover-white u-border-palette-4-base u-btn u-btn-round u-button-style u-hover-white u-palette-4-base u-radius-50 u-text-active-palette-1-base u-text-hover-palette-1-base u-btn-1"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1750}
                      data-animation-delay={500}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-md u-size-30-sm u-size-30-xl u-size-60-xs u-layout-cell-2">
                  <div className="u-container-layout u-valign-top-xs u-container-layout-2">
                    <a
                      href="https://nicepage.com/css-templates"
                      className="u-active-white u-border-4 u-border-active-white u-border-hover-white u-border-white u-btn u-btn-round u-button-style u-hover-white u-none u-radius-50 u-text-active-palette-1-base u-text-hover-palette-1-base u-btn-2"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1750}
                      data-animation-delay={500}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            className="u-text u-text-default u-text-3"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            Image from&nbsp;
            <a
              href="https://www.freepik.com/photos/business"
              className="u-active-none u-border-1 u-border-active-palette-1-light-2 u-border-hover-palette-1-light-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-link u-button-style u-hover-none u-none u-radius-0 u-text-body-alt-color u-top-left-radius-0 u-top-right-radius-0 u-btn-3"
              target="_blank"
            >
              Freepik
            </a>
          </p>
        </div>
      </section>

      <section
        className="u-clearfix u-image u-shading u-section-11"
        id="carousel_8f5b"
        data-image-width={1669}
        data-image-height={1080}
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-text u-text-palette-4-base u-text-1">
            {" "}
            How and where to learn mindfulness
          </h2>
          <p className="u-text u-text-grey-30 u-text-2">
            {" "}
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.&nbsp;​Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-size-26-lg u-size-26-xl u-size-31-md u-size-31-sm u-size-31-xs u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h3 className="u-custom-font u-font-montserrat u-text u-text-default u-text-3">
                      {" "}
                      Introductory courses, taster sessions and groups <br />
                      Formal mindfulness courses
                    </h3>
                    <p className="u-text u-text-default u-text-4">
                      Sample text. Click to select the Text Element.
                    </p>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-29-md u-size-29-sm u-size-29-xs u-size-34-lg u-size-34-xl u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <div className="u-expanded-width u-list u-list-1">
                      <div className="u-repeater u-repeater-1">
                        <div
                          className="u-container-style u-list-item u-repeater-item u-list-item-1"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1250}
                          data-animation-delay={500}
                        >
                          <div className="u-container-layout u-similar-container u-container-layout-3">
                            <h3
                              className="u-custom-font u-font-montserrat u-text u-text-palette-4-base u-text-5"
                              data-animation-name="counter"
                              data-animation-event="scroll"
                              data-animation-duration={4750}
                            >
                              6k
                            </h3>
                            <h6 className="u-custom-font u-font-montserrat u-text u-text-6">
                              Sample Headline
                            </h6>
                          </div>
                        </div>
                        <div
                          className="u-container-style u-list-item u-repeater-item u-list-item-2"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1250}
                          data-animation-delay={500}
                        >
                          <div className="u-container-layout u-similar-container u-container-layout-4">
                            <h3
                              className="u-custom-font u-font-montserrat u-text u-text-palette-4-base u-text-7"
                              data-animation-name="counter"
                              data-animation-event="scroll"
                              data-animation-duration={4750}
                            >
                              60%
                            </h3>
                            <h6 className="u-custom-font u-font-montserrat u-text u-text-8">
                              Sample Headline
                            </h6>
                          </div>
                        </div>
                        <div
                          className="u-container-style u-list-item u-repeater-item u-list-item-3"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1250}
                          data-animation-delay={500}
                        >
                          <div className="u-container-layout u-similar-container u-container-layout-5">
                            <h3
                              className="u-custom-font u-font-montserrat u-text u-text-palette-4-base u-text-9"
                              data-animation-name="counter"
                              data-animation-event="scroll"
                              data-animation-duration={4750}
                            >
                              100
                            </h3>
                            <h6 className="u-custom-font u-font-montserrat u-text u-text-10">
                              Sample Headline
                            </h6>
                          </div>
                        </div>
                        <div
                          className="u-container-style u-list-item u-repeater-item u-list-item-4"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1250}
                          data-animation-delay={500}
                        >
                          <div className="u-container-layout u-similar-container u-container-layout-6">
                            <h3
                              className="u-custom-font u-font-montserrat u-text u-text-palette-4-base u-text-11"
                              data-animation-name="counter"
                              data-animation-event="scroll"
                              data-animation-duration={4750}
                            >
                              1230
                            </h3>
                            <h6 className="u-custom-font u-font-montserrat u-text u-text-12">
                              Sample Headline
                            </h6>
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
{/* Footer pictures */}
      {/* <section className="u-clearfix u-section-13" id="sec-36be">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-expanded-width u-layout-horizontal u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div
                className="u-container-style u-image u-list-item u-repeater-item u-image-1"
                data-animation-name="pulse"
                data-animation-duration={1000}
                data-animation-direction=""
                data-image-width={900}
                data-image-height={600}
              >
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-1" />
              </div>
              <div
                className="u-container-style u-image u-list-item u-repeater-item u-image-2"
                data-animation-name="pulse"
                data-animation-duration={1000}
                data-animation-direction=""
                data-image-width={900}
                data-image-height={600}
              >
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-2" />
              </div>
              <div
                className="u-container-style u-image u-list-item u-repeater-item u-image-3"
                data-animation-name="pulse"
                data-animation-duration={1000}
                data-animation-direction=""
                data-image-width={900}
                data-image-height={600}
              >
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-3" />
              </div>
              <div
                className="u-container-style u-image u-list-item u-repeater-item u-image-4"
                data-animation-name="pulse"
                data-animation-duration={1000}
                data-animation-direction=""
                data-image-width={900}
                data-image-height={600}
              >
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-4" />
              </div>
              <div
                className="u-container-style u-image u-list-item u-repeater-item u-image-5"
                data-animation-name="pulse"
                data-animation-duration={1000}
                data-animation-direction=""
                data-image-width={900}
                data-image-height={600}
              >
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-5" />
              </div>
              <div
                className="u-container-style u-image u-list-item u-repeater-item u-image-6"
                data-animation-name="pulse"
                data-animation-duration={1000}
                data-animation-direction=""
                data-image-width={900}
                data-image-height={600}
              >
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-6" />
              </div>
            </div>
            <a
              className="u-absolute-vcenter u-gallery-nav u-gallery-nav-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-gallery-nav-1"
              href="#"
              role="button"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 451.847 451.847">
                  <path
                    d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
                  />
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 451.847 451.847">
                  <path
                    d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
                  />
                </svg>
              </span>
            </a>
            <a
              className="u-absolute-vcenter u-gallery-nav u-gallery-nav-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-gallery-nav-2"
              href="#"
              role="button"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 451.846 451.847">
                  <path
                    d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                  />
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 451.846 451.847">
                  <path
                    d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section> */}

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
          <div className="u-align-left u-border-1 u-border-white u-expanded-width u-line u-line-horizontal u-opacity u-opacity-30 u-line-1"></div>
          <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-15 u-size-30-md u-layout-cell-1">
                  <div className="u-container-layout u-valign-top u-container-layout-1">
                    
                    <div data-position="" className="u-position">
                      
                      <div className="u-block">
                        <div className="u-block-container u-clearfix">
                      
                          <h5 className="u-block-header u-text">
                      
                          </h5>
                      <div className="u-block-content u-text">
                      
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
                   
                          </h5>
                   
                          <div className="u-block-content u-text">
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
                   
                          </h5>
                          <div className="u-block-content u-text">
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
                          </h5>
                   
                          <div className="u-block-content u-text">
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

     </div>
     
  );
};

export default LandingPage;

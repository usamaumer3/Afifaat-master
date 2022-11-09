import React, { useState, useEffect } from "react";
import "./CourseSearchPage.css";
import Navbar from "../../../Components/General/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getCourse } from "../../../actions/courses";

const CourseSearchPage = () => {
  const [search, setsearch] = useState();
  const [currentCourses, setcurrentCourses] = useState();

  const newCourses = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    setcurrentCourses(newCourses);
  }, [newCourses]);

  return (
    <div className="u-body u-gradient u-xl-mode">
      <>
        <Navbar />

        <>
  {/* <header
    className="u-align-left u-clearfix u-header u-section-row-container"
    id="sec-a7be"
    style={{}}
  >
    <div className="u-section-rows">
      <div
        className="u-custom-color-2 u-section-row u-section-row-1"
        id="sec-46aa"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-hover-feature u-social-icons u-spacing-10 u-social-icons-1">
            <a
              className="u-social-url"
              title="facebook"
              target="_blank"
              href="https://facebook.com/name"
            >
              <span className="u-icon u-social-facebook u-social-icon u-icon-1">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 112 112"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-822a"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 112 112"
                  x={0}
                  y={0}
                  id="svg-822a"
                >
                  <circle fill="currentColor" cx="56.1" cy="56.1" r={55} />
                  <path
                    fill="#FFFFFF"
                    d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
      c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                  />
                </svg>
              </span>
            </a>
            <a
              className="u-social-url"
              title="twitter"
              target="_blank"
              href="https://twitter.com/name"
            >
              <span className="u-icon u-social-icon u-social-twitter u-icon-2">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 112 112"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-9c1e"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 112 112"
                  x={0}
                  y={0}
                  id="svg-9c1e"
                >
                  <circle
                    fill="currentColor"
                    className="st0"
                    cx="56.1"
                    cy="56.1"
                    r={55}
                  />
                  <path
                    fill="#FFFFFF"
                    d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
      c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
      c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
      c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
      c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                  />
                </svg>
              </span>
            </a>
          </div>
          <form
            action="#"
            method="get"
            className="u-border-1 u-border-grey-30 u-expanded-width-xs u-radius-16 u-search u-search-right u-white u-search-1"
          >
            <button className="u-search-button" type="submit">
              <span className="u-border-2 u-border-custom-color-1 u-icon-circle u-search-icon u-spacing-10 u-text-custom-color-2 u-search-icon-1">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 56.966 56.966"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-9dab"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="svg-9dab"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  className="u-svg-content"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </span>
            </button>
            <input
              className="u-search-input u-search-input-1"
              type="search"
              name="search"
              defaultValue=""
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      <div className="u-section-row u-section-row-2" id="sec-37e8">
        <div className="u-clearfix u-sheet u-sheet-2">
          <a
            href="Home.html"
            className="u-image u-logo u-image-1"
            data-image-width={261}
            data-image-height={50}
            title="Home"
          >
            <img
              src="images/logo-wide.png"
              className="u-logo-image u-logo-image-1"
              data-image-width={80}
            />
          </a>
          <a href="Student-Login.html" className="u-btn u-button-style u-btn-1">
            Student Login&nbsp;
          </a>
          <a href="Teacher-Login.html" className="u-btn u-button-style u-btn-2">
            Teacher&nbsp; Login&nbsp;
          </a>
          <nav className="u-dropdown-icon u-menu u-menu-one-level u-offcanvas u-menu-1">
            <div
              className="menu-collapse"
              style={{
                fontSize: "1rem",
                letterSpacing: 0,
                textTransform: "uppercase",
                fontWeight: 500
              }}
            >
              <a
                className="u-button-style u-custom-active-color u-custom-border u-custom-border-color u-custom-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link"
                href="#"
              >
                <svg className="u-svg-link" viewBox="0 0 24 24">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-978f"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  version="1.1"
                  id="svg-978f"
                  viewBox="0 0 16 16"
                  x="0px"
                  y="0px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect y={1} width={16} height={2} />
                    <rect y={7} width={16} height={2} />
                    <rect y={13} width={16} height={2} />
                  </g>
                </svg>
              </a>
            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-nav u-spacing-2 u-unstyled u-nav-1">
                <li className="u-nav-item">
                  <a
                    className="u-active-custom-color-2 u-border-1 u-border-active-white u-border-black u-border-no-left u-button-style u-custom-color-2 u-hover-custom-color-1 u-nav-link u-text-active-white u-text-hover-white"
                    href="Home.html"
                    style={{ padding: "10px 42px" }}
                  >
                    Home
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-active-custom-color-2 u-border-1 u-border-active-white u-border-black u-border-no-left u-button-style u-custom-color-2 u-hover-custom-color-1 u-nav-link u-text-active-white u-text-hover-white"
                    href="Courses.html"
                    style={{ padding: "10px 42px" }}
                  >
                    Courses
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-active-custom-color-2 u-border-1 u-border-active-white u-border-black u-border-no-left u-button-style u-custom-color-2 u-hover-custom-color-1 u-nav-link u-text-active-white u-text-hover-white"
                    href="Student-Sign-up.html"
                    style={{ padding: "10px 42px" }}
                  >
                    Student Sign-up
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-active-custom-color-2 u-border-1 u-border-active-white u-border-black u-border-no-left u-button-style u-custom-color-2 u-hover-custom-color-1 u-nav-link u-text-active-white u-text-hover-white"
                    href="Teachers-Course-Form.html"
                    style={{ padding: "10px 42px" }}
                  >
                    Teachers Course Form
                  </a>
                </li>
              </ul>
            </div>
            <div className="u-custom-menu u-nav-container-collapse">
              <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close" />
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li className="u-nav-item">
                      <a className="u-button-style u-nav-link" href="Home.html">
                        Home
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="Courses.html"
                      >
                        Courses
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="Student-Sign-up.html"
                      >
                        Student Sign-up
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="Teachers-Course-Form.html"
                      >
                        Teachers Course Form
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
            </div>
          </nav>
          <a
            href="https://nicepage.com/website-design"
            className="u-active-none u-btn u-button-style u-hover-none u-none u-text-hover-palette-1-base u-btn-3"
          >
            <span className="u-icon u-text-palette-1-base">
              <svg
                className="u-svg-content"
                viewBox="0 0 405.333 405.333"
                x="0px"
                y="0px"
                style={{ width: "1em", height: "1em" }}
              >
                <path d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752    c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64    C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32    c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"></path>
              </svg>
              <img />
            </span>
            &nbsp;+1 (234) 567-8910
          </a>
        </div>
      </div>
    </div>
  </header> */}
  <section className="u-clearfix u-section-118" id="sec-14a7">
    <div className="u-clearfix u-sheet u-sheet-1">
      <p className="u-align-justify u-text u-text-1">
        Course <span className="u-text-custom-color-1">Categories</span>
      </p>
      <div className="u-clearfix u-group-elements u-group-elements-1">
        <p className="u-align-justify u-text u-text-default u-text-2">
          Accounting Technologies
        </p>
        <img
          className="u-image u-image-default u-image-1"
          src="images/3730262_73938.jpg"
          alt=""
          data-image-width={1669}
          data-image-height={1080}
        />
        <p className="u-align-justify u-text u-text-default u-text-3">
          <span className="u-text-custom-color-1">Price:</span> $100
        </p>
        <p className="u-align-justify u-text u-text-default u-text-4">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquam ipsum quis ipsum facilisis sit amet.Aliquam ipsum quis ipsum
          facilisis sit ame ipsum quis ipsum facilisis sit amet facilisis
          consecte.
        </p>
        <a
          href="https://nicepage.com/k/awards-website-templates"
          className="u-btn u-button-style u-btn-1"
        >
          View Details
        </a>
        <div className="u-border-2 u-border-palette-5-base u-expanded-width u-line u-line-horizontal u-line-1" />
      </div>
      <form
        action="#"
        method="get"
        className="u-border-1 u-border-grey-30 u-search u-search-right u-search-1"
      >
        <button className="u-search-button" type="submit">
          <span className="u-border-2 u-border-palette-1-base u-icon-circle u-search-icon u-spacing-10 u-search-icon-1">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 56.966 56.966"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-d168"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="svg-d168"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              className="u-svg-content"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
            </svg>
          </span>
        </button>
        <input
          className="u-search-input"
          type="search"
          name="search"
          defaultValue=""
          placeholder="Search"
        />
      </form>
      <p className="u-align-justify u-text u-text-palette-5-dark-1 u-text-5">
        Creative
      </p>
      <div className="u-align-left u-border-2 u-border-palette-5-base u-line u-line-horizontal u-line-2" />
      <div className="u-align-left u-border-2 u-border-custom-color-1 u-line u-line-horizontal u-line-3" />
      <p className="u-align-justify u-text u-text-palette-5-dark-1 u-text-6">
        Portfolio
        <br />
      </p>
      <div className="u-border-2 u-border-palette-5-base u-line u-line-horizontal u-line-4" />
      <p className="u-align-justify u-text u-text-palette-5-dark-1 u-text-7">
        Fitness
      </p>
      <div className="u-border-2 u-border-custom-color-1 u-line u-line-horizontal u-line-5" />
      <div className="u-align-left u-border-2 u-border-palette-5-base u-line u-line-horizontal u-line-6" />
      <p className="u-align-justify u-text u-text-palette-5-dark-1 u-text-8">
        Gym
      </p>
      <div className="u-align-left u-border-2 u-border-palette-5-base u-line u-line-horizontal u-line-7" />
      <p className="u-align-justify u-text u-text-palette-5-dark-1 u-text-9">
        Personal
      </p>
      <div className="u-border-2 u-border-palette-5-base u-line u-line-horizontal u-line-8" />
      <p className="u-align-justify u-text u-text-10">
        Latest <span className="u-text-custom-color-1">course</span>
      </p>
      <p className="u-align-justify u-text u-text-11">Development Studies</p>
      <img
        className="u-image u-image-default u-image-2"
        src="images/51364.jpg"
        alt=""
        data-image-width={1920}
        data-image-height={1080}
      />
      <p className="u-align-justify u-text u-text-palette-5-dark-1 u-text-12">
        {" "}
        Lorem ipsum dolor sit amet, consectetur...
      </p>
      <div className="u-clearfix u-group-elements u-group-elements-2">
        <p className="u-align-justify u-text u-text-default u-text-13">
          Accounting Technologies
        </p>
        <img
          className="u-image u-image-default u-image-3"
          src="images/3730262_73938.jpg"
          alt=""
          data-image-width={1669}
          data-image-height={1080}
        />
        <p className="u-align-justify u-text u-text-default u-text-14">
          <span className="u-text-custom-color-1">Price:</span> $100
        </p>
        <p className="u-align-justify u-text u-text-default u-text-15">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquam ipsum quis ipsum facilisis sit amet.Aliquam ipsum quis ipsum
          facilisis sit ame ipsum quis ipsum facilisis sit amet facilisis
          consecte.
        </p>
        <a
          href="https://nicepage.com/k/awards-website-templates"
          className="u-btn u-button-style u-btn-2"
        >
          View Details
        </a>
        <div className="u-border-2 u-border-palette-5-base u-expanded-width u-line u-line-horizontal u-line-9" />
      </div>
      <p className="u-align-justify u-text u-text-16">Development Studies</p>
      <img
        className="u-image u-image-default u-image-4"
        src="images/wp82872551.png"
        alt=""
        data-image-width={2560}
        data-image-height={1440}
      />
      <p className="u-align-justify u-text u-text-palette-5-dark-1 u-text-17">
        {" "}
        Lorem ipsum dolor sit amet, consectetur...
      </p>
      <img
        className="u-image u-image-default u-image-5"
        src="images/51364.jpg"
        alt=""
        data-image-width={1920}
        data-image-height={1080}
      />
      <p className="u-align-justify u-text u-text-18">Development Studies</p>
      <p className="u-align-justify u-text u-text-palette-5-dark-1 u-text-19">
        {" "}
        Lorem ipsum dolor sit amet, consectetur...
      </p>
      <div className="u-clearfix u-group-elements u-group-elements-3">
        <p className="u-align-justify u-text u-text-default u-text-20">
          Accounting Technologies
        </p>
        <img
          className="u-image u-image-default u-image-6"
          src="images/3730262_73938.jpg"
          alt=""
          data-image-width={1669}
          data-image-height={1080}
        />
        <p className="u-align-justify u-text u-text-default u-text-21">
          <span className="u-text-custom-color-1">Price:</span> $100
        </p>
        <p className="u-align-justify u-text u-text-default u-text-22">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquam ipsum quis ipsum facilisis sit amet.Aliquam ipsum quis ipsum
          facilisis sit ame ipsum quis ipsum facilisis sit amet facilisis
          consecte.
        </p>
        <a
          href="https://nicepage.com/k/awards-website-templates"
          className="u-btn u-button-style u-btn-3"
        >
          View Details
        </a>
        <div className="u-border-2 u-border-palette-5-base u-expanded-width u-line u-line-horizontal u-line-10" />
      </div>
      <div className="u-clearfix u-group-elements u-group-elements-4">
        <p className="u-align-justify u-text u-text-default u-text-23">
          Accounting Technologies
        </p>
        <img
          className="u-image u-image-default u-image-7"
          src="images/3730262_73938.jpg"
          alt=""
          data-image-width={1669}
          data-image-height={1080}
        />
        <p className="u-align-justify u-text u-text-default u-text-24">
          <span className="u-text-custom-color-1">Price:</span> $100
        </p>
        <p className="u-align-justify u-text u-text-default u-text-25">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquam ipsum quis ipsum facilisis sit amet.Aliquam ipsum quis ipsum
          facilisis sit ame ipsum quis ipsum facilisis sit amet facilisis
          consecte.
        </p>
        <a
          href="https://nicepage.com/k/awards-website-templates"
          className="u-btn u-button-style u-btn-4"
        >
          View Details
        </a>
        <div className="u-border-2 u-border-palette-5-base u-expanded-width u-line u-line-horizontal u-line-11" />
      </div>
    </div>
  </section>
  
  
</>

      
        {/* <section className="u-clearfix u-section-1" id="sec-14a7">
          <div className="u-clearfix u-sheet u-sheet-1">
            <p className="u-align-justify u-text u-text-1">
              Course <span className="u-text-custom-color-1">Categories</span>
            </p>
            <div className="u-list u-list-1">
              <div className="u-repeater u-repeater-1">
                <div className="u-container-style u-list-item u-repeater-item">
                  <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1">
                    <h1 className="u-custom-item u-text u-title u-text-2">
                      <span style={{ textDecoration: "underline !important" }}>
                        Acc
                      </span>
                      ounting Technologies
                    </h1>
                    <h4 className="u-custom-item u-text u-text-3">
                      <span className="u-text-custom-color-1">Price:</span>
                      &nbsp; <span className="u-text-grey-90">$125</span>
                    </h4>
                    <h5 className="u-align-justify u-custom-item u-text u-text-4">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam aliquam ipsum quis ipsum facilisis sit
                      amet.Aliquam ipsum quis ipsum facilisis sit ame ipsum quis
                      ipsum facilisis sit amet facilisis consecte.
                    </h5>
                    <a
                      // href="https://nicepage.one"
                      className="u-btn u-button-style u-custom-item u-hover-feature u-text-body-alt-color u-btn-1"
                      onClick={() => {
                        dispatch(getCourse(search));
                      }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
                <div className="u-container-style u-list-item u-repeater-item">
                  <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-2">
                    <h1 className="u-custom-item u-text u-title u-text-5">
                      <span style={{ textDecoration: "underline !important" }}>
                        Acc
                      </span>
                      ounting Technologies
                    </h1>
                    <h4 className="u-custom-item u-text u-text-6">
                      <span className="u-text-custom-color-1">Price:</span>
                      &nbsp; <span className="u-text-grey-90">$125</span>
                    </h4>
                    <h5 className="u-align-justify u-custom-item u-text u-text-7">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam aliquam ipsum quis ipsum facilisis sit
                      amet.Aliquam ipsum quis ipsum facilisis sit ame ipsum quis
                      ipsum facilisis sit amet facilisis consecte.
                    </h5>
                    <a
                      href="https://nicepage.one"
                      className="u-btn u-button-style u-custom-item u-hover-feature u-text-body-alt-color u-btn-2"
                    >
                      View Details
                    </a>
                  </div>
                </div>
                <div className="u-container-style u-list-item u-repeater-item">
                  <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-3">
                    <h1 className="u-custom-item u-text u-title u-text-8">
                      <span style={{ textDecoration: "underline !important" }}>
                        Acc
                      </span>
                      ounting Technologies
                    </h1>
                    <h4 className="u-custom-item u-text u-text-9">
                      <span className="u-text-custom-color-1">Price:</span>
                      &nbsp; <span className="u-text-grey-90">$125</span>
                    </h4>
                    <h5 className="u-align-justify u-custom-item u-text u-text-10">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam aliquam ipsum quis ipsum facilisis sit
                      amet.Aliquam ipsum quis ipsum facilisis sit ame ipsum quis
                      ipsum facilisis sit amet facilisis consecte.
                    </h5>
                    <a
                      href="https://nicepage.one"
                      className="u-btn u-button-style u-custom-item u-hover-feature u-text-body-alt-color u-btn-3"
                    >
                      View Details
                    </a>
                  </div>
                </div>
                <div className="u-container-style u-list-item u-repeater-item">
                  <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-4">
                    <h1 className="u-custom-item u-text u-title u-text-11">
                      <span style={{ textDecoration: "underline !important" }}>
                        Acc
                      </span>
                      ounting Technologies
                    </h1>
                    <h4 className="u-custom-item u-text u-text-12">
                      <span className="u-text-custom-color-1">Price:</span>
                      &nbsp; <span className="u-text-grey-90">$125</span>
                    </h4>
                    <h5 className="u-align-justify u-custom-item u-text u-text-13">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam aliquam ipsum quis ipsum facilisis sit
                      amet.Aliquam ipsum quis ipsum facilisis sit ame ipsum quis
                      ipsum facilisis sit amet facilisis consecte.
                    </h5>
                    <a
                      href="https://nicepage.one"
                      className="u-btn u-button-style u-custom-item u-hover-feature u-text-body-alt-color u-btn-4"
                    >
                      View Details
                    </a>
                  </div>
                </div>
                <div className="u-container-style u-list-item u-repeater-item">
                  <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-5">
                    <h1 className="u-custom-item u-text u-title u-text-14">
                      <span style={{ textDecoration: "underline !important" }}>
                        Acc
                      </span>
                      ounting Technologies
                    </h1>
                    <h4 className="u-custom-item u-text u-text-15">
                      <span className="u-text-custom-color-1">Price:</span>
                      &nbsp; <span className="u-text-grey-90">$125</span>
                    </h4>
                    <h5 className="u-align-justify u-custom-item u-text u-text-16">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam aliquam ipsum quis ipsum facilisis sit
                      amet.Aliquam ipsum quis ipsum facilisis sit ame ipsum quis
                      ipsum facilisis sit amet facilisis consecte.
                    </h5>
                    <a
                      href="https://nicepage.one"
                      className="u-btn u-button-style u-custom-item u-hover-feature u-text-body-alt-color u-btn-5"
                    >
                      View Details
                    </a>
                  </div>
                </div>
                <div className="u-container-style u-list-item u-repeater-item">
                  <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-6">
                    <h1 className="u-custom-item u-text u-title u-text-17">
                      <span style={{ textDecoration: "underline !important" }}>
                        Acc
                      </span>
                      ounting Technologies
                    </h1>
                    <h4 className="u-custom-item u-text u-text-18">
                      <span className="u-text-custom-color-1">Price:</span>
                      &nbsp; <span className="u-text-grey-90">$125</span>
                    </h4>
                    <h5 className="u-align-justify u-custom-item u-text u-text-19">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam aliquam ipsum quis ipsum facilisis sit
                      amet.Aliquam ipsum quis ipsum facilisis sit ame ipsum quis
                      ipsum facilisis sit amet facilisis consecte.
                    </h5>
                    <a
                      href="https://nicepage.one"
                      className="u-btn u-button-style u-custom-item u-hover-feature u-text-body-alt-color u-btn-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
                <div className="u-container-style u-list-item u-repeater-item">
                  <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-7">
                    <h1 className="u-custom-item u-text u-title u-text-20">
                      <span style={{ textDecoration: "underline !important" }}>
                        Acc
                      </span>
                      ounting Technologies
                    </h1>
                    <h4 className="u-custom-item u-text u-text-21">
                      <span className="u-text-custom-color-1">Price:</span>
                      &nbsp; <span className="u-text-grey-90">$125</span>
                    </h4>
                    <h5 className="u-align-justify u-custom-item u-text u-text-22">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam aliquam ipsum quis ipsum facilisis sit
                      amet.Aliquam ipsum quis ipsum facilisis sit ame ipsum quis
                      ipsum facilisis sit amet facilisis consecte.
                    </h5>
                    <a
                      href="https://nicepage.one"
                      className="u-btn u-button-style u-custom-item u-hover-feature u-text-body-alt-color u-btn-7"
                    >
                      View Details
                    </a>
                  </div>
                </div>
                <div className="u-container-style u-list-item u-repeater-item">
                  <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-8">
                    <h1 className="u-custom-item u-text u-title u-text-23">
                      <span style={{ textDecoration: "underline !important" }}>
                        Acc
                      </span>
                      ounting Technologies
                    </h1>
                    <h4 className="u-custom-item u-text u-text-24">
                      <span className="u-text-custom-color-1">Price:</span>
                      &nbsp; <span className="u-text-grey-90">$125</span>
                    </h4>
                    <h5 className="u-align-justify u-custom-item u-text u-text-25">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam aliquam ipsum quis ipsum facilisis sit
                      amet.Aliquam ipsum quis ipsum facilisis sit ame ipsum quis
                      ipsum facilisis sit amet facilisis consecte.
                    </h5>
                    <a
                      href="https://nicepage.one"
                      className="u-btn u-button-style u-custom-item u-hover-feature u-text-body-alt-color u-btn-8"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="u-align-justify u-text u-text-26">Creative</p>
            <p className="u-align-justify u-text u-text-27">
              Portfolio
              <br />
            </p>
            <p className="u-align-justify u-text u-text-28">Fitness</p>
            <p className="u-align-justify u-text u-text-29">Gym</p>
            <p className="u-align-justify u-text u-text-30">Personal</p>
            <img
              className="u-image u-image-default u-image-1"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
            <img
              className="u-hidden-lg u-image u-image-default u-image-2"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
            <img
              className="u-image u-image-default u-image-3"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
            <img
              className="u-hidden-lg u-image u-image-default u-image-4"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
            <img
              className="u-hidden-lg u-image u-image-default u-image-5"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
            <img
              className="u-image u-image-default u-image-6"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
            <img
              className="u-hidden-lg u-image u-image-default u-image-7"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
            <img
              className="u-image u-image-default u-image-8"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
            <img
              className="u-hidden-lg u-image u-image-default u-image-9"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
            <img
              className="u-hidden-lg u-image u-image-default u-image-10"
              src="images/lg1.jpg"
              alt=""
              data-image-width={262}
              data-image-height={210}
            />
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
  </footer>
  <section className="u-backlink u-clearfix u-grey-80">
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
    </div>
  );
};

export default CourseSearchPage;

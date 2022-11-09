
import React, { useState } from "react";
import "./TeacherDashboard.css";
import Navbar from "../../../Components/General/Navbar/Navbar";

const TeacherDashboard = () => {
  const [search, setsearch] = useState();
  return <div className="u-body u-gradient u-xl-mode">

<>

<Navbar />


  {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="utf-8" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <title>Home</title>
  <link rel="stylesheet" href="nicepage.css" media="screen" />
  <link rel="stylesheet" href="Home.css" media="screen" />
  <meta name="generator" content="Nicepage 4.20.1, nicepage.com" />
  <link
    id="u-theme-google-font"
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
  />
  <meta name="theme-color" content="#478ac9" />
  <meta property="og:title" content="Home" />
  <meta property="og:type" content="website" />
  <header className="u-clearfix u-header u-header" id="sec-42cf">
    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <a href="https://nicepage.com" className="u-image u-logo u-image-1">
        <img
          src="images/default-logo.png"
          className="u-logo-image u-logo-image-1"
        />
      </a>
      <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
        <div
          className="menu-collapse"
          style={{ fontSize: "1rem", letterSpacing: 0 }}
        >
          <a
            className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
            href="#"
          >
            <svg className="u-svg-link" viewBox="0 0 24 24">
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#menu-hamburger"
              />
            </svg>
            <svg
              className="u-svg-content"
              version="1.1"
              id="menu-hamburger"
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
        <div className="u-nav-container">
          <ul className="u-nav u-unstyled u-nav-1">
            <li className="u-nav-item">
              <a
                className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="Home.html"
                style={{ padding: "10px 20px" }}
              >
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="u-nav-container-collapse">
          <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
            <div className="u-inner-container-layout u-sidenav-overflow">
              <div className="u-menu-close" />
              <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                <li className="u-nav-item">
                  <a className="u-button-style u-nav-link" href="Home.html">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
        </div>
      </nav>
    </div>
  </header> */}
  <section className="u-clearfix u-section-111" id="sec-146c">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-list u-list-1">
        <div className="u-repeater u-repeater-1">
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-container-layout-1">
              <a
                href="https://nicepage.com/c/about-us-html-templates"
                className="u-border-none u-btn u-button-style u-custom-color-1 u-custom-item u-btn-1"
              >
                Stat 1&nbsp;
              </a>
            </div>
          </div>
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-container-layout-2">
              <a
                href="https://nicepage.com/c/about-us-html-templates"
                className="u-border-none u-btn u-button-style u-custom-color-1 u-custom-item u-btn-2"
              >
                Stat 2
              </a>
            </div>
          </div>
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-container-layout-3">
              <a
                href="https://nicepage.com/c/about-us-html-templates"
                className="u-border-none u-btn u-button-style u-custom-color-1 u-custom-item u-btn-3"
              >
                Stat 3
              </a>
            </div>
          </div>
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-container-layout-4">
              <a
                href="https://nicepage.com/c/about-us-html-templates"
                className="u-border-none u-btn u-button-style u-custom-color-1 u-custom-item u-btn-4"
              >
                Stat 4
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="u-border-2 u-border-custom-color-2 u-container-style u-group u-radius-21 u-shape-round u-group-1">
        <div className="u-container-layout u-container-layout-5">
          <div className="u-container-style u-custom-color-2 u-expanded-width u-group u-shape-rectangle u-group-2">
            <div className="u-container-layout u-container-layout-6">
              <div className="u-align-center u-container-style u-custom-color-1 u-group u-preserve-proportions u-shape-circle u-group-3">
                <div className="u-container-layout u-valign-middle ">
                  <p className="u-text u-text-default u-text-1">50%</p>
                </div>
              </div>
              <a
                href="https://nicepage.app"
                className="u-border-none u-btn u-button-style u-custom-color-1 u-btn-5"
              >
                20 Students
              </a>
              <h3 className="u-text u-text-2">Mathematics</h3>
            </div>
          </div>
          <div className="u-container-style u-custom-color-2 u-expanded-width u-group u-shape-rectangle u-group-4">
            <div className="u-container-layout u-container-layout-8">
              <div className="u-container-style u-custom-color-1 u-group u-preserve-proportions u-shape-circle u-group-5">
                <div className="u-container-layout u-valign-middle ">
                  <p className="u-text u-text-default u-text-3">50%</p>
                </div>
              </div>
              <a
                href="https://nicepage.app"
                className="u-border-none u-btn u-button-style u-custom-color-1 u-btn-6"
              >
                20 Students
              </a>
              <h3 className="u-text u-text-4">English</h3>
            </div>
          </div>
          <div className="u-container-style u-custom-color-2 u-expanded-width u-group u-shape-rectangle u-group-6">
            <div className="u-container-layout u-container-layout-10">
              <div className="u-container-style u-custom-color-1 u-group u-preserve-proportions u-shape-circle u-group-7">
                <div className="u-container-layout u-valign-middle ">
                  <p className="u-text u-text-default u-text-5">50%</p>
                </div>
              </div>
              <a
                href="https://nicepage.app"
                className="u-border-none u-btn u-button-style u-custom-color-1 u-btn-7"
              >
                20 Students
              </a>
              <h3 className="u-text u-text-6">Arabic</h3>
            </div>
          </div>
          <div className="u-container-style u-custom-color-2 u-expanded-width u-group u-shape-rectangle u-group-8">
            <div className="u-container-layout u-container-layout-12">
              <div className="u-container-style u-custom-color-1 u-group u-preserve-proportions u-shape-circle u-group-9">
                <div className="u-container-layout u-valign-middle ">
                  <p className="u-text u-text-default u-text-7">50%</p>
                </div>
              </div>
              <a
                href="https://nicepage.app"
                className="u-border-none u-btn u-button-style u-custom-color-1 u-btn-8"
              >
                20 Students
              </a>
              <h3 className="u-text u-text-8">Urdu</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="u-border-3 u-border-palette-1-base u-container-style u-group u-radius-17 u-shape-round u-group-10">
        <div className="u-container-layout u-container-layout-14">
          <span className="u-border-2 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-icon-1">
            <img
              src="images/1120619_businessman_client_man_manager_person_icon.png"
              alt=""
            />
          </span>
          <a
            href="https://nicepage.com/c/tabs-website-templates"
            className="u-border-none u-btn u-button-style u-custom-color-1 u-btn-9"
          >
            {" "}
            Assistant Professor
          </a>
        </div>
      </div>
      <div className="u-border-2 u-border-custom-color-2 u-container-style u-group u-radius-19 u-shape-round u-white u-group-11">
        <div className="u-container-layout u-container-layout-15">
          <a
            // href="https://nicepage.com/wordpress-themes"
            className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-radius-19 u-btn-10"
          >
            Calendar
          </a>
        </div>
      </div>
      <div className="u-border-3 u-border-palette-1-base u-container-style u-group u-radius-19 u-shape-round u-group-12">
        <div className="u-container-layout u-container-layout-16">
          <span className="u-file-icon u-icon u-icon-2">
            <img src="images/148974.png" alt="" />
          </span>
          <a
            href="https://nicepage.com/c/gallery-html-templates"
            className="u-border-none u-btn u-button-style u-custom-color-1 u-btn-11"
          >
            {" "}
            Today's Lectures
            <span style={{ fontWeight: 700 }} />
          </a>
          <a
            href="https://nicepage.com/wysiwyg-html-editor"
            className="u-border-none u-btn u-button-style u-custom-color-1 u-btn-12"
          >
            Start
          </a>
          <p className="u-text u-text-default u-text-9">Maths</p>
          <a
            href="https://nicepage.com/wysiwyg-html-editor"
            className="u-border-none u-btn u-button-style u-custom-color-1 u-btn-13"
          >
            Start
          </a>
          <p className="u-text u-text-default u-text-10">English</p>
        </div>
      </div>
    </div>
  </section>
 
    

</>

</div>
};
 export default TeacherDashboard;
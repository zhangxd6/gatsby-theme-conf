import React, { useEffect } from "react"
import "./navbar.css"

export default () => {
  useEffect(() => {
    const handleScroll = () => {
      let navbar = window.document.getElementsByClassName("navbar")[0]
      const scrollBarPosition = window.pageYOffset | document.body.scrollTop;
      if (scrollBarPosition > 200) {
        navbar.classList.add("top-nav-collapse")
      } else {
        navbar.classList.remove("top-nav-collapse")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <header id="header-wrap">
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <span className="icon-menu" />
              <span className="icon-menu" />
              <span className="icon-menu" />
            </button>
            <a href="index.html" className="navbar-brand"><i/></a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="#header-wrap">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedules">
                  schedules
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#speakers">
                  Speakers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#faq">
                  Faq
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#sponsors">
                  Sponsors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactus">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

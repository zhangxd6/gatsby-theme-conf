import React from "react"
import Helmet from "react-helmet"
import NavBar from "./navbar"
import Slide from "./slides"
import Section from "./sectionlayout"
import About from "./about"
import Why from "./whyus"
import Schedule from "./schedules"
import Speaker from "./speaker"
import Gallery from "./gallery"
import Sponsor from "./sponsors"
import Contact from "./contactus"
import { Footer } from "theme-ui"
import CopyRight from "./footer"
import * as loadScript from "simple-load-script"
class Main extends React.Component {
  componentDidMount() {
    loadScript("https://code.jquery.com/jquery-3.2.1.slim.min.js", {
      inBody: true,
    }).then(() =>
      loadScript(
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        { inBody: true }
      ).then(()=>{
        
      })
    )
  }

  render() {
    let { pageContext } = this.props
    return (
      <>
        <Helmet title={pageContext.name}>
          <title>{pageContext.name}</title>
          <meta
            name="description"
            content={pageContext.description.description}
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="//use.fontawesome.com/releases/v5.0.7/css/all.css"
          />
        </Helmet>

        <>
          <NavBar />
          <Slide slides={pageContext.slides} />
          <Section
            title="About This Event"
            subtitile="Gulf Coast Code Camp"
            id="about"
            expand={false}
          >
            <About description={pageContext.description.description} />
          </Section>
          <Section
            title="Why Us"
            subtitile="Gulf Coast Code Camp"
            id="why"
            expand={true}
          >
            <Why why={pageContext.why} />
          </Section>
          <Section
            title="Event Schedules"
            subtitile="Gulf Coast Code Camp"
            id="schedules"
            expand={false}
          >
            <Schedule schedule={pageContext.tracks} />
          </Section>
          <Section
            title="Who's speaking"
            subtitile="Gulf Coast Code Camp"
            id="speakers"
            expand={true}
          >
            <Speaker speakers={pageContext.speakers} />
          </Section>
          <Section
            title="Event Gallery"
            subtitile="Gulf Coast Code Camp"
            id="gallery"
            expand={false}
          >
            <Gallery gallery={pageContext.gallerys} />
          </Section>

          <Section
            title="Sponsors"
            subtitile="Gulf Coast Code Camp"
            id="sponsors"
            expand={true}
          >
            <Sponsor sponsors={pageContext.sponsors} />
          </Section>
          <Section
            title="Contact Us"
            subtitile="Gulf Coast Code Camp"
            id="contactus"
            expand={false}
          >
            <Contact />
          </Section>
        </>
        <Footer>
          <CopyRight />
        </Footer>
      </>
    )
  }
}

export default Main

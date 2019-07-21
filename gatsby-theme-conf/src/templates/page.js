import React from "react"
import Helmet from "react-helmet"
import NavBar from "../components/navbar"
import Slide from "../components/slides"
import Section from "../components/sectionlayout"
import About from "../components/about";
import Why from "../components/whyus";
import Schedule from "../components/schedules"
import Speaker from "../components/speaker"
import Gallery from "../components/gallery"
import Sponsor from "../components/sponsors"
import Contact from "../components/contactus"
const PageTemplate = ({ pageContext }) => (
  <>
    <Helmet title={pageContext.name}>
      <title>{pageContext.name}</title>
      <meta name="description" content={pageContext.description.description} />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"/>
    </Helmet>
   
    <>
      <NavBar />
      <Slide slides={pageContext.slides} />
      <Section title="About This Event" subtitile="Gulf Coast Code Camp" id="about" expand={false} >
        <About description={pageContext.description.description}></About>
      </Section>
      <Section title="Why Us" subtitile="Gulf Coast Code Camp" id="why" expand={true} >
        <Why why={pageContext.why}></Why>
      </Section>
      <Section title="Event Schedules" subtitile="Gulf Coast Code Camp" id="schedules" expand={false} >
        <Schedule scheudle={pageContext.tracks}></Schedule>
      </Section>
      <Section title="Who's speaking" subtitile="Gulf Coast Code Camp" id="speakers" expand={true} >
        <Speaker speakers={pageContext.speakers}></Speaker>
      </Section>
      <Section title="Event Gallery" subtitile="Gulf Coast Code Camp" id="gallery" expand={false} >
        <Gallery gallery={pageContext.gallerys}></Gallery>
      </Section>
      {/* <Section title="Ask Question" subtitile="Gulf Coast Code Camp" id="faq" expand={false} >
        <FAQ faq={pageContext.faq}></FAQ>
      </Section> */}
      <Section title="Sponsors" subtitile="Gulf Coast Code Camp" id="sponsors" expand={true} >
        <Sponsor sponsors={pageContext.sponsors}></Sponsor>
      </Section>
      <Section title="Contact Us" subtitile="Gulf Coast Code Camp" id="contactus" expand={false} >
        <Contact></Contact>
      </Section>
    </>
  </>
)

export default PageTemplate

import React from "react"
import { Layout, Main, Container } from "theme-ui"
import Helmet from "react-helmet"
import NavBar from "../components/navbar"
import Slide from "../components/slides"

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
    </Helmet>
    <>
      <NavBar />
      <Slide slides={pageContext.slides} />
    </>

    <Layout>
      <Main>
        <Container>
          <pre>{JSON.stringify(pageContext, null, 2)}</pre>
        </Container>
      </Main>
    </Layout>
  </>
)

export default PageTemplate

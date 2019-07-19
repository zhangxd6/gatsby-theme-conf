import React from "react"
import {  Layout, Header, Main, Container, Styled } from "theme-ui"

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <Header>
      <div>thisi is {pageContext.name}</div>
      </Header>
    <Main>
      <Container>
        <pre>
           {JSON.stringify(pageContext,null,2)}
        </pre>
      </Container>

    </Main>
  </Layout>
)

export default PageTemplate

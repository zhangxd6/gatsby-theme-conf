import React from "react"
import { Layout as StyledLayout, Main, Container } from "theme-ui"
import "./sectionlayout.css"
const Layout = ({ title, subtitile, id, expand, children }) => {
  const b =expand?{backgroundColor: '#f3f4f3'}:{backgroundColor: 'inherit'}
  return (
    <StyledLayout>
      <div style={b}>
        <Main>
          <Container>
            <div className="anchor" id={id} />
            <div className="sectionheader">
              <div className="sectiontitle">{title}</div>
              <div className="sectionsubtitle">{subtitile}</div>
            </div>
            {children}
          </Container>
        </Main>
      </div>
    
    </StyledLayout>
  )
}

export default Layout

import React from "react"
import "./sponsors.css"

export default ({ sponsors }) => {
  return (
    <div className="sponsorscontainer">
      {sponsors &&
        sponsors.map((w, i) => {
          return (
            <div className="sponsor">
              <img className="img-fluid" src={w.logo.fixed.src} alt={w.name} />
              <a href={"http://" + w.url}>
                <p>{w.name}</p>
              </a>
            </div>
          )
        })}
    </div>
  )
}

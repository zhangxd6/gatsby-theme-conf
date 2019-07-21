import React from "react"
import "./whyus.css"

export default ({ why }) => {
  return (
    <div className="whycontainer">
      {why &&
        why.map(
          (w,i) => {
           return <div className="why-item padding-none" key={w.id}>
              <div className="icon">
                <i className={"far " + w.iconClass} />
              </div>
              <div className="why-content">
                <h3>
                  <a href="#about">{w.name}</a>
                </h3>
                <p>{w.description}</p>
              </div>
            </div>
          })
        }
    </div>
  )
}

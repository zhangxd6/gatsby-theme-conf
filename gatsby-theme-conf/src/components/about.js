import React from "react"
import "./about.css"

export default ({ description }) => {
  return (
    <div className="about-item">
      <div className="about-text">
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

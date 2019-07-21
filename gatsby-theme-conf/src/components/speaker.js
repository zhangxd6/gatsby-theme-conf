import React from "react"
import "./speakers.css"

export default ({ speakers }) => {
  return (
    <div className="speakerscontainer">
      {speakers &&
        speakers.map((w, i) => {
          return (
            <div className="speaker">
              <div className="speaker-img">
                <img
                  className="img-fluid"
                  src="https://d33wubrfki0l68.cloudfront.net/e64651919ddbd3333b9fe01c4109e38bf1935fc8/75d07/assets/img/team/team-01.jpg"
                  alt=""
                />
                <div className="info-text">
                  <h3>
                    <a href="#speakers">{w.name}</a>
                  </h3>
                  <p>{w.bio.bio}</p>
                </div>
                <div className="speaker-overlay">
                  <div className="speaker-detail">
                    <h3>{w.name}</h3>
                    <p>{w.bio.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

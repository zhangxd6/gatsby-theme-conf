import React from "react"
import "./gallery.css"

export default ({ gallery }) => {
  return (
    <div className="gallerycontainer">

      {gallery &&
        gallery.map((w, i) => {
          return (
            <div className="gallery-box">
              <div className="img-thumb">
                <img
                  className="img-fluid"
                  src={w.image.fixed.src}
                  alt=""
                />
              </div>
            </div>
          )
        })}
    </div>
  )
}

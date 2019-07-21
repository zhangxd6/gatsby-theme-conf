import React from "react"
import './slides.css'
export default props => {
  const slides = props.slides;
  
  return <>{slides && 
    <div id="main-slide" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((e,i) => {
          return <li key={'i-'+ e.id} data-target="#main-slide" data-slide-to={i} className={i===0? 'active':''}></li>
        })}
      </ol>
      <div className ="carousel-inner">
        {slides.map((e,i) => {
                 return   (
                 <div key={'c-'+ e.id}  className={i===0?'carousel-item active':'carousel-item'}>
                    <img className="d-block w-100 slide-img" src={e.backgroundImage.fluid.src} alt={e.mainTitle}/>
                    <div className="carousel-caption d-md-block">
                      <p className="fadeInUp wow" data-wow-delay=".6s">{e.title}</p>
                      <h1 className="wow fadeInDown heading" data-wow-delay=".4s">{e.mainTitle}</h1>
                      {e.action && <a href={e.action} className="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">Explore More</a>}
                    </div>
                  </div>)
        })}
      </div>
    </div>
    }</>
}

import React from "react"
import "./contactus.css"

export default () => (
  <div className="row contactcontainer">
    <div className="col-sm-3 contactaddress">
      <div>
        <h4>Our Office</h4>
        <p>123 Main Street</p>
        <p>Mobile AL 36605</p>
        <p>USA</p>
      </div>

      <ul>
        <li >
          <i className="fab fa-twitter" />
        </li>
        <li>
          <i className="fab fa-facebook" />
        </li>
        <li>
          <i className="fab fa-instagram" />
        </li>
      </ul>
    </div>
    <form name="contact" className="col-sm-9" netlify="true" method="post">
      <div className="form-group row">
        <label htmlFor="inputname" className="col-sm-2 col-form-label">
          Your Name:
        </label>
        <input
          id="inputname"
          className="form-control col-sm-10"
          type="text"
          name="name"
        />
      </div>
      <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Your Email:
        </label>
        <input
          id="inputEmail3"
          className="form-control col-sm-10"
          type="email"
          name="email"
        />
      </div>
      <div className="form-group row">
        <label htmlFor="inputMessage" className="col-sm-2 col-form-label">
          {" "}
          Message:
        </label>
        <textarea
          id="inpuMessage"
          className="form-control col-sm-10"
          name="message"
        />
      </div>

      <button className="btn btn-primary btn-lg" type="submit">
        Send
      </button>
    </form>
  </div>
)

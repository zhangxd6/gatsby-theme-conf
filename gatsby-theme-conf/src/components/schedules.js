import React from "react"
import "./schedules.css"
import moment from "moment"


export default ({ schedule }) => {
  return (
    <div className="scheudlecontainer">
      <div className="track list-group" role="tablist">
        {schedule &&
          schedule.map((w, i) => {
            return (
              <div
                className={
                  i === 0
                    ? "track-info list-group-item list-group-item-action active"
                    : "track-info list-group-item list-group-item-action"
                }
                id={w.id}
                data-toggle="list"
                href={"#list-" + w.id}
                role="tab"
                aria-controls={w.name}
              >
                <h4>{w.name}</h4>
                <p>{w.room}</p>
              </div>
            )
          })}
      </div>
      <div className="sessions tab-content">
        {schedule &&
          schedule.map((w, i) => {
            return (
              <div
                className={
                  i === 0
                    ? "track-sessions tab-pane fade active show"
                    : "track-sessions tab-pane fade"
                }
                id={"list-" + w.id}
                role="tabpanel"
                aria-labelledby={w.name}
              >
                {w.sessions &&
                  w.sessions.map(s => {
                    return (
                      <div className="card">
                        <div className="card-header">
                          <span className="session-time">
                            {"Time:" + moment(s.time)
                              .local()
                              .format("hh:mm A")}
                          </span>
                          <h4>{s.title}</h4>
                          <h5 className="speaker">
                            {s.speakers &&
                              s.speakers.map(ss => {
                                return <span className="alert alert-secondary">{ss.name}</span>
                              })}
                          </h5>
                        </div>
                        <div className="card-body">
                          <p>{s.description.description}</p>
                        </div>
                      </div>
                    )
                  })}
              </div>
            )
          })}
      </div>
    </div>
  )
}

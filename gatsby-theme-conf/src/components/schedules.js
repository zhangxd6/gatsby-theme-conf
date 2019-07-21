import React from "react"
import "./schedules.css"

export default ({scheudle})=>(<>
<pre>{JSON.stringify(scheudle,null,2)}</pre>
</>)
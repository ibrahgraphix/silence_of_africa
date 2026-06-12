import React from 'react'
import "./TermsData.css"

const TermsData = (props) => {
  return (
   
  <article>
  <div className="title-term">
    <h1 className="condition-header">{props.title}</h1>
  </div>
  <div className="body">

    <p className="condition-body">
    {props.description}
    </p>

  </div>
  </article>
  )
}

export default TermsData
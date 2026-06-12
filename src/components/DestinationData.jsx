import React from 'react'
import "./Destinations.css"
import { motion } from "framer-motion"

const DestinationData = (props) => {
  return (
    <article>
        <div className={props.cname}>
            <div className="dest-text">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
            <motion.div className="dest-img">
                <img src={props.bg} alt="img" />
                <img src={props.bg2} alt="img" />
            </motion.div>

        </div>
    </article>
  )
}

export default DestinationData
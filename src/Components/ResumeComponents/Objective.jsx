import React from 'react'
import './Styles/Objective.css';

export default function Objective(props) {


  return (
    <div className="cvObjective fromLeft">
        <div className="objTitle">
            <h2>Objective</h2>
        </div>
        <div className="objtDescription">
            {/* <h4>Work with a start up that aims to grow bigger over time to improve my skills and abilities.</h4> */}
            <h4>{props.objDescription}</h4>
        </div>
    </div>
  )
}
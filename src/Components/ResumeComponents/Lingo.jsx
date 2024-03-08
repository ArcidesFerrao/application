import React from 'react'
import './Styles/Lingo.css';

export default function Lingo(props) {


  return (
    <div className="cvLingo fromLeft">
        <div className="lingTitle">
            <h2>Language</h2>
        </div>
        <div className="lang">
            <h4>{props.language}</h4> 
            {/* <h4>Portuguese</h4> */}
        </div>
        <div className="lingLevel">
            <h4>{props.fluent}</h4>
            {/* <h4>Fluent</h4> */}
        </div>
    </div>
  )
}
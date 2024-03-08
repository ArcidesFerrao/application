import React from 'react';
import './Styles/Education.css';

export default function Education(props) {
  return (
    <div className="cvEducation fromRight">
        <div className="edTitle">
            <h2>Education</h2>
        </div>
        <div className="cvDetail">
            {/* <h3>ITC - Instituto de Transportes e Comunicacoes</h3> */}
            <h3>{props.schoolName}</h3>
        </div>
        <div className="detailDate">
            <h3>{props.schoolDate}</h3>
            
            {/* <h3 className="cvDate">
                2011-2014
            </h3> */}
        </div>
        <div className="edDegree">
            {/* <h4>Tecnico de Sistemas Informaticos</h4> */}
            <h4>{[props.degree]}</h4>
        </div>

    </div>
  )
}

import React from 'react';
import './Styles/Experience.css';

export default function Experience(props) {
    console.log(props);
    
    return (
        <div className="cvExperience">
            <div className="expTitle">
                <h2>Experience</h2>
            </div>
            <div className="cvDetail">
                <h3>{props.workPlace}</h3>
            </div>
            <div className="detailDate">
                <h3 className="cvDate">
                    2014-2015
                </h3>
            </div>
            <div className="expDescription">
                <h4>At the internship the main task was problem solving, taking care of every technological detais that needs to be addressed</h4>
            </div>

        </div>
  )
}

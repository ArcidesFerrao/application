import React from 'react';
import './Styles/Education.css';

export default function Education(props) {
  return (
    <div className="cvEducation fromRight">
        <div className="edTitle">
            <h2>Education</h2>
        </div>

        <div className="first-sc">

            <div className="cvDetail">
                <h3>{props.schoolName}</h3>
            </div>
            <div className="detailDate">
                <h3>{props.schoolDate}</h3>
            </div>
            <div className="edDegree">
                <h4>{props.degree}</h4>
            </div>
        </div>

        {props.schoolNameNd && props.schoolDateNd && props.degreeNd && <div className='second-sc'>
                <div className="cvDetail">
                    <h3>{props.schoolNameNd}</h3>
                </div>
                <div className="detailDate">
                    <h3>{props.schoolDateNd}</h3>
                </div>
                <div className="edDegree">
                    <h4>{props.degreeNd}</h4>
                </div>
            </div>

        }

    </div>
  )
}

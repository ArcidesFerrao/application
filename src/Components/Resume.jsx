import React from 'react';
import './Styles/Resume.css';

import Contact from './ResumeComponents/Contact';
import Objective from './ResumeComponents/Objective';
import Header from './ResumeComponents/Header';
import Education from './ResumeComponents/Education';
import Lingo from './ResumeComponents/Lingo';
import Experience from './ResumeComponents/Experience';

export default function Resume(props) {
 
  console.log(props);
  
  const handleClick = () => {
    
    props.pageBackground.classList.remove('active');
    
    const resOut = document.getElementById('res');
    
      resOut.classList.remove('slideInTop');
      resOut.classList.add('moveOut');
        
      setTimeout(() => {
        props.getShow(!props.show);
      }, 1000);
    };

  return (
    <div className='resume slideInTop' id='res' >
        <Header 
          person={props.person}
          profession={props.profession}
        />
        <Contact 
          city={props.city}
          email={props.email}
          git={props.git}
          phone={props.phone}
        />
        <Experience
            workPlace={props.workPlace}
            workDescription={props.workDescription}
            workDate={props.workDate}
        />
        <Objective 
          objDescription={props.objDescription} 
        />
        <Education className='fromRight'
          schoolName={props.schoolName}
          schoolDate={props.schoolDate}
          degree={props.degree}
          degreeNd={props.degreeNd}
          schoolNameNd={props.schoolNameNd}
          schoolDateNd={props.schoolDateNd}

        />

        <Lingo 
          language={props.language}
          fluent={props.fluent}
        />
        <button className='editButton b' 
          onClick={handleClick}
        >Edit</button>
    </div>
  )
}

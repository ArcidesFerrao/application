import './App.css';
import PageForm from './Components/PageForm';
import Resume from './Components/Resume';

import { useEffect, useState } from 'react';
import { Form, FormProvider, useForm, useFormContext } from "react-hook-form";



function App() {
  const methods = useForm();

  const [person, setPerson] = useState({
    fullName: "Henry Ford",
    city: "London",
    profession: "Software Developer",
    phone: "+25882123456789",
    email: "henry@ford.com",
    git: "",
    dateSchool:"02-2024",
    dateWork: "01-2024",
    fluent:"",
    school: "Harvard",
    skill: "React Js",
    workPlace: "DevOps",
  });

  const [dateWork, setDateWork] = useState();
  const [dateSchool, setDateSchool] = useState();
  const [show, setShow] = useState(false);
  const [move, setMove] = useState(false);

  const pageBack = document.getElementById('Application');
  
  const onSubmit = data => {
    console.log(data);
    // console.log(data.date);
    const pageBack = document.getElementById('Application');
    pageBack.classList.add('active');
    setTimeout(() => {
      setPerson(data);
      setShow(!show);
    }, 1000);
  }
  


  return (
    <div className="Application" id="Application">
      {!show ? (
        <FormProvider {...methods} >
          <form id='information' onSubmit={methods.handleSubmit(onSubmit)}>
            <PageForm move={move}/>
          </form>
        </FormProvider>
      ) : (
        <div >
          <Resume
            person={person.fullName} 
            profession={person.profession} 
            phoneNumber={person.phone} 
            email={person.email}
            gitHub={person.git}
            city={person.city}
            jobTitle={person.jobTitle}
            workPlace={person.workPlace}
            location={person.location}
            workDescription={person.workDescription}
            degree={person.degree}
            skill={person.skill}
            school={person.school}
            skillDescription={person.skillDescription}
            language={person.language}
            fluent={person.level}
            dateWork={dateWork}
            dateSchool={dateSchool}
            show={show}
            getShow={show => setShow(show)}
            pageBackground={pageBack}
            getMove={move => setMove(move)}
          />
        </div>
      )}      
    </div>
  );
}

export default App;

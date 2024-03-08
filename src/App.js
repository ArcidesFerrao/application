import './App.css';
import PageForm from './Components/PageForm';
import Resume from './Components/Resume';

import { useEffect, useState } from 'react';
import { Form, FormProvider, useForm, useFormContext } from "react-hook-form";



function App() {
  const methods = useForm();

  const [person, setPerson] = useState({
    fullName: "",
    city: "",
    profession: "",
    phone: "",
    email: "",
    git: "",
    schoolDate:"",
    workDate: "",
    fluent:"",
    school: "",
    skill: "",
    workPlace: "",
  });

  // const [dateWork, setDateWork] = useState();
  // const [dateSchool, setDateSchool] = useState();
  const [show, setShow] = useState(false);
  const [move, setMove] = useState(false);

  const pageBack = document.getElementById('Application');
  
  const onSubmit = data => {
    console.log(data);
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
            workDate={person.workDate}
            schoolDate={person.schoolDate}
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

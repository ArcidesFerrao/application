import "./App.css";
import PageForm from "./Components/PageForm";
import Resume from "./Components/Resume";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function App() {
  const methods = useForm();

  const [person, setPerson] = useState({
    fullName: "",
    city: "",
    objDescription: "",
    profession: "",
    email: "",
    git: "",
    degree: "",
    degreeNd: "",
    schoolDate: "",
    schoolDateNd: "",
    language: "",
    level: "",
    schoolName: "",
    schoolNameNd: "",
    workDate: "",
    workDescription: "",
    workPlace: "",
  });

  const [show, setShow] = useState(false);
  const [move, setMove] = useState(false);

  const pageBack = document.getElementById("Application");

  const onSubmit = (data) => {
    console.log(data);
    const pageBack = document.getElementById("Application");
    pageBack.classList.add("active");
    setTimeout(() => {
      setPerson(data);
      setShow(!show);
    }, 1000);
  };

  return (
    <div className="Application" id="Application">
      {!show ? (
        <FormProvider {...methods}>
          <form id="information" onSubmit={methods.handleSubmit(onSubmit)}>
            <PageForm move={move} />
          </form>
        </FormProvider>
      ) : (
        <div>
          <Resume
            person={person.fullName}
            city={person.city}
            objDescription={person.objDescription}
            profession={person.profession}
            email={person.email}
            gitHub={person.git}
            language={person.language}
            fluent={person.level}
            workPlace={person.workPlace}
            workDate={person.workDate}
            workDescription={person.workDescription}
            degree={person.degree}
            degreeNd={person.degreeNd}
            schoolName={person.schoolName}
            schoolNameNd={person.schoolNameNd}
            schoolDate={person.schoolDate}
            schoolDateNd={person.schoolDateNd}
            show={show}
            getShow={(show) => setShow(show)}
            getMove={(move) => setMove(move)}
            pageBackground={pageBack}
          />
        </div>
      )}
    </div>
  );
}

export default App;

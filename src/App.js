import React, { useState } from 'react'
import './App.css';
import Education from './components/Education';
import Personal from './components/Personal';
import Work from './components/Work';
import Save from './components/Save';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [work, setWork] = useState({
    companyName: "",
    companyStart: "",
    companyEnd: "",
    jobTitle: ""
  })
  const [education, setEducation] = useState({
    school: "",
    schoolStart: "",
    schoolEnd: "",
    course: ""
  })

  function saveCV(){
    console.log(work, personalInfo, education)
  }


  return (
    <div className="App">
      <Personal 
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <Education 
        education={education}
        setEducation={setEducation}
      />
      <Work 
        work={work}
        setWork={setWork}
      />
      <Save 
        saveCV={saveCV}
      />

    </div>
  );
}

export default App;

import React, { useState } from 'react'
import './App.css';
import Education from './components/Education';
import Personal from './components/Personal';
import Work from './components/Work';
import Save from './components/Save';

function App() {
  const [cv, setCv] = useState({})

  const [saveStatus, setSaveStatus] = useState(false)

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
    // console.log(work, personalInfo, education)
    if (personalInfo.firstName && personalInfo.lastName && personalInfo.email && personalInfo.phone && education.school && education.schoolStart && education.schoolEnd && education.course) {
      setCv({
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
        email: personalInfo.email,
        phone: personalInfo.phone,
        school: education.school,
        schoolStart: education.schoolStart,
        schoolEnd: education.schoolEnd,
        course: education.course,
        companyName: work.companyName,
        companyStart: work.companyStart,
        companyEnd: work.companyEnd,
        jobTitle: work.jobTitle
      })
      setSaveStatus(true)
    } else {
      window.alert("Please fill in the Education and Personal Details fields.")
    }
  }

  function DisplayCV() {
    return (
      <div className='cv--display'>
        <div className="cv--display--personal">
          <p className="heading">PERSONAL DETAILS</p>
          <p>Name: {cv.firstName} {cv.lastName} </p>
          <p>Email: {cv.email}</p>
          <p>Phone: {cv.phone}</p>
        </div>
        <div className="cv--display--school">
          <p>EDUCATION</p>
          <p>School: {cv.school}</p>
          <p>Start: {cv.schoolStart}</p>
          <p>End: {cv.schoolEnd}</p>
          <p>Course: {cv.course}</p>
        </div>
        <div className="cv--display--company">
          <p>WORK EXPERIENCE</p>
          <p>Company Name: {cv.companyName}</p>
          <p>Start: {cv.companyStart}</p>
          <p>End: {cv.companyEnd}</p>
          <p>Job Title: {cv.jobTitle}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {saveStatus ? <DisplayCV /> : 
        <div>
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
      }
    </div>
  );
}

export default App;

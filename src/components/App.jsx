import "../styles/App.css";
import React from "react";
import Controls from "./Controls.jsx";
import Preview from "./Preview.jsx";

function App() {
  // state variable for personal info:
  const [personalInfo, setPersonalInfo] = React.useState({
    firstName: "",
    lastName: "",
    description: "",
    profilePictureFile: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    linkedIn: "",
    github: "",
  });

  function handlePersonalInfoChange(_, field, value) {
    setPersonalInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // state variable for work experience:
  const [experiences, setExperiences] = React.useState([
    {
      position: "",
      company: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  function addExperience() {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        position: "",
        company: "",
        city: "",
        country: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  }

  function removeExperience(index) {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((_, i) => i !== index)
    );
  }

  function handleExperiencesChange(index, field, value) {
    setExperiences((prevExperiences) => {
      const newExperiences = [...prevExperiences];
      newExperiences[index][field] = value;
      return newExperiences;
    });
  }

  // state variables for education:
  const [educations, setEducations] = React.useState([
    {
      university: "",
      degree: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function addEducation() {
    setEducations((prevEducations) => [
      ...prevEducations,
      {
        university: "",
        degree: "",
        city: "",
        country: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function removeEducation(index) {
    setEducations((prevEducations) =>
      prevEducations.filter((_, i) => i !== index)
    );
  }

  function handleEducationsChange(index, field, value) {
    setEducations((prevEducations) => {
      const newEducations = [...prevEducations];
      newEducations[index][field] = value;
      return newEducations;
    });
  }

  const [skills, setSkills] = React.useState([
    {
      skillName: "",
      proficiencyPercentage: "",
    },
  ]);

  function addSkill() {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        skillName: "",
        proficiencyPercentage: "",
      },
    ]);
  }

  function removeSkill(index) {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  }

  function handleSkillsChange(index, field, value) {
    setSkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills[index][field] = value;
      return newSkills;
    });
  }

  // state variables for skills:
  //const [skills, setSkills] = React.useState([]);

  // state variables for projects:
  //const [projects, setProjects] = React.useState([]);

  // state variables for certifications:
  //const [certifications, setCertifications] = React.useState([]);

  // state variables for languages:
  //const [languages, setLanguages] = React.useState([]);

  // state variables for interests:
  //const [interests, setInterests] = React.useState([]);

  return (
    <div id="app-container">
      <Controls
        personalInfo={personalInfo}
        handlePersonalInfoChange={handlePersonalInfoChange}
        experiences={experiences}
        handleExperiencesChange={handleExperiencesChange}
        addExperience={addExperience}
        removeExperience={removeExperience}
        educations={educations}
        handleEducationsChange={handleEducationsChange}
        addEducation={addEducation}
        removeEducation={removeEducation}
        skills={skills}
        handleSkillsChange={handleSkillsChange}
        addSkill={addSkill}
        removeSkill={removeSkill}
        /*
        skills={skills}
        projects={projects}
        certifications={certifications}
        languages={languages}
        interests={interests} */
      />
      <Preview />
    </div>
  );
}

export default App;

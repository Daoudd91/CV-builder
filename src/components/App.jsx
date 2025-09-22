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

  const [projects, setProjects] = React.useState([
    {
      projectName: "",
      projectDescription: "",
      projectLink: "",
    },
  ]);

  function addProject() {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        projectName: "",
        projectDescription: "",
        projectLink: "",
      },
    ]);
  }

  function removeProject(index) {
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
  }

  function handleProjectsChange(index, field, value) {
    setProjects((prevProjects) => {
      const newProjects = [...prevProjects];
      newProjects[index][field] = value;
      return newProjects;
    });
  }

  const [certifications, setCertifications] = React.useState([
    {
      certificationName: "",
      issuingOrganization: "",
      issueDate: "",
    },
  ]);

  function addCertification() {
    setCertifications((prevCertifications) => [
      ...prevCertifications,
      {
        certificationName: "",
        issuingOrganization: "",
        issueDate: "",
      },
    ]);
  }

  function removeCertification(index) {
    setCertifications((prevCertifications) =>
      prevCertifications.filter((_, i) => i !== index)
    );
  }

  function handleCertificationsChange(index, field, value) {
    setCertifications((prevCertifications) => {
      const newCertifications = [...prevCertifications];
      newCertifications[index][field] = value;
      return newCertifications;
    });
  }

  const [languages, setLanguages] = React.useState([
    {
      languageName: "",
      proficiencyLevel: "",
    },
  ]);

  function addLanguage() {
    setLanguages((prevLanguages) => [
      ...prevLanguages,
      {
        languageName: "",
        proficiencyLevel: "",
      },
    ]);
  }

  function removeLanguage(index) {
    setLanguages((prevLanguages) =>
      prevLanguages.filter((_, i) => i !== index)
    );
  }

  function handleLanguagesChange(index, field, value) {
    setLanguages((prevLanguages) => {
      const newLanguages = [...prevLanguages];
      newLanguages[index][field] = value;
      return newLanguages;
    });
  }

  const [interests, setInterests] = React.useState([
    {
      interestName: "",
    },
  ]);

  function addInterest() {
    setInterests((prevInterests) => [
      ...prevInterests,
      {
        interestName: "",
      },
    ]);
  }

  function removeInterest(index) {
    setInterests((prevInterests) =>
      prevInterests.filter((_, i) => i !== index)
    );
  }

  function handleInterestsChange(index, field, value) {
    setInterests((prevInterests) => {
      const newInterests = [...prevInterests];
      newInterests[index][field] = value;
      return newInterests;
    });
  }

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
        projects={projects}
        handleProjectsChange={handleProjectsChange}
        addProject={addProject}
        removeProject={removeProject}
        certifications={certifications}
        handleCertificationsChange={handleCertificationsChange}
        addCertification={addCertification}
        removeCertification={removeCertification}
        languages={languages}
        handleLanguagesChange={handleLanguagesChange}
        addLanguage={addLanguage}
        removeLanguage={removeLanguage}
        interests={interests}
        handleInterestsChange={handleInterestsChange}
        addInterest={addInterest}
        removeInterest={removeInterest}
      />
      <Preview />
    </div>
  );
}

export default App;

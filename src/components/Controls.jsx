import Collapsible from "./Collapsible";
import InputSet from "./InputSet";
import React from "react";

function Controls({
  personalInfo,
  handlePersonalInfoChange,
  experiences,
  handleExperiencesChange,
  addExperience,
  removeExperience,
  educations,
  handleEducationsChange,
  addEducation,
  removeEducation,
  skills,
  handleSkillsChange,
  addSkill,
  removeSkill,
  projects,
  handleProjectsChange,
  addProject,
  removeProject,
  certifications,
  handleCertificationsChange,
  addCertification,
  removeCertification,
  languages,
  handleLanguagesChange,
  addLanguage,
  removeLanguage,
  interests,
  handleInterestsChange,
  addInterest,
  removeInterest,
  setPersonalInfo,
  setExperiences,
  setEducations,
  setCertifications,
  setInterests,
  setLanguages,
  setProjects,
  setSkills,
}) {
  const [expAdded, setExpAdded] = React.useState(false);
  function handleAddExperience() {
    addExperience();
    setExpAdded(true);
  }

  const [eduAdded, setEduAdded] = React.useState(false);
  function handleAddEducation() {
    addEducation();
    setEduAdded(true);
  }

  const [skillAdded, setSkillAdded] = React.useState(false);
  function handleAddSkill() {
    addSkill();
    setSkillAdded(true);
  }

  const [projectAdded, setProjectAdded] = React.useState(false);
  function handleAddProject() {
    addProject();
    setProjectAdded(true);
  }

  const [certificationAdded, setCertificationAdded] = React.useState(false);
  function handleAddCertification() {
    addCertification();
    setCertificationAdded(true);
  }

  const [languageAdded, setLanguageAdded] = React.useState(false);
  function handleAddLanguage() {
    addLanguage();
    setLanguageAdded(true);
  }

  const [interestAdded, setInterestAdded] = React.useState(false);
  function handleAddInterest() {
    addInterest();
    setInterestAdded(true);
  }
  function fillDemo() {
    setPersonalInfo({
      firstName: "Daoud",
      lastName: "Daoud",
      description: "Daoud",
      profilePictureFile: "",
      jobTitle: "Web Developer",
      email: "daoud.daoud.1991@gmail.com",
      phone: "+963994567890",
      address: "Sultani st",
      city: "Zabadani",
      country: "Syria",
      linkedIn: "https://www.linkedin.com",
      github: "https://www.github.com",
    });
    setExperiences([
      {
        position: "web developer",
        company: "Syriatel Mobile Telecom",
        city: "Damascus",
        country: "Syria",
        startDate: "01-01-2016",
        endDate: "01-06-2019",
        description: "asfd sdgsd sdkj lfjbd lkadj bkjb ldafkja ",
      },
      {
        position: "iOS developer",
        company: "Syriatel Mobile Telecom",
        city: "Damascus",
        country: "Syria",
        startDate: "01-01-2018",
        endDate: "01-06-2019",
        description: "asfd sdgsd sdkj lfjbd lkadj bkjb ldafkja ",
      },
    ]);

    setEducations([
      {
        university: "Damascus University",
        degree: "Bachelor of Software Engineering",
        city: "Damascus",
        country: "Syria",
        startDate: "01-01-2010",
        endDate: "01-01-2016",
      },
      {
        university: "Damascus University",
        degree: "Bachelor of Software Engineering",
        city: "Damascus",
        country: "Syria",
        startDate: "01-01-2010",
        endDate: "01-01-2016",
      },
    ]);

    setSkills([
      {
        skillName: "HTML + CSS + JavaScript",
        proficiencyPercentage: "90%",
      },
      {
        skillName: "ASP.Net",
        proficiencyPercentage: "75%",
      },
      {
        skillName: "React.js",
        proficiencyPercentage: "30%",
      },
    ]);

    setCertifications([
      {
        certificationName: "ASP.Net MVC certification",
        issuingOrganization: "Syriatel Mobile Telecom",
        issueDate: "01-01-2017",
      },
      {
        certificationName: "ASP.Net MVC certification",
        issuingOrganization: "Syriatel Mobile Telecom",
        issueDate: "01-01-2017",
      },
    ]);

    setInterests([
      {
        interestName: "Learning new technologies",
      },
      {
        interestName: "Coding",
      },
    ]);

    setLanguages([
      {
        languageName: "Arabic",
        proficiencyLevel: "Native",
      },
      {
        languageName: "English",
        proficiencyLevel: "High Skilled",
      },
    ]);

    setProjects([
      {
        projectName: "Daaaag ds",
        projectDescription: "DAvsdk;sd sdsldksdnsldkjn ldsk nsldk nsdlf sndl ",
        projectLink: "https://myproject.pro",
      },
      {
        projectName: "Daaaag ds",
        projectDescription: "DAvsdk;sd sdsldksdnsldkjn ldsk nsldk nsdlf sndl ",
        projectLink: "https://myproject.pro",
      },
    ]);
  }

  return (
    <section id="controls">
      <button type="button" onClick={fillDemo}>
        Download
      </button>
      <Collapsible title="Personal Information">
        <InputSet data={personalInfo} onChange={handlePersonalInfoChange} />
      </Collapsible>
      <Collapsible
        title="Work Experience"
        itemAdded={expAdded}
        setItemAdded={setExpAdded}
      >
        {experiences.map((experience, index) => (
          <InputSet
            key={index}
            index={index}
            data={experience}
            onChange={handleExperiencesChange}
            onRemove={removeExperience}
          />
        ))}
        <button
          type="button"
          className="add-item-button"
          onClick={handleAddExperience}
        >
          Add experience
        </button>
      </Collapsible>
      <Collapsible
        title="Educations"
        itemAdded={eduAdded}
        setItemAdded={setEduAdded}
      >
        {educations.map((education, index) => (
          <InputSet
            key={index}
            index={index}
            data={education}
            onChange={handleEducationsChange}
            onRemove={removeEducation}
          />
        ))}
        <button
          type="button"
          className="add-item-button"
          onClick={handleAddEducation}
        >
          Add Education
        </button>
      </Collapsible>
      <Collapsible
        title="Skills"
        itemAdded={skillAdded}
        setItemAdded={setSkillAdded}
      >
        {skills.map((skill, index) => (
          <InputSet
            key={index}
            index={index}
            data={skill}
            onChange={handleSkillsChange}
            onRemove={removeSkill}
          />
        ))}
        <button
          type="button"
          className="add-item-button"
          onClick={handleAddSkill}
        >
          Add Skill
        </button>
      </Collapsible>
      <Collapsible
        title="Projects"
        itemAdded={projectAdded}
        setItemAdded={setProjectAdded}
      >
        {projects.map((project, index) => (
          <InputSet
            key={index}
            index={index}
            data={project}
            onChange={handleProjectsChange}
            onRemove={removeProject}
          />
        ))}
        <button
          type="button"
          className="add-item-button"
          onClick={handleAddProject}
        >
          Add Project
        </button>
      </Collapsible>
      <Collapsible
        title="Certifications"
        itemAdded={certificationAdded}
        setItemAdded={setCertificationAdded}
      >
        {certifications.map((certification, index) => (
          <InputSet
            key={index}
            index={index}
            data={certification}
            onChange={handleCertificationsChange}
            onRemove={removeCertification}
          />
        ))}
        <button
          type="button"
          className="add-item-button"
          onClick={handleAddCertification}
        >
          Add Certification
        </button>
      </Collapsible>
      <Collapsible
        title="Languages"
        itemAdded={languageAdded}
        setItemAdded={setLanguageAdded}
      >
        {languages.map((language, index) => (
          <InputSet
            key={index}
            index={index}
            data={language}
            onChange={handleLanguagesChange}
            onRemove={removeLanguage}
          />
        ))}
        <button
          type="button"
          className="add-item-button"
          onClick={handleAddLanguage}
        >
          Add Language
        </button>
      </Collapsible>

      <Collapsible
        title="Interests"
        itemAdded={interestAdded}
        setItemAdded={setInterestAdded}
      >
        {interests.map((interest, index) => (
          <InputSet
            key={index}
            index={index}
            data={interest}
            onChange={handleInterestsChange}
            onRemove={removeInterest}
          />
        ))}
        <button
          type="button"
          className="add-item-button"
          onClick={handleAddInterest}
        >
          Add Interest
        </button>
      </Collapsible>
    </section>
  );
}

export default Controls;

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

  return (
    <section id="controls">
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

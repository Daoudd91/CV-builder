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
  handleEnterestsChange,
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

      {/*  <Collapsible title="Education" />
      <Collapsible title="Skills" />
      <Collapsible title="Projects" />
      <Collapsible title="Certifications" />
      <Collapsible title="Languages" />
      <Collapsible title="Interests" />
      <Collapsible title="References" />
      <button id="add-section">Add Section</button> */}
    </section>
  );
}

export default Controls;

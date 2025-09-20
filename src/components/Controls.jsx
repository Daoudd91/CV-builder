import Collapsible from "./Collapsible";
import InputSet from "./InputSet";

function Controls({
  personalInfo,
  handlePersonalInfoChange,
  experiences,
  handleExperiencesChange,
  addExperience,
  removeExperience,
}) {
  return (
    <section id="controls">
      <Collapsible title="Personal Information">
        <InputSet data={personalInfo} onChange={handlePersonalInfoChange} />
      </Collapsible>

      <Collapsible title="Work Experience">
        {experiences.map((experience, index) => (
          <InputSet
            key={index}
            index={index}
            data={experience}
            onChange={handleExperiencesChange}
            onRemove={removeExperience}
          />
        ))}
        <button type="button" id="add-experience" onClick={addExperience}>
          Add experience
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

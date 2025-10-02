import "../styles/MainContent.css";

function MainContent({
  experiences,
  educations,
  skills,
  projects,
  certifications,
}) {
  function renderSectionHeader(name) {
    return <div className="section-header">{name}</div>;
  }
  function renderExperiences(experiences) {
    return (
      <div className="section">
        {renderSectionHeader("Experiences")}
        {experiences.map((exp) => (
          <div className="sub-section">
            <p className="large">{exp.position + " - " + exp.company}</p>
            <p className="large">{exp.city + " - " + exp.country}</p>
            <p className="large">{exp.startDate + " - " + exp.endDate}</p>
            <p className="section-description">{exp.description}</p>
          </div>
        ))}
      </div>
    );
  }

  function renderEducations(educations) {
    return (
      <div className="section">
        {renderSectionHeader("Education")}
        {educations.map((edu) => (
          <div className="sub-section">
            <p className="large">
              {edu.university + " - " + edu.city + ", " + edu.country}
            </p>
            <p className="section-description">{edu.degree}</p>
            <p className="section-description">
              {edu.startDate + " - " + edu.endDate}
            </p>
          </div>
        ))}
      </div>
    );
  }

  function renderProjects(projects) {
    return (
      <div className="section">
        {renderSectionHeader("Projects")}
        {projects.map((proj) => (
          <div className="sub-section">
            <p className="large">{proj.projectName}</p>
            <p className="section-description">{proj.projectDescription}</p>
            <p className="section-description">
              Project Link: <a href={proj.projectLink}>{proj.projectLink}</a>
            </p>
          </div>
        ))}
      </div>
    );
  }

  function renderCertifications(certifications) {
    return (
      <div className="section">
        {renderSectionHeader("Certifications")}
        {certifications.map((cert) => (
          <div className="sub-section">
            <p className="large">{cert.certificationName}</p>
            <p className="section-description">{cert.issuingOrganization}</p>
            <p className="section-description">{cert.issueDate}</p>
          </div>
        ))}
      </div>
    );
  }
  function renderSkills(skills) {
    return (
      <div className="section">
        {renderSectionHeader("Skills")}
        {skills.map((skill) => (
          <div className="sub-section skills-container">
            <p className="section-description">{skill.skillName}</p>
            <progress
              value={Number.parseInt(skill.proficiencyPercentage)}
              max={100}
              color="blue"
            />
            <p className="section-description">{skill.proficiencyPercentage}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="main-content">
      {experiences[0].position && renderExperiences(experiences)}
      {educations[0].university && renderEducations(educations)}
      {projects[0].projectName && renderProjects(projects)}
      {certifications[0].certificationName &&
        renderCertifications(certifications)}
      {skills[0].skillName && renderSkills(skills)}
    </div>
  );
}

export default MainContent;

import "../styles/Preview.css";
import CvHeader from "./CvHeader";
import ProfilePhoto from "./ProfilePhoto";
import SideContent from "./SideContent";

function Preview({
  personalInfo,
  experiences,
  educations,
  skills,
  projects,
  certifications,
  languages,
  interests,
}) {
  return (
    <section id="cv-preview">
      <div className="content">
        <CvHeader
          firstName={personalInfo.firstName}
          lastName={personalInfo.lastName}
          jobTitle={personalInfo.jobTitle}
        />
        <SideContent
          description={personalInfo.description}
          email={personalInfo.email}
          phone={personalInfo.phone}
          address={personalInfo.address}
          city={personalInfo.city}
          country={personalInfo.country}
          linkedIn={personalInfo.linkedIn}
          github={personalInfo.github}
          languages={languages}
          interests={interests}
        />
      </div>
      <div className="skewed-bar"></div>
      <ProfilePhoto photoFile={personalInfo.profilePictureFile} />
    </section>
  );
}

export default Preview;

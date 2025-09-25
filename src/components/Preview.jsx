import "../styles/Preview.css";
import CvHeader from "./CvHeader";
import ProfilePhoto from "./ProfilePhoto";

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
        ></CvHeader>
      </div>
      <div className="skewed-bar"></div>
      <ProfilePhoto photoFile={personalInfo.profilePictureFile} />
    </section>
  );
}

export default Preview;

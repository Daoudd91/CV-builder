import "../styles/CvHeader.css";

function CvHeader({ firstName, lastName, jobTitle }) {
  return (
    <div className="cv-header">
      <p className="first-name">{firstName}</p>
      <p className="last-name">{lastName}</p>
      <p className="job-title">{jobTitle}</p>
    </div>
  );
}

export default CvHeader;

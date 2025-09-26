import "../styles/SideContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
function SideContent({
  description,
  email,
  phone,
  address,
  city,
  country,
  linkedIn,
  github,
  languages,
  interests,
}) {
  function renderBlockHeader(name) {
    return <div className="side-section-header">{name}</div>;
  }
  function renderLanguages() {
    return (
      languages[0].languageName && (
        <div className="side-content-block">
          {renderBlockHeader("Languages")}
          <ul>
            {languages.map(
              (language) =>
                language.languageName && (
                  <li>
                    {language.languageName +
                      " (" +
                      language.proficiencyLevel +
                      ")"}
                  </li>
                )
            )}
          </ul>
        </div>
      )
    );
  }
  function renderInterests() {
    return (
      interests[0].interestName && (
        <div className="side-content-block">
          {renderBlockHeader("Interests")}
          <ul>
            {interests.map(
              (interest) =>
                interest.interestName && <li>{interest.interestName}</li>
            )}
          </ul>
        </div>
      )
    );
  }
  return (
    <div className="side-content">
      {description && (
        <div className="about-me">
          <p>About Me</p>
          <p>{description}</p>
        </div>
      )}
      <div className="contact-info">
        {phone && (
          <p>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            {" " + phone}
          </p>
        )}
        {email && (
          <p>
            <a href={email}>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              {" " + email}
            </a>
          </p>
        )}
        {address && (
          <p>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            {" " + address + ", " + city + ", " + country}
          </p>
        )}
        {linkedIn && (
          <p>
            <a href={linkedIn}>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              {" " + linkedIn}
            </a>
          </p>
        )}
        {github && (
          <p>
            <a href={github}>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              {" " + github}
            </a>
          </p>
        )}
      </div>
      {renderLanguages()}
      {renderInterests()}
    </div>
  );
}

export default SideContent;

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
            <FontAwesomeIcon
              icon={faPhone}
              className={"icon"}
            ></FontAwesomeIcon>
            {" " + phone}
          </p>
        )}
        {email && (
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={"icon"}
            ></FontAwesomeIcon>
            <a href={"mailto://" + email}>{" " + email}</a>
          </p>
        )}
        {address && (
          <p>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={"icon"}
            ></FontAwesomeIcon>
            {" " + address + ", " + city + ", " + country}
          </p>
        )}
        {linkedIn && (
          <p>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={"icon"}
            ></FontAwesomeIcon>
            <a href={linkedIn}>{" " + linkedIn}</a>
          </p>
        )}
        {github && (
          <p>
            <FontAwesomeIcon
              icon={faGithub}
              className={"icon"}
            ></FontAwesomeIcon>
            <a href={github}>{" " + github}</a>
          </p>
        )}
      </div>
      {renderLanguages()}
      {renderInterests()}
    </div>
  );
}

export default SideContent;

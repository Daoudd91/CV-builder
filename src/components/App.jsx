import "../styles/App.css";
import React from "react";
import Controls from "./Controls.jsx";
import Preview from "./Preview.jsx";

function App() {
  // state variables for personal information:
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [profilePicture, setProfilePicture] = React.useState(null);
  const [jobTitle, setJobTitle] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [linkedIn, setLinkedIn] = React.useState("");
  const [github, setGithub] = React.useState("");

  // state variables for work experience:
  const [experiences, setExperiences] = React.useState([]);

  // state variables for education:
  const [educations, setEducations] = React.useState([]);

  // state variables for skills:
  const [skills, setSkills] = React.useState([]);

  // state variables for projects:
  const [projects, setProjects] = React.useState([]);

  // state variables for certifications:
  const [certifications, setCertifications] = React.useState([]);

  // state variables for languages:
  const [languages, setLanguages] = React.useState([]);

  // state variables for interests:
  const [interests, setInterests] = React.useState([]);
  return (
    <div id="app-container">
      <Controls />
      <Preview />
    </div>
  );
}

export default App;

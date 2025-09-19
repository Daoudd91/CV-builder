import "../styles/App.css";
import Collapsible from "./Collapsible.jsx";

function App() {
  return (
    <div id="app-container">
      <div id="controls">
        <Collapsible title="Personal Information">
          <h1>Personal Information</h1>
        </Collapsible>
        <Collapsible title="Work Experience" />
        <Collapsible title="Education" />
        <Collapsible title="Skills" />
        <Collapsible title="Projects" />
        <Collapsible title="Certifications" />
        <Collapsible title="Languages" />
        <Collapsible title="Interests" />
        <Collapsible title="References" />
        <button id="add-section">Add Section</button>
      </div>
      <div id="cv-preview"></div>
    </div>
  );
}

export default App;

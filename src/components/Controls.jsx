import Collapsible from "./Collapsible";

function Controls() {
  return (
    <section id="controls">
      <Collapsible title="Personal Information">
        <div className="input-collection">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="file" placeholder="Profile picture" accept="image/*" />
          <input type="text" placeholder="Job title" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="LinkedIn link" />
          <input type="text" placeholder="GitHub link" />
        </div>
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
    </section>
  );
}

export default Controls;

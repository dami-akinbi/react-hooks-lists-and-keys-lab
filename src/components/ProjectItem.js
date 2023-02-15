import React from "react";

function ProjectItem({ name, about, technologies }) {
  // console.log("ProjectItem", technologies);

  const spanTags = technologies.map((tech) => <span key={tech}>{tech}</span>);

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {spanTags}
      </div>
    </div>
  );
}

export default ProjectItem;

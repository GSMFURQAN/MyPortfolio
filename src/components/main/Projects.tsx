import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h3 className=" mx-[20%] mb-14 text-4xl font-semibold text-white ">
        Projects{" "}
      </h3>
      <div className="h-full w-full flex flex-wrap md:flex-row gap-10 px-10">
        <ProjectCard
          src="/sols.png"
          title="Solicitors"
          description="It’s a Client Management system used by solicitors for management of clients and Lawyers, storing and tracking data, files, activities, scheduling meetings and sending court notifications to clients through emails etc"
        />
          <ProjectCard
            src="/captialFunding.png"
            title="Senior Long Term Care"
            description="This is a Project Investigation website used by retired Govt employees to avail the benefits of reimbursement schemes offered by the
            State. Its functionalities include, uploading the facility documents and claiming reimbursements by filling out the series of forms and managing
            these requests from Admin portal through investigation.
  "
          />
        <ProjectCard
          src="/authen.png"
          title="Authen"
          description="Authen enables consumers and supply chain participants to ensure the authenticity, traceability, and sustainability of food and product ingredients. It provides a total view of data tracking the entire supply chain journey of a consumer food product or individual ingredient."
        />
        <ProjectCard
          src="/sourcebae.png"
          title="SourceBae"
          description=" It’s an Employee outsourcing platform for clients and agencies to choose the developers with the required skills and select the packages as per the requirement of the project.
"
        />
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-20 z-[20]"
      id="projects"
    >
      <h3 className=" mx-[20%] mb-14 text-4xl font-semibold text-white ">
        Projects{" "}
      </h3>
      <div className="h-full w-full flex flex-wrap sm:flex-row gap-6 px-12 justify-center items-center">
        <ProjectCard
          src="/kornferry.png"
          title="KornFerry Talent Suite"
          description="•	Korn Ferry specializes in talent acquisition, leadership development, and workforce transformation through assessments and analytics"
          link="https://www.kornferry.com/capabilities/talent-suite"
          client="KornFerry"
          libraries="React Js, Node.js, Redux-toolkit, Tableau, PostgreSQL, DBeaver, Material UI, Axios, and Typescript"
        />
        <ProjectCard
          src="/sols.png"
          title="Solicitors"
          description="It’s a Client Management system used by solicitors for management of clients and Lawyers, storing and tracking data, files, folders, activities, scheduling meetings and sending court notifications to clients through emails etc.,"
          link="https://lcmsolicitorsui-lcmsolicitorsui-dev.apps.nonprod-hfx1.novascotia.ca/"
          client="Govt of Canada, Nova Scotia"
          libraries="React Js, Redux-toolkit, React Calendars, Material UI, Axios, and Typescript"
        />
        <ProjectCard
          src="/captialFunding.png"
          title="Senior Long Term Care"
          description="This is a Project Investigation website for Govt employees to avail the benefits of reimbursement schemes offered by the
            State. Its functionalities include, uploading the facility documents and claiming funds by filling out the series of forms and managing
            the requests from Admin portal through investigation.
  "
          link="https://sltcdbmanagementui-sltcdbmanagementui-dev.apps.nonprod-hfx1.novascotia.ca/login"
          client="Govt of Canada, Nova Scotia"
          libraries="React Js, Redux-toolkit, Material UI, Axios, and Typescript"
        />
        <ProjectCard
          src="/authen.png"
          title="Authen"
          description="Authen enables consumers and supply chain participants to ensure the authenticity, traceability, and sustainability of food and product ingredients. It provides a total view of data tracking the entire supply chain journey of a consumer food product or individual ingredient."
          link="https://authen.com/"
          client="Authen"
          libraries=" MERN Stack, Redux-toolkit, Material UI, Axios, React Query, Formik and Chakra UI"
        />
        <ProjectCard
          src="/verizon.png"
          title="Verizon incident tracking system"
          description="This is an incident ticketing system for Verizon, which is used to manage and track incidents and issues related to Verizon's services and products. It allows users to create, update, and resolve tickets, as well as view the status of their tickets and communicate with support teams."
          link="https://www.verizon.com/business/support/vec/troubleshooting/incident-tickets/"
          client="Verizon"
          libraries=" React, Redux-toolkit, Material UI, Axios"
        />
      
      </div>
    </div>
  );
};

export default Projects;

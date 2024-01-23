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
      <div className="h-full w-full flex flex-wrap sm:flex-row gap-6 px-12">
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
          libraries="React Js, Redux-toolkit, Material UI, Axios, React Query, Formik and Chakra UI"
        />
        <ProjectCard
          src="/Sourcebae.png"
          title="SourceBae"
          description=" It’s an Employee outsourcing platform for clients and agencies to choose the developers with the required skills and select the packages as per the requirement of the project.
"
          link="https://sourcebae.com/"
          client="Shethink"
          libraries="React Js, Context api, Tailwind CSS, Axios, and Typescript"
        />
        <ProjectCard
          src="/recruitbae.png"
          title="RecruitBae"
          description="It’s an Assessment and Evaluation platform to screen candidates during the hiring process and allows admin to create custom assessments and view the report cards generated with the candidate's test results and their performance on the Dashboard."
          link="https://recruitbae.com/blog/"
          client="Shethink"
          libraries="React Js, Material UI, Tailwind CSS, Axios, and Typescript"
        />
      </div>
    </div>
  );
};

export default Projects;

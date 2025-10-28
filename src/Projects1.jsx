import React from "react";
import jobPortalImg from "./assets/images/jobportal.webp";
import PortfolioImg from "./assets/images/portfolioProject.webp";
import AIResumeStudioImg from "./assets/images/aiResumeStudio.webp";

const Projects1 = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 relative pb-8 sm:pb-16">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#ee7a2a] sm:border-b-2 border-[#ee7a2a]">
        Latest Works
      </h2>
      {/*  <h2 className="text-[#f56b11]">First</h2>
      <h2 className="text-[#f57c1f]">First</h2>
      <h2 className="text-[#f47a20]">Second </h2>
      <h2 className="text-[#e3640b]">Third</h2>
      <h2 className="text-[#ffb071]">Fourth</h2> */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#3B82F6] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#3B82F6] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://job-portal-project-mocha.vercel.app/"
          target="_blank"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_40px_rgba(252,129,92,0.35)]"
              src={jobPortalImg}
              alt=""
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#3B82F6] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              JobPortal Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#3B82F6] font-bold text-2xl md:text-4xl">
            JobPortal
          </h3>
          <span className="text-[#3B82F6] text-base md:text-lg">
            (Job Platform)
          </span>
          <p className="text-justify text-sm md:text-base mt-2">
            Jobportal is a full-stack Platform that enables users to create
            accounts, post openings, and search for opportunities seamlessly. It
            features secure authentication and real-time database updates
            powered by Supabase and Clerk.The interface is fully
            responsive,built with Tailwind CSS and Shadcn/UI for a clean and
            modern user experience
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Tailwind CSS
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Supabase
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Clerk Authentication
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Shadcn/UI
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Responsive Design
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #HTML
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
            AI Resume Studio
          </h3>
          <span className="text-[#ffe578] text-base md:text-lg">
            (Resume Builder Platform)
          </span>
          <p className="text-justify text-sm md:text-base mt-2">
            A full-stack React.js application that leverages the Gemini API to
            generate personalized resume content. Includes authentication and
            dashboards via Clerk, template management through Strapi CMS, and a
            responsive UI styled with Tailwind CSS and powered by Vite.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Tailwind CSS
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Gemini API
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Strapi CMS
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Clerk Authentication
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Axios
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #react-router
            </li>
          </ul>
        </div>
        <div className="h-[1px] left-1/2 right-1/4 bg-[#ffe578] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://anirudh-ai-resume-studio.netlify.app"
          target="_blank"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_40px_rgba(252,129,92,0.35)]"
              src={AIResumeStudioImg}
              alt=""
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 text-black font-medium bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              AIResumeStudio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#f5a15f] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#f5a15f] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://anirudhsai-portfolio.netlify.app"
          target="_blank"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_40px_rgba(252,129,92,0.35)]"
              src={PortfolioImg}
              alt=""
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#f5a15f] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Portfolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#f5a15f] font-bold text-2xl md:text-4xl">
            Portfolio
          </h3>
          <span className="text-[#f5a15f] text-base md:text-lg">
            (Personal Portfolio Site)
          </span>
          <p className="text-justify text-sm md:text-base mt-2">
            My personal portfolio website built with React.js, styled using
            Tailwind CSS, and brought to life with Matter.js animations.
            Designed to be fully responsive, it includes sections for About,
            Projects, and Contact, with a modern layout that showcases my
            frontend development work and personality.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Matter.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Framer Motion
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Responsive Design
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Tailwind CSS
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #Form Handling
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[2px] hidden sm:block bg-[#f56b11] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Projects1;

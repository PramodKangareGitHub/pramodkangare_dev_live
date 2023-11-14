"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { useTheme } from "../context/theme-context";
import { LuGraduationCap } from "react-icons/lu";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 dark:bg-gray-800 dark:text-gray-100"
    >
      <SectionHeading>My experience</SectionHeading>

      <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-lg font-bold md:text-xl">Tech Mahindra</h3>
            <ul className="space-y-4">
              <li className="space-y-1">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-400"
                  >
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                  </svg>
                  <h4 className="font-medium">
                    Work as part of a team to develop and support software’s in
                    .NET Technology for Lab and Mean Stack Technology for Fiber
                    internet.
                  </h4>
                </div>
              </li>
              <li className="space-y-1">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-400"
                  >
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                  </svg>
                  <h4 className="font-medium">
                    Proficiency Testing Products - Lab Testing modules (C#
                    ASP.NET MVC, SQL Server, Entity Framework, WEB API, Windows
                    Services)
                  </h4>
                </div>
              </li>
              <li className="space-y-1">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-400"
                  >
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                  </svg>
                  <h4 className="font-medium">
                    Fiber Internet Management (Angular 10, NodeJS, MongoDB)
                  </h4>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-bold md:text-xl">
              PRECISION AUTOMATION AND ROBOTICS INDIA LTD (2015-19)
            </h3>
            <ul className="space-y-4">
              <li className="space-y-1">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-400"
                  >
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                  </svg>
                  <h4 className="font-medium">
                    Work as part of a team to develop software’s in .NET
                    Technology for ROBOTIC SYSTEM’s in domains like Windows and
                    Web Application.
                  </h4>
                </div>
              </li>
              <li className="space-y-1">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-400"
                  >
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                  </svg>
                  <h4 className="font-medium">
                    Developing Windows Application using WPF and C# as
                    Programming Language, Web based applications using Asp.Net
                    MVC and Angular JS, Node JS.
                  </h4>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-bold md:text-xl">
              SumanaBh Software Pvt Ltd (2014-15)
            </h3>
            <ul className="space-y-4">
              <li className="space-y-1">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-400"
                  >
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                  </svg>
                  <h4 className="font-medium">
                    ERP-Windows Application’s, Cloud Web based ERP applications.
                  </h4>
                </div>
                <p className="ml-7 dark:text-gray-400">
                  Developing web based ERP Products and windows application
                  software in ASP.NET C# with SQL server as Backend Database.
                </p>
              </li>
              <li className="space-y-1">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-400"
                  >
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                  </svg>
                  <h4 className="font-medium">ERP Projects</h4>
                </div>
                <p className="ml-7 dark:text-gray-400">
                  Agro Product, Automobile and Production ERP System, Special
                  Biochem ERP System
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

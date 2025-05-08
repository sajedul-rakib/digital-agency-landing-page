import React from "react";
import DashBoradFeatureImage from "../assets/features/feature-1.png";
import DashBoradFeatureSecondImage from "../assets/features/feature-2.png";
import Content from "./Content";
import ListTile from "./ListTile";
import Title from "./Title";

//showing image component
const ImageViewer = ({ src, alt }) => {
  return (
    <img
      className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
      src={src}
      alt={alt}
    />
  );
};

//tick icon
const Tick = () => {
  return (
    <svg
      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const Service = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <Title title={"Work with tools you already use"} isCentre={false} />
            <Content
              children={
                "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
              }
            />
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <ListTile
                icon={<Tick />}
                title={"Continuous integration and deployment"}
              />
              <ListTile icon={<Tick />} title={"Development workflow"} />
              <ListTile icon={<Tick />} title={"Knowledge management"} />
            </ul>
            <Content
              children={
                "Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
              }
            />
          </div>
          <ImageViewer
            src={DashBoradFeatureImage}
            alt={"dashboard feature image"}
          />
        </div>

        {/* <!-- Sub Service 2 --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <ImageViewer
            src={DashBoradFeatureSecondImage}
            alt={"second service image"}
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <Title
              title={"We invest in the world’s potential"}
              isCentre={false}
            />
            <Content
              children={
                "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
              }
            />
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <ListTile
                icon={<Tick />}
                title={"Dynamic reports and dashboards"}
              />
              <ListTile icon={<Tick />} title={"Templates for everyone"} />
              <ListTile icon={<Tick />} title={"Knowledge management"} />
              <ListTile
                icon={<Tick />}
                title={"Limitless business automation"}
              />
              <ListTile icon={<Tick />} title={"Knowledge management"} />
            </ul>
            <Content
              children={
                "Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;

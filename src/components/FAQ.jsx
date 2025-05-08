import React, { Fragment } from "react";
import DownArrow from "./icons/DownArrow";
import UpArrow from "./icons/UpArrow";
import Title from "./Title";

const faq = [
  {
    question: "Can I use Landwind in open-source projects?",
    answer: (
      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Landwind is an open-source library of interactive components built on
          top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
          more.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to{" "}
          <a
            href="#"
            className="text-purple-600 dark:text-purple-500 hover:underline"
          >
            get started
          </a>{" "}
          and start developing websites even faster with components on top of
          Tailwind CSS.
        </p>
      </div>
    ),
  },
  {
    question: "Is there a Figma file available?",
    answer: (
      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Landwind is first conceptualized and designed using the Figma software
          so everything you see in the library has a design equivalent in our
          Figma file.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out the{" "}
          <a
            href="#"
            className="text-purple-600 dark:text-purple-500 hover:underline"
          >
            Figma design system
          </a>
          based on the utility classes from Tailwind CSS and components from
          Landwind.
        </p>
      </div>
    ),
  },
  {
    question: "What are the differences between Landwind and Tailwind UI?",
    answer: (
      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Landwind are open
          source under the MIT license, whereas Tailwind UI is a paid product.
          Another difference is that Landwind relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Landwind, Landwind Pro, and
          even Tailwind UI as there is no technical reason stopping you from
          using the best of two worlds.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
          <li>
            <a
              href="#"
              className="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Landwind Pro
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What about browser support?",
    answer: (
      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Landwind are open
          source under the MIT license, whereas Tailwind UI is a paid product.
          Another difference is that Landwind relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Landwind, Landwind Pro, and
          even Tailwind UI as there is no technical reason stopping you from
          using the best of two worlds.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
          <li>
            <a
              href="#"
              className="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Landwind Pro
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];

//question components
const Question = ({ question, isActive = false }) => {
  const style = `flex items-center justify-between w-full py-5 ${
    isActive ? "text-white" : "text-gray-500"
  } font-medium text-left  border-b border-gray-200 dark:border-gray-700 ${
    isActive ? "dark:text-white" : "dark:text-gray-400"
  }`;

  return (
    <h3 id="accordion-flush-heading-2">
      <button
        type="button"
        className={style}
        data-accordion-target="#accordion-flush-body-2"
        aria-expanded="false"
        aria-controls="accordion-flush-body-2"
      >
        <span>{question}</span>
        {isActive ? <UpArrow /> : <DownArrow />}
      </button>
    </h3>
  );
};

//answer components
const Answer = ({ answer, isActive = false }) => {
  return (
    <div
      id="accordion-flush-body-2"
      className={isActive ? "" : "hidden"}
      aria-labelledby="accordion-flush-heading-2"
    >
      {answer}
    </div>
  );
};

const FAQ = () => {
  const allFaq = faq.map((fa, index) => (
    <Fragment key={index}>
      <Question question={fa.question} isActive={index === 0} />
      <Answer answer={fa.answer} isActive={index === 0} />
    </Fragment>
  ));
  return (
    // <section className="bg-white dark:bg-gray-900">
    //   <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
    //     <Title title={"Frequently asked questions"} />
    //     <div className="max-w-screen-md mx-auto">{allFaq}</div>
    //   </div>
    // </section>
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <Title title={"Frequently asked questions"} />
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            {allFaq}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;

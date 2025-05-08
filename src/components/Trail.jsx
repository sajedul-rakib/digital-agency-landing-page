import React from "react";
import Button from "./Button";
import Content from "./Content";
import Title from "./Title";

const Trail = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <Title title={"Start your free trial today"} />
          <Content
            children={
              "Try Landwind Platform for 30 days. No credit card required."
            }
            isCenter={true}
          />
          <Button title={"Free trial for 30 days"} />
        </div>
      </div>
    </section>
  );
};
export default Trail;

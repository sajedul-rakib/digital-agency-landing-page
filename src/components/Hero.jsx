import heroImage from "../assets/hero.png";
import Companies from "./Companies";
import Content from "./Content";
import Figma from "./icons/Figma";
import Github from "./icons/Github";

//button with component
function IconButton({ title, icon }) {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    >
      {icon}
      {title}
    </a>
  );
}

const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Building digital <br />
              products & brands.
            </h1>
            <Content>
              <>
                This free and open-source landing page template was built using
                the utility classes from{" "}
                <a href="#" className="hover:underline">
                  Tailwind CSS
                </a>{" "}
                and based on the components from the Flowbite Library and the
                Blocks System.
              </>
            </Content>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <IconButton title={"View on Github"} icon={<Github />} />
              <IconButton title={"Get Figma file"} icon={<Figma />} />
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={heroImage} alt="hero image" />
          </div>
        </div>
      </section>
      <Companies />
    </>
  );
};
export default Hero;

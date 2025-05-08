import logo from "../assets/logo.svg";
import Button from "./Button";

//navigation ver item component
function NavbarItem({ title }) {
  return (
    <li>
      <a
        href="#"
        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        {title}
      </a>
    </li>
  );
}

export default function Header() {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Learn with Sumit
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <Button title={"Download"} />
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <NavbarItem title={"Home"} />
              <NavbarItem title={"Company"} />
              <NavbarItem title={"Marketplace"} />
              <NavbarItem title={"Feature"} />
              <NavbarItem title={"Team"} />
              <NavbarItem title={"Contact"} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

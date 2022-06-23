const NavBar = () => {
  return (
    <>
      <nav className="ex-sm:z-2 lg:w-full">
        <ul className="ex-sm:flex ex-sm:flex-col ex-sm:justify-between lg:flex-row lg:justify-between lg:w-full lg:items-center">
          <li className="ex-sm:p-2">
            <a
              href="#"
              className="ex-sm:text-lg ex-sm:text-black lg:text-white font-medium"
            >
              About
            </a>
          </li>
          <li className="ex-sm:p-2">
            <a
              href="#"
              className="ex-sm:text-lg ex-sm:text-black lg:text-white font-medium"
            >
              Services
            </a>
          </li>
          <li className="ex-sm:p-2">
            <a
              href="#"
              className="ex-sm:text-lg ex-sm:text-black lg:text-white font-medium"
            >
              Pricing
            </a>
          </li>
          <li className="ex-sm:p-2">
            <a
              href="#"
              className="ex-sm:text-lg ex-sm:text-black lg:text-white font-medium"
            >
              Blog
            </a>
          </li>
          <li className="sm:block ex-sm:p-2 lg:hidden">
            <a
              href="#"
              className="ex-sm:text-lg ex-sm:text-black lg:text-white font-medium"
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

import NavBar from "../NavBar/NavBar.component";
import MenuButtons from "./MenuButtons.component";
import { useRecoilState } from "recoil";
import {
  navBarDefaultStateData,
  burgerStateData,
} from "../../recoil/atoms.state";
import Logo from "../../media/images/logo/logo.svg";
import "./styles/HeaderMenu.style.css";
import { ButtonWrapper } from "../../templates/ButtonWrapper.template";

const HeaderMenu = () => {
  const [menuState, setMenuState] = useRecoilState<string>(
    navBarDefaultStateData
  );
  const [burgerState, setBurgerState] = useRecoilState<string>(burgerStateData);

  function toggleBtnClass(
    state: string,
    stateChanger: (value: string) => void,
    firstClass: string,
    secondClass: string
  ) {
    if (state === firstClass) {
      stateChanger(secondClass);
    } else {
      stateChanger(firstClass);
    }
  }

  return (
    <header
      className="app-header 
      ex-sm:flex ex-sm:justify-between ex-sm:px-2 ex-sm:py-4
      md:px-[132px]
    "
    >
      <div className="app-logo">
        <a
          href="#"
          className="text-xl text-white ex-sm:flex ex-sm:gap-1 ex-sm:items-center"
        >
          <img src={Logo} alt="" className="ex-sm:w-[50px] ex-sm:h-[50px]" />
          Agency
        </a>
      </div>
      <div
        className={`
        z-20
        ex-sm:fixed left-0 top-0 ex-sm:bg-white p-4 w-1/2 ex-sm:h-screen ${menuState} z-10 flex flex-col gap-10
        lg:relative lg:left-0 lg:top-0 lg:flex-row lg:h-full lg:p-0 lg:justify-between lg:bg-[transparent]
        `}
      >
        <NavBar />
      </div>
      <ButtonWrapper
        className="ex-sm:self-start ex-sm:hidden lg:block"
        color="white"
        as={"a"}
        href="#"
      >
        Contacts
      </ButtonWrapper>
      {menuState === "animate-show-menu left-0" ? (
        <div
          className={`fixed w-full bg-slate-300/50 h-full left-0 top-0 -z-2 lg:hidden`}
          onClick={() => {
            setMenuState("animate-hide-menu -left-1/2");
            toggleBtnClass(burgerState, setBurgerState, "open", "closed");
          }}
        ></div>
      ) : (
        false
      )}
      <MenuButtons />
    </header>
  );
};

export default HeaderMenu;

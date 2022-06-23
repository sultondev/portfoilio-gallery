import {
  navBarDefaultStateData,
  burgerStateData,
} from "../../recoil/atoms.state";
import { useRecoilState } from "recoil";
import "./styles/MenuButtons.style.css";
const MenuButtons = () => {
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
    <div
      className={`
      header-buttons
      ex-sm:flex ex-sm:justify-between
      ex-sm:basis-1/1 ex-sm:${
        menuState === "animate-show-menu left-0" ? "bg-red-500" : "green-500"
      }
      ex-sm:self-start
      lg:justify-end
      `}
    >
      <button
        className="text-4xl flex items-center justify-center lg:hidden"
        onClick={() => {
          toggleBtnClass(
            menuState,
            setMenuState,
            "animate-show-menu left-0",
            "animate-hide-menu -left-1/2"
          );
          toggleBtnClass(burgerState, setBurgerState, "open", "closed");
        }}
      >
        <div className={`wrapper ex-sm:z-10 ${burgerState}`}>
          <div className="line half start"></div>
          <div className="line"></div>
          <div className="line half end"></div>
        </div>
      </button>
    </div>
  );
};

export default MenuButtons;

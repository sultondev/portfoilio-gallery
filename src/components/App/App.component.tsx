import "./App.style.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu.component";
import Projects from "../Projects/Projects.component";

function App() {
  return (
    <div className="app">
      <div className="app-welcome ex-sm:min-h-[400px]">
        <div className="welcome-container flex flex-col gap-20 2xl:max-w-[1400px] 2xl:mx-auto">
          <HeaderMenu />
          <div className="flex flex-col gap-10">
            <h1 className="text-center lg:text-6xl font-bold ex-sm:text-4xl">
              Portfolio
            </h1>
            <p className="text-center">
              Agency provides a full service range inlcuding technical skill,
              <br />
              design, business understanding
            </p>
          </div>
        </div>
      </div>
      <main className="mx-auto lg:px-[132px]   2xl:max-w-[1400px]">
        <Projects />
      </main>
    </div>
  );
}

export default App;

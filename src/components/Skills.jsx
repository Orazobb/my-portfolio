import HTML from "../assets/html.svg";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import vue from "../assets/vue.png";
import Tailwind from "../assets/Tailwind.svg";
import GitHub from "../assets/GitHub.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-screen bg-slate-600 text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex justify-center mb-12">
          <p className="text-4xl font-semibold inline border-b-4 border-red-600">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 gap-y-8 items-center">
          <div>
            <img src={HTML} className="w-20 mx-auto" />
            <p className="py-4">HTML</p>
          </div>
          <div>
            <img src={css} className="w-20 mx-auto" />
            <p className="py-4">CSS</p>
          </div>
          <div>
            <img src={js} className="w-20 mx-auto rounded-lg" />
            <p className="py-4">JS</p>
          </div>
          <div>
            <img src={react} className="w-20 mx-auto" />
            <p className="py-4">React Js</p>
          </div>
          <div>
            <img src={vue} className="w-20 mx-auto " />
            <p className="py-4">Vue Js</p>
          </div>
          <div>
            <img src={Tailwind} className="w-20 mx-auto" />
            <p className="py-4">Tailwind</p>
          </div>
          <div>
            <img src={GitHub} className="w-20 mx-auto" />
            <p className="py-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

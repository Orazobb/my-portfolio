import Portfolio from "../assets/Portfolio.png";
// import Sidebar from "../assets/Sidebar.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen text-white bg-slate-950">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-10 sm:grid-cols-1 overflow-auto mx-auto p-4">
          <a href="#">
            <img
              height={300}
              width={300}
              className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
              src={Portfolio}
              alt=""
            />
          </a>
          <a href="#">
            <img
              height={300}
              width={300}
              className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
              src={Portfolio}
              alt=""
            />{" "}
          </a>
          <a href="#">
            <img
              height={300}
              width={300}
              className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
              src={Portfolio}
              alt=""
            />{" "}
          </a>
          <a href="#">
            <img
              height={300}
              width={300}
              className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
              src={Portfolio}
              alt=""
            />{" "}
          </a>
          <a href="#">
            <img
              height={300}
              width={300}
              className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
              src={Portfolio}
              alt=""
            />{" "}
          </a>
          <a href="#">
            <img
              height={300}
              width={300}
              className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
              src={Portfolio}
              alt=""
            />{" "}
          </a>
          <a href="#">
            <img
              height={300}
              width={300}
              className="flex items-center justify-center rounded-lg border-2 border-red-500 p-1"
              src={Portfolio}
              alt=""
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

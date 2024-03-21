const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-slate-700 text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-semibold">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              error nesciunt? Consequuntur corrupti sed eveniet ratione est
              assumenda, inventore iusto ab quam maiores iure nam, non doloribus
              voluptate deserunt a.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

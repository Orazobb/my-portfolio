const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-slate-900 ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <h1 className="sm:text-6xl font-semibold text-white">Hi I'm B</h1>
        <h4 className="sm:text-4xl  text-white">Frontend Developer</h4>
        <p className="text-white py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          cumque necessitatibus explicabo odio, dolores asperiores blanditiis
          aliquam atque ipsa placeat voluptate minima distinctio? Sint quo
          asperiores harum eligendi, similique a.
        </p>
        <div>
          <button className="btn btn-md bg-red-600 hover:bg-red-500 md:btn-lg transition-all rounded-xl">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

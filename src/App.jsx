import About from "./components/About";
import Social from "./components/Social";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
function App() {
  return (
    // <nav className="flex justify-between mt-4 bg-green-600 mx-24 px-12 rounded-lg py-1">
    //   <img src={Logo} alt="logo" className="hover:cursor-pointer" />
    //   <div className="flex justify-center items-center px-4 text-white   gap-x-8">
    //     <Navbar />
    //     <Home />
    //     <About />
    //     <Skills />
    //     <Projects />
    //     <Social />
    //     <Contact />
    //   </div>
    // </nav>

    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Social />
      <Contact />
    </>
  );
}

export default App;

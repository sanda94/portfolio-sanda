// App.jsx
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Technologies from './components/Technologies.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <div>
      <div className="flixed top-0 -z-10 h h-full w w-full"></div>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
      <div className="conainer mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Education/>
        <Contact />
      </div>
    </div>
  );
};

export default App;

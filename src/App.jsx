import './App.css';
import { motion } from 'framer-motion';
import useDarkMode from './hooks/use-darkMode';
import Navbar from './components/v2/navbar';
import { sectionAnimation } from './utils';
import Intro from './components/v2/intro';
import Me from './components/v2/me';
import Experience from './components/v2/experience';
import Projects from './components/v2/projects';
import Footer from './components/v2/footer';
function App() {
  const [isDark, setIsDark] = useDarkMode();

  const sections = [
    { id: 1, title: 'Welcome', color: 'bg-blue-500' },
    { id: 2, title: 'About', color: 'bg-green-500' },
    { id: 3, title: 'Projects', color: 'bg-purple-500' },
    { id: 4, title: 'Contact', color: 'bg-orange-500' },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-background h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
        <div id="home"></div>
        <Intro />
        <Me />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;

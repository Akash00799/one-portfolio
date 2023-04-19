import './Tailwind.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
// import Portfolio2 from './components/Portfolio2';
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      {/* <Portfolio2 /> */}
      <Experience />
      <Contact />
      <Footer/>

      <SocialLinks />
    </div>
  );
}

export default App;

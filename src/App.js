import ParticlesBackground from "./components/ParticlesBackground"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import './App.css';
import Profil from "./components/Profil";
import NavList from "./components/NavList";
import Footer from "./components/Footer";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Projects from "./components/Projects";
import About from "./components/About";
function App() {
  useEffect(()=>{
    Aos.init()
  },[]);
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
  }
  return <>
    <header className="sticky-top animate__animated animate__slideInDown "> 
      <NavList/>
    </header>

    <main>
      <section>
        <Profil/>
        <div>
          <a href="#a_propos" className="d-md-none d-block text-center animated-center text-decoration-none">
            <i className="bi bi-arrow-down-circle-fill text-warning text-decoration-none"></i>
          </a>
        </div>
      </section>

      <section>
        <About/>
        <div>
          <a href="#projets" className="d-md-none d-block text-center animated-center text-decoration-none">
            <i className="bi bi-arrow-down-circle-fill text-warning"></i>
          </a>
        </div>
      </section>

      <section>
        <Projects/>
        
        <div>
          <a href="#top" onClick={scrollToTop} className="d-md-none d-block text-center animated-center text-decoration-none">
            <i className="bi bi-arrow-up-circle-fill text-warning text-decoration-none"></i>
          </a>
        </div>
      </section>
    </main>

    <footer className="bg-black">
      <Footer/>
    </footer>


  <ParticlesBackground/>
  </>
}

export default App;

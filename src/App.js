import ParticlesBackground from "./components/ParticlesBackground"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
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
  },[])
  return <>
    <header className="sticky-top animate__animated animate__slideInDown "> 
      <NavList/>
    </header>

    <main>
      <section>
        <Profil/>
      </section>

      <section>
        <About/>
      </section>

      <section>
        <Projects/>
      </section>
    </main>

    <footer className="bg-black">
      <Footer/>
    </footer>


  <ParticlesBackground/>
  </>
}

export default App;

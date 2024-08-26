import "./App.css";
import Contacto from "./sections/Contacto/Contacto";
import SobreMi from "./sections/SobreMi/SobreMi";
import Projectos from "./sections/Projectos/Projectos";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <SobreMi />
      <Projectos />
      <Skills />
      <Contacto />
    </>
  );
}

export default App;

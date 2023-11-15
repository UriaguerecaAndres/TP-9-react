import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from "./components/Inicio";
import Detalle from "./components/Detalle";
import Creacion from "./components/Creacion";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Inicio}></Route>
        <Route path="/detalles/:id" Component={Detalle}></Route>
        <Route exact path="/creacion" Component={Creacion}></Route>
      </Routes>
    </Router>
  );
}

export default App;

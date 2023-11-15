import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import data from "../data";

export default function Inicio() {
  return (
    <div>
      <h2>Lista de tareas</h2>
      <ul>
        {data.map((tarea) => (
          <li key={tarea.id}>
            <Link to={`/detalles/${tarea.id}/${tarea.titulo}/${tarea.descripcion}/${tarea.fecha}/${tarea.completada}`}>{tarea.titulo}</Link>
          </li> 
        ))}
      </ul>
      <Link to="/creacion">Crear Nueva Tarea</Link>
    </div>
  );
}
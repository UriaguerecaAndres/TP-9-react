import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";

export default function Creacion(){
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [completada, setCompletada] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        const nuevaTarea = {
            id: data.length + 1,
            titulo,
            descripcion,
            completada,
            fecha: new Date()
        };

        data.push(nuevaTarea);
        setTitulo("");
        setDescripcion("");
        setCompletada(false);
    }

    return (
        <div>
            <Link to={"/"}>Volver Atras</Link>
            <h2>Crear nueva tarea</h2>
            <form onSubmit={handleSubmit}>
                <label>
                Título:
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                </label><br/>
                <label>
                Descripción:
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                </label><br/>
                <label>
                Completada:
                <input
                    type="checkbox"
                    checked={completada}
                    onChange={(e) => setCompletada(e.target.checked)}
                />
                </label><br/>
                <button type="submit">Crear tarea</button>
            </form>
        </div>
      );
}
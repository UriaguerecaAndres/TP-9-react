import { useParams, Link } from 'react-router-dom';
import data from '../data';

export default function Detalle() {
  const { idTarea } = useParams();
  const tarea = data.find((item) => item.id === parseInt(idTarea));

  /*
    No logro conseguir pasar el dato de la ruta a tarea, por ende lo dejo asi y solo muestro los datos desde la url y el mensaje de: Tarea no encontrada.
    Si consiguen solucionarlo mejor.
  */

  return (
    <div>
        {tarea != null ? (
            <div>
                <h2>{tarea.titulo}</h2>
                <p>{tarea.descripcion}</p>
                <p>Fecha de creación: {tarea.fecha}</p>
                <p>Estado: {tarea.completada ? 'Completada' : 'Incompleta'}</p>
                <Link to={"/"}>Volver Atras</Link>
            </div>
        ) : (
            <div>
                <p>Tarea no encontrada</p>
                <Link to={"/"}>Volver Atras</Link>
            </div>
        )}
    </div>
  );
}
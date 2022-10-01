import Tarea from "./Tarea";
import "./ListaTareas.css";
import { useState } from "react"

const ListaTareas = () => {

    const [tareas, setTareas] = useState([]);
    const getTareas = () => {
        fetch("http://localhost:5000/api/details/tasks/")
            .then(res => res.json())
            .then(tasks => {
                setTareas(tasks)
            })
    };

    getTareas();

    return (
        <ul>
            {
                tareas.map(t => {
                    return (
                        <Tarea task={t.tarea} task_id={t._id}/>
                    )
                })
            }
        </ul>
    )
};

export default ListaTareas;

const Tarea = (props) => {

    const borrarTarea = _ => {
        if(window.confirm('Confirmar para eliminar'))
        fetch(`http://localhost:5000/api/delete/tasks/${props.task_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            }
        })
    };

    const editarTarea = _ => {
        const nuevo_valor = prompt('Modificar tarea', props.task);
        if(nuevo_valor !== props.task && nuevo_valor !== null)
        fetch(`http://localhost:5000/api/patch/tasks/${props.task_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ tarea: nuevo_valor})
        });
    };

    return (
        <li>
            <p>{props.task}</p>
            <button onClick={ editarTarea }>Editar</button>
            <button onClick={ borrarTarea }>Eliminar</button>
            <hr/>
        </li>
    )
};

export default Tarea;

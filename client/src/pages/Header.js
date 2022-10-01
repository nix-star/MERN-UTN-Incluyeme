import "./Header.css"

const Header = () => {

    const addTask = () => {
        
        const nueva_tarea = prompt('Nueva tarea');
        if(nueva_tarea){
            fetch('http://localhost:5000/api/post/tasks', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    tarea: nueva_tarea
                })
            })
        }
    };

    return (
        <header className="flex">
            <h2>Lista de tareas</h2>
            <button onClick={addTask}>Añadir</button>
        </header>
    )
}

export default Header;

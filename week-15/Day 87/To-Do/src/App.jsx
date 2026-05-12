import { useState } from "react";
import "./App.css";

function App(){

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    function addTask(){

        if(task.trim() === "") return;

        if(editIndex !== null){

            const updatedTasks = [...tasks];

            updatedTasks[editIndex] = task;

            setTasks(updatedTasks);

            setEditIndex(null);

        }
        else{

            setTasks([...tasks, task]);

        }

        setTask("");

    }

    function deleteTask(index){

        const updatedTasks =
            tasks.filter((item, i) => i !== index);

        setTasks(updatedTasks);

    }

    function editTask(index){

        setTask(tasks[index]);

        setEditIndex(index);

    }

    return(

        <div className="container">

            <h1>To Do List</h1>

            <div className="input-section">

                <input
                    type="text"
                    placeholder="Enter Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button onClick={addTask}>

                    {editIndex !== null ? "Update" : "Add"}

                </button>

            </div>

            <ul className="task-list">

                {tasks.map((item, index) => (

                    <li key={index}>

                        {item}

                        <div>

                            <button
                                onClick={() => editTask(index)}
                                style={{marginRight:"10px"}}
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>

                        </div>

                    </li>

                ))}

            </ul>

        </div>

    );

}

export default App;
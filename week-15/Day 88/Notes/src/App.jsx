import { useState } from "react";
import "./App.css";

function App() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Personal");
    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("Medium");

    const [notes, setNotes] = useState([]);

    const [editIndex, setEditIndex] = useState(null);

    function handleSaveNote() {

        if (
            title.trim() === "" ||
            description.trim() === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        const newNote = {
            title,
            description,
            category,
            priority,
            date: new Date().toLocaleString()
        };

        if (editIndex !== null) {

            const updatedNotes = [...notes];

            updatedNotes[editIndex] = newNote;

            setNotes(updatedNotes);

            setEditIndex(null);

        } else {

            setNotes([newNote, ...notes]);

        }

        setTitle("");
        setDescription("");
        setCategory("Personal");
        setPriority("Medium");
    }

    function handleDelete(index) {

        const updatedNotes =
            notes.filter((item, i) => i !== index);

        setNotes(updatedNotes);
    }

    function handleEdit(index) {

        setTitle(notes[index].title);

        setDescription(notes[index].description);

        setCategory(notes[index].category);

        setPriority(notes[index].priority);

        setEditIndex(index);
    }

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="app">

            <div className="notes-container">

                {/* HEADER */}

                <div className="notes-header">

                    <h1>Professional Notes Keeper</h1>

                    <p>
                        Organize, manage and track your notes efficiently
                    </p>

                </div>

                {/* DASHBOARD */}

                <div className="dashboard">

                    <div className="dashboard-card">
                        <h2>{notes.length}</h2>
                        <p>Total Notes</p>
                    </div>

                    <div className="dashboard-card">
                        <h2>
                            {
                                notes.filter(
                                    note => note.priority === "High"
                                ).length
                            }
                        </h2>
                        <p>High Priority</p>
                    </div>

                    <div className="dashboard-card">
                        <h2>
                            {
                                notes.filter(
                                    note => note.category === "Work"
                                ).length
                            }
                        </h2>
                        <p>Work Notes</p>
                    </div>

                </div>

                {/* SEARCH */}

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="Search Notes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                {/* FORM */}

                <div className="notes-form">

                    <input
                        type="text"
                        placeholder="Enter Note Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Write your note..."
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                    ></textarea>

                    <div className="form-row">

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                        >
                            <option>Personal</option>
                            <option>Work</option>
                            <option>Study</option>
                            <option>Ideas</option>
                        </select>

                        <select
                            value={priority}
                            onChange={(e) =>
                                setPriority(e.target.value)
                            }
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>

                    </div>

                    <button onClick={handleSaveNote}>

                        {
                            editIndex !== null
                            ? "Update Note"
                            : "Add Note"
                        }

                    </button>

                </div>

                {/* NOTES SECTION */}

                <div className="notes-grid">

                    {
                        filteredNotes.length === 0
                        ? (
                            <div className="empty-message">

                                No Notes Found

                            </div>
                        )
                        : (
                            filteredNotes.map((item, index) => (

                                <div
                                    className="note-card"
                                    key={index}
                                >

                                    <div className="note-header">

                                        <h2>{item.title}</h2>

                                        <span
                                            className={`priority ${item.priority}`}
                                        >
                                            {item.priority}
                                        </span>

                                    </div>

                                    <div className="category">

                                        {item.category}

                                    </div>

                                    <p>{item.description}</p>

                                    <div className="date">

                                        {item.date}

                                    </div>

                                    <div className="card-buttons">

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                handleEdit(index)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDelete(index)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            ))
                        )
                    }

                </div>

            </div>

        </div>

    );

}

export default App;
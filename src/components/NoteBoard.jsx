import { useState } from "react";
import { useColor } from "../assets/context/ColorContext.jsx";
import useNotes from "../hooks/useNotes.js";
import Note from "./Note.jsx";

export default function NoteBoard() {
const { defaultColor } = useColor();
const { notes, addNote, deleteNote } = useNotes();

const [text, setText] = useState("");
const [error, setError] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    const result = addNote(text, defaultColor);

if (!result.ok) {
    setError(result.message);
    return;
}

    setText("");
    setError("");
};

return (
    <section className="board">
    <form className="note-form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Escribe una nota..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Añadir nota</button>
    </form>

    {error && <p className="error-message">{error}</p>}

    {notes.length === 0 ? (
        <p className="empty-message">No hay notas todavía.</p>
) : (
        <div className="notes-grid">
        {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
        </div>
)}
    </section>
);
}
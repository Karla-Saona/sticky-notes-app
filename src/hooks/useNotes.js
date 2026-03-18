import { useEffect, useState } from "react";

const NOTES_KEY = "sticky_notes";

function generateId() {
return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function useNotes() {
const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(NOTES_KEY);
    return savedNotes ? JSON.parse(savedNotes) : [];
});

useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}, [notes]);

const addNote = (text, color) => {
const cleanText = text.trim();

    if (!cleanText) return { ok: false, message: "La nota no puede estar vacía." };
    if (notes.length >= 10) {
    return { ok: false, message: "Solo puedes tener hasta 10 notas." };
}

const newNote = {
    id: generateId(),
    text: cleanText,
    color,
};

setNotes((prevNotes) => [newNote, ...prevNotes]);
return { ok: true };
};

const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
};

return { notes, addNote, deleteNote };
}
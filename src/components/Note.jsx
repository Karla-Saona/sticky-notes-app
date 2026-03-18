export default function Note({ note, onDelete }) {
return (
    <div className="note" style={{ backgroundColor: note.color }}>
        <p>{note.text}</p>
        <button onClick={() => onDelete(note.id)}>Eliminar</button>
    </div>
);
}
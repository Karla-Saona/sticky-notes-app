import "./App.css";
import { ColorProvider } from "./assets/context/ColorContext.jsx";
import ColorSelector from "./components/ColorSelector.jsx";
import NoteBoard from "./components/NoteBoard.jsx";

export default function App() {
  return (
    <ColorProvider>
      <main className="app">
        <h1>Notas adhesivas con color</h1>
        <ColorSelector />
        <NoteBoard />
      </main>
    </ColorProvider>
  );
}
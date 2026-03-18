import { useColor } from "../assets/context/ColorContext.jsx";

export default function ColorSelector() {
const { defaultColor, setDefaultColor } = useColor();

return (
    <div className="color-selector">
    <label htmlFor="note-color">Color por defecto: </label>
    <input
        id="note-color"
        type="color"
        value={defaultColor}
        onChange={(e) => setDefaultColor(e.target.value)}
    />
    </div>
);
}
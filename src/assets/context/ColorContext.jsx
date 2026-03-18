import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export function ColorProvider({ children }) {
const [defaultColor, setDefaultColor] = useState("#ffd166");

return (
    <ColorContext.Provider value={{ defaultColor, setDefaultColor }}>
    {children}
    </ColorContext.Provider>
);
}

export function useColor() {
return useContext(ColorContext);
}
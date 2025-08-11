import { useState } from "react";
import { PlanContext } from "./MyContext.jsx";

export function PlanProvider({ initialColor, benefits, price ,children }) {
    const [color, ] = useState(initialColor);

    return (
        <PlanContext.Provider value={{ color, benefits,price }}>
            {children}
        </PlanContext.Provider>
    );
}

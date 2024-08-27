import { createContext } from "react";

export const ItemContext = createContext({
    properties: [],
    addProperty: () => {},
    removeProperty: () => {}
})


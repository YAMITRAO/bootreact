import { createContext } from "react";


const DataContext = createContext(
    {
        productsList: [],
        pageVisibility : {},
        pageVisibilityHandler: "",
    }
);


export default DataContext;
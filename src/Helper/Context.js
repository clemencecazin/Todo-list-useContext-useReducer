import { createContext, useReducer, useEffect } from "react";
import { taskReducer, initializer } from "../Helper/Reducer";

export const AppContext = createContext();

export const AppProvider = (props) => {
    // Infos Reducer
    const [task, dispatch] = useReducer(taskReducer, [], initializer);

    useEffect(() => {
        localStorage.setItem("localCart", JSON.stringify(task));
    }, [task]);

    return (
        // Passer la valeur pour pouvoir la récupérer n'importe où
        <AppContext.Provider
            value={{
                task,
                dispatch,
                taskReducer,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

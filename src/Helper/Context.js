import { createContext, useReducer } from "react";
import { taskReducer } from "../Helper/Reducer";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [task, dispatch] = useReducer(taskReducer, []);

    return (
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

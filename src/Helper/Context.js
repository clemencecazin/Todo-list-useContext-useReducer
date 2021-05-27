import { createContext, useReducer } from "react";

export const AppContext = createContext();

const taskReducer = (state, action) => {
    if (action.type === "ADD_TODO") {
        return [...state, action.payload.task];
    }
    if (action.type === "DELETE") {
        return state.filter((todo, index) => action.payload.i !== index);
    }
    if (action.type === "DONE") {
        return [
            ...state.map((todo, index) => {
                if (index === action.payload.i) {
                    todo.done = !action.payload.done;
                }
                return todo;
            }),
        ];
    }
};

export const AppProvider = (props) => {
    const [task, dispatch] = useReducer(taskReducer, []);

    return (
        <AppContext.Provider value={{ task, dispatch, taskReducer }}>
            {props.children}
        </AppContext.Provider>
    );
};

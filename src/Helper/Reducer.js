// COOKIES GET

const initialState = [];

export const initializer = (initialValue = initialState) =>
    JSON.parse(localStorage.getItem("localCart")) || initialValue;

// COOKIES GET

export const taskReducer = (state, action) => {
    // Si action est égale à la string retouner le state task avec traitement

    if (action.type === "ADD_TODO") {
        return [...state, action.payload.task];
    }
    if (action.type === "DELETE") {
        return state.filter((todo, index) => action.payload.i !== index);
    }
    if (action.type === "DONE") {
        return state.map((todo, index) => {
            if (index === action.payload.i) {
                todo.done = !action.payload.done;
            }
            return todo;
        });
    }
    if (action.type === "UPDATE") {
        return state.map((todo, index) => {
            if (index === action.payload.i) {
                todo.name = action.payload.editTask;
            }
            return todo;
        });
    }
};

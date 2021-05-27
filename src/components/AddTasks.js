import { AppContext } from "../Helper/Context";
import { useContext, useReducer, useState } from "react";

const AddTasks = () => {
    const { task, dispatch } = useContext(AppContext);
    const [textTask, setTextTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(textTask);
        if (textTask) {
            dispatch({
                type: "ADD_TODO",
                payload: {
                    task: {
                        name: textTask,
                        done: false,
                    },
                },
            });
        }
        setTextTask("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <>
                    <input
                        value={textTask}
                        type="text"
                        onChange={(e) => setTextTask(e.target.value)}
                    />
                    <button type="submit">Add todo</button>
                </>
            </form>
        </>
    );
};

export default AddTasks;

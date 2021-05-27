import { AppContext } from "../Helper/Context";
import { useContext, useState } from "react";

const AddTasks = () => {
    const { dispatch } = useContext(AppContext);
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
                        className="search"
                        placeholder="Ajouter une tâche"
                        value={textTask}
                        type="text"
                        onChange={(e) => setTextTask(e.target.value)}
                    />
                    <button type="submit">Ajouter</button>
                </>
            </form>
        </>
    );
};

export default AddTasks;

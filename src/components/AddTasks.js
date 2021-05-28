import { AppContext } from "../Helper/Context";
import { useContext, useState } from "react";

const AddTasks = () => {
    const { dispatch } = useContext(AppContext);
    const [textTask, setTextTask] = useState("");
    const [add, setAdd] = useState("null");
    const [message, setMessage] = useState("");

    // Si action, transférer les données à useContext et useReducer

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setAdd("");

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
        } else {
            setAdd("red");
            setMessage("Veuillez saisir du texte");
        }
        setTextTask("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <>
                    <input
                        className={add}
                        placeholder="Ajouter une tâche"
                        value={textTask}
                        type="text"
                        onChange={(e) => setTextTask(e.target.value)}
                    />
                    <button type="submit">Ajouter</button>
                </>
            </form>
            <p> {message}</p>
        </>
    );
};

export default AddTasks;

import { AppContext } from "../Helper/Context";
import { useContext } from "react";

const TodoList = () => {
    const { task, dispatch } = useContext(AppContext);

    const handleDelete = (i) => {
        dispatch({
            type: "DELETE",
            payload: {
                i,
            },
        });
    };

    const handleCheck = (i, done) => {
        dispatch({
            type: "DONE",
            payload: {
                i,
                done,
            },
        });
    };

    console.log(task);
    return (
        <>
            <div>
                {task.map((tasks, index) => {
                    return (
                        <>
                            <div className={tasks.done ? "done" : ""}>
                                {tasks.name}
                            </div>
                            <button
                                onClick={() => {
                                    handleDelete(index);
                                }}
                            >
                                Supprimer
                            </button>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() =>
                                        handleCheck(index, tasks.done)
                                    }
                                />
                            </label>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default TodoList;

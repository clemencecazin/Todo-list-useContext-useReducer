import { AppContext } from "../Helper/Context";
import { useContext, useState } from "react";

const TodoList = () => {
    const { task, dispatch } = useContext(AppContext);
    const [onEdit, setOnEdit] = useState(null);
    const [editTask, setEditTask] = useState("");

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

    const handleUpdate = (i) => {
        dispatch({
            type: "UPDATE",
            payload: {
                i,
                editTask,
            },
        });
        setOnEdit(false);
    };

    console.log(task);
    return (
        <>
            <div>
                {task.map((tasks, index) => {
                    return (
                        <>
                            {onEdit === index ? (
                                <>
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            setEditTask(e.target.value)
                                        }
                                    />
                                    <button onClick={() => handleUpdate(index)}>
                                        Save
                                    </button>
                                </>
                            ) : (
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
                                        Done
                                    </label>

                                    <button
                                        disabled={tasks.done}
                                        onClick={() => setOnEdit(index)}
                                    >
                                        Update
                                    </button>
                                </>
                            )}
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default TodoList;

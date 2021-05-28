import { AppContext } from "../Helper/Context";
import { useContext, useState } from "react";

const TodoList = () => {
    const { task, dispatch } = useContext(AppContext);
    const [onEdit, setOnEdit] = useState(null);
    const [editTask, setEditTask] = useState("");

    // Si action, transférer les données à useContext et useReducer

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
        if (editTask) {
            dispatch({
                type: "UPDATE",
                payload: {
                    i,
                    editTask,
                },
            });
        }
        setOnEdit(false);
    };

    return (
        <div className="listing">
            {task.length === 0 && (
                <div className="nothing">
                    Il n'y a rien à faire pour le moment 😴
                </div>
            )}
            {task.map((tasks, index) => {
                return (
                    <div key={index} className="todo">
                        {onEdit === index ? (
                            <>
                                <div>
                                    <input
                                        className="update"
                                        value={task.name}
                                        placeholder={tasks.name}
                                        type="text"
                                        onChange={(e) =>
                                            setEditTask(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <button onClick={() => handleUpdate(index)}>
                                        Sauvegarder
                                    </button>
                                    <button onClick={() => setOnEdit(false)}>
                                        <span className="material-icons">
                                            close
                                        </span>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label
                                        className={
                                            tasks.done
                                                ? "done-task"
                                                : "not-done"
                                        }
                                        htmlFor={index}
                                    >
                                        <input
                                            className="check"
                                            id={index}
                                            type="checkbox"
                                            onChange={() =>
                                                handleCheck(index, tasks.done)
                                            }
                                        />
                                    </label>
                                    <div className={tasks.done ? "done" : ""}>
                                        {tasks.name}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        className={tasks.done ? "btn-done" : ""}
                                        disabled={tasks.done}
                                        onClick={() => setOnEdit(index)}
                                    >
                                        Modifier
                                    </button>

                                    <button
                                        onClick={() => {
                                            handleDelete(index);
                                        }}
                                    >
                                        <span className="material-icons">
                                            delete_forever
                                        </span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;

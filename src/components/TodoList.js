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
        <div className="listing">
            {task.length === 0 && (
                <div className="nothing">
                    Il n'y a rien à faire pour le moment 😴
                </div>
            )}
            {task.map((tasks, index) => {
                return (
                    <div className="todo">
                        {onEdit === index ? (
                            <>
                                <input
                                    value={editTask}
                                    placeholder={tasks.name}
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
                                <div>
                                    <label
                                        className={
                                            tasks.done
                                                ? "done-task"
                                                : "not-done"
                                        }
                                        htmlFor="done"
                                    >
                                        <input
                                            id="done"
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
                                        <span class="material-icons">
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

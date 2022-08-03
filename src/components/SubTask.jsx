import React from "react";
import ProgressContext from "../contexts/ProgressContext";
import { useContext } from "react";

function SubTask({ task }) {
    const { updateTaskStatus, updateTaskValue } = useContext(ProgressContext);
    // console.log(task);
    return (
        <div
            className={`${task.isCompleted ? "task task--completed" : "task"}`}
            onClick={(e) => {
                if (e.target.id) {
                    return;
                } else {
                    updateTaskValue(task);
                }
            }}
        >
            <p className="task-content">{task.content}</p>
            <input
                type="checkbox"
                id="input-check-box"
                onClick={(e) => {
                    updateTaskStatus(task);
                }}
            />
        </div>
    );
}

export default SubTask;

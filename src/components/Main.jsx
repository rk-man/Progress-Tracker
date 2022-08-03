import React from "react";
import TaskList from "./TaskList";
import ProgressStatus from "./ProgressStatus";

//contexts

import { useContext } from "react";
import ProgressContext from "../contexts/ProgressContext";



function Main() {
    const {
        addTask,

        editTask,
        content,
        tasktoBeEdited,
        changeTaskValue,
        setContent,
        setTaskToBeEdited,
    } = useContext(ProgressContext);

    return (
        <div className="tracker-container">
            <input
                type="text"
                id="tracker-project-name"
                name="tracker-project-name"
                placeholder="Project Name...."
            />
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (content.length > 5) {
                        if (tasktoBeEdited.edit) {
                            editTask(tasktoBeEdited.task, content);
                            setTaskToBeEdited({
                                task: {},
                                edit: false,
                            });
                        } else {
                            addTask(content);
                        }
                    }
                    setContent("");
                }}
                className="sub-tasks-container"
            >
                <button type="submit" className="btn-new-task">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-new-task"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <textarea
                        id="input-task-content"
                        name="text-content"
                        cols="60"
                        rows="1"
                        placeholder="Enter your task here"
                        onChange={(e) => {
                            changeTaskValue(e);
                        }}
                        value={content}
                    ></textarea>
                </div>

                <TaskList />
            </form>
            <ProgressStatus />
        </div>
    );
}

export default Main;

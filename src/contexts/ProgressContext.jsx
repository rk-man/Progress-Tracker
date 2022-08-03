import { createContext, useState } from "react";
import PropTypes from "prop-types";
const ProgressContext = createContext();

//create context -> provide the context to the components -> consume the properties in the value inside the components
//to replace passing the global state variables and functions down the component tree
export function ProgressContextProvider({ children }) {
    const [subTasks, setSubTasks] = useState([]);
    const [content, setContent] = useState("");
    const [tasktoBeEdited, setTaskToBeEdited] = useState({
        task: {},
        edit: false,
    });
    const changeTaskValue = (e) => {
        setContent(e.target.value);
    };
    const updateTaskValue = (task) => {
        setContent(task.content);
        setTaskToBeEdited({
            task: task,
            edit: true,
        });
    };

    const addTask = (content) => {
        const newTask = {
            id: subTasks.length + 1,
            content,
            isCompleted: false,
        };
        console.log(newTask);
        setSubTasks([...subTasks, newTask]);
    };
    const editTask = (task, newContent) => {
        console.log(task);
        setSubTasks(
            subTasks.map((item) => {
                if (item.id === task.id) {
                    item.content = newContent;
                    return item;
                } else {
                    return item;
                }
            })
        );
    };

    const updateTaskStatus = (task) => {
        setSubTasks(
            subTasks.map((item) => {
                if (item.id === task.id) {
                    if (!item.isCompleted) {
                        item.isCompleted = true;
                    } else {
                        item.isCompleted = false;
                    }

                    return item;
                } else {
                    return item;
                }
            })
        );
    };

    return (
        <ProgressContext.Provider
            value={{
                addTask,
                subTasks,
                editTask,
                updateTaskStatus,
                changeTaskValue,
                updateTaskValue,
                content,
                tasktoBeEdited,
                setContent,
                setTaskToBeEdited,
            }}
        >
            {children}
        </ProgressContext.Provider>
    );
}

export default ProgressContext;

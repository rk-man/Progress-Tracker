import SubTask from "./SubTask";

import ProgressContext from "../contexts/ProgressContext";
import { useContext } from "react";
function TaskList() {
    const { subTasks } = useContext(ProgressContext);
    return (
        <div className="task-list-container">
            {subTasks.map((task) => {
                return <SubTask task={task} key={task.id} />;
            })}
        </div>
    );
}

export default TaskList;

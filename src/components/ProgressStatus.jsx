import { useState, useEffect } from "react";

import ProgressContext from "../contexts/ProgressContext";
import { useContext } from "react";
function ProgressStatus() {
    const { subTasks } = useContext(ProgressContext);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (subTasks.length > 0) {
            let totalProgress = 0;
            let totalTasks = subTasks.length;
            let incrementalProgress = Math.floor(100 / totalTasks);

            //for each iteration checking whether the incompleted tasks are 0, if 0 then I need to convert total progress to 100 cause We have just completed the last task
            let incompletedTasks = subTasks.filter((t) => {
                return t.isCompleted === false;
            }).length;

            if (incompletedTasks === 0) {
                totalProgress = 100;
                setProgress(totalProgress);
                return;
            }

            //else, I check if any task is completed, and there are still some tasks pending, I will increment the progress status
            subTasks.forEach((task, index) => {
                if (task.isCompleted) {
                    totalProgress = totalProgress + incrementalProgress;
                }

                setProgress(totalProgress);
            });
        }
    }, [subTasks]);

    return <h1 className="progress-status">{progress}%</h1>;
}

export default ProgressStatus;

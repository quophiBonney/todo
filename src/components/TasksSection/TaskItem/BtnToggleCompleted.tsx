import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import Tooltip from "../../Utilities/Tooltip";
import { ReactComponent as SvgX } from "../../../assets/x.svg";
import { ReactComponent as Check } from "../../../assets/check.svg";

const BtnToggleCompleted: React.FC<{
  taskCompleted: boolean;
  taskId: string;
}> = ({ taskCompleted, taskId }) => {
  const dispatch = useAppDispatch();

  const toggleTaskCompleted = (id: string) => {
    dispatch(tasksActions.toggleTaskCompleted(id));
  };

  return (
    <Tooltip
      txt={taskCompleted ? "mark as uncompleted" : "mark as completed"}
      className="mr-4"
    >
      <button
        className={`${
          taskCompleted
            ? "bg-emerald-200 text-emerald-800 "
            : "bg-yellow-100 text-yellow-700 "
        } rounded-full font-medium`}
        onClick={() => toggleTaskCompleted(taskId)}
      >
        <span className="block py-1 px-3 absolute invisible sm:static sm:visible">
          {taskCompleted ? "completed" : "uncompleted"}
        </span>
        <span className=" sm:hidden w-6 h-6 grid place-items-center">
          {taskCompleted ? (
            <Check className="w-3 h-3" />
          ) : (
            <SvgX className="w-3 h-3" />
          )}
        </span>
      </button>
    </Tooltip>
  );
};

export default BtnToggleCompleted;
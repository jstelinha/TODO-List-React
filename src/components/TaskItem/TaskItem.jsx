import React from 'react';
import Check from '../Check/Check';
import { IconTrash } from '@tabler/icons-react';

function TaskItem({ task, toggleCompletion, deleteTask }) {
  return (
    <div className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400">
      <div className="flex gap-2">
        <Check isChecked={task.completed} onToggle={toggleCompletion} />
        <p className={task.completed ? 'line-through text-cinza-300' : ''}>{task.text}</p>
      </div>
      <IconTrash onClick={deleteTask} />
    </div>
  );
}

export default TaskItem;

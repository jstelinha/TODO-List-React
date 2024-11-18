import React from 'react';

function TaskListHeader({ tasksCount, completedTasks }) {
  return (
    <header className="flex flex-1 justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-azul">
        <p className="text-sm">Tarefas criadas</p>
        <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
          {tasksCount}
        </span>
      </div>
      <div className="flex items-center gap-2 font-bold text-roxo">
        <p className="text-sm">Concluídas</p>
        <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
          {completedTasks} de {tasksCount}
        </span>
      </div>
    </header>
  );
}

export default TaskListHeader;

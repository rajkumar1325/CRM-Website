import { useState } from "react";
import TodoIcon from "./task-list.svg?react";

export default function TodoList({darkMode = false}) {
  // 🧩 Main task list
  const [tasks, setTasks] = useState([
    { id: 1, text: "Follow up with John Doe", done: true },
    { id: 2, text: "Send contract to Acme Inc", done: false },
    { id: 3, text: "Call Jane Smith", done: true },
    { id: 4, text: "Prepare proposal for XYZ.Corp", done: false },
    { id: 5, text: "Schedule product demo", done: false },
  ]);

  // .................................................... Deleted task history
  const [history, setHistory] = useState([]);

  // ............................................ UI states
  const [showMenu, setShowMenu] = useState(false);
  const [newTask, setNewTask] = useState("");

  // ....................... Toggle task completion
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  // ➕ Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: newTask.trim(), done: false },
    ]);
    setNewTask("");
  };

  // ❌ Delete a task (and add to history)
  const deleteTask = (id) => {
    setTasks((prev) => {
      const deletedTask = prev.find((t) => t.id === id);
      if (deletedTask) setHistory((h) => [deletedTask, ...h]);
      return prev.filter((t) => t.id !== id);
    });
  };

  // 🧠 Toggle menu visibility
  const handleTaskMenu = () => setShowMenu(!showMenu);

  // 🔒 Close dialog function
  const closeDialog = () => setShowMenu(false);

  return (
    <div className={`w-full h-full md:w-5/10  p-5 rounded-2xl shadow-lg relative  
        ${darkMode ? "bg-[#21212D] text-white"  : "bg-white text-black"}`
        }>


      {/*  Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Tasks</h2>
        <TodoIcon
          onClick={handleTaskMenu}
          className="w-5 h-5  cursor-pointer "
        />
      </div>

      {/*  Task List */}
      <div className="space-y-3 mb-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between cursor-pointer"
          >
            <div
              className="flex items-center space-x-3"
              onClick={() => toggleTask(task.id)}
            >

              {/* task list checkbox */}
              <input
                type="checkbox"
                checked={task.done}
                readOnly
                className="w-4 h-4 rounded border-gray-500 bg-transparent accent-green-400"
              />
              <span
                className={`text-sm ${
                  task.done
                    ? darkMode ? "line-through text-gray-200" : "line-through text-gray-400"
                    : darkMode ? "text-gray-200" : "text-gray-950"
                }`}
              >
                {task.text}
              </span>
            </div>



            {/*  Delete Button */}
            <button
              onClick={() => deleteTask(task.id)}
              className="text-gray-500 hover:text-red-400 text-xs"
            >
              ✕
            </button>
          </div>
        ))}
      </div>



      {/* ➕ Add/Delete Menu (Dialog Box) */}
      {showMenu && (
        <div className= {`absolute top-12 right-5  border border-gray-700 rounded-lg p-4 w-64 shadow-xl z-10 
              ${darkMode ?
                  "bg-[#1c2434] text-white" : " bg-[#f3f4f6] text-black"
              }`
              }>
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold">Manage Tasks</h3>
            <button
              onClick={closeDialog}
              className="text-gray-400 hover:text-red-400 text-xs font-bold"
            >
              ✕
            </button>
          </div>

          {/* Add New Task Input */}
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter new task..."
              className= {`w-full px-2 py-1 rounded  border border-gray-600 text-sm focus:outline-none focus:border-gray-400  
                    ${darkMode ?
                  "bg-[#1c2434] text-white" : " bg-[#f3f4f6] text-black"
              }}`}
            />
            <button
              onClick={addTask}
              className="bg-green-500 hover:bg-green-600 text-white px-3 rounded text-sm"
            >
              Add
            </button>
          </div>

          {/* Task History Section */}
          <div>
            <h4 className="text-xs text-red-400 mb-1">Deleted History</h4>
            {history.length === 0 ? (
              <p className="text-xs text-gray-500 italic">No deleted tasks</p>
            ) : (
              <ul className="text-xs max-h-24 overflow-y-auto space-y-1">
                {history.map((h) => (
                  <li key={h.id} className="text-gray-400 line-through">
                    {h.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

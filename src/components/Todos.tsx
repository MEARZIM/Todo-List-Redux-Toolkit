import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import {  
  updateTodo, 
  Todo, 
  deleteTodo 
} from "../features/todo/todoSlice";
import { RootState } from "../app/Store";

export const Todos = () => {
  const [updateSectionId, setUpdateSectionId] = useState<string | null>(null); // Track the id of the todo item to update
  const [updatedText, setUpdatedText] = useState<string>('');

  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleUpdateTodo = (id: string) => {
    setUpdateSectionId(id); // Set the id of the todo item to update
    setUpdatedText(''); // Clear the updated text when switching to update mode
  }

  const handleUpdate = () => {
    if (!updateSectionId) return; // If no todo item is selected, return
    dispatch(updateTodo({
      id: updateSectionId,
      newText: updatedText
    }));
    setUpdateSectionId(null); // Reset the id to exit the update mode
  }

  return (
    <section>
      <ul className="list-none bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {todos.map((todo: Todo) => (
          <li key={todo.id} className="m-4 flex justify-between items-center mx-10">
            <span className="text-black font-serif font-bold p-4 w-48 border border-black">You Enter{"-> "} <span className="text-green-500">{todo.text}</span></span>

            {updateSectionId === todo.id ? ( // Check if this todo item is selected for update
              <>
                <input
                  type="text"
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                  className="p-2 border border-gray-300 rounded"
                  placeholder="Update todo"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded"
                  onClick={() => handleUpdateTodo(todo.id)}
                >
                  Update
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

import { useState } from "react"
import { useDispatch } from "react-redux";

import {
    addTodo,
} from "../features/todo/todoSlice"

export const Form = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>("");

    const handleAddTodo = (e:any) => {
        e.preventDefault();
        dispatch(addTodo(text))
        setText("");
    }
    
    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleAddTodo}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Add AnyThing
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="AddTodo" 
                        type="text" 
                        value={text}
                        placeholder="Type Any Thing" 
                        onChange={(e)=>setText(e.target.value)}
                    />
                </div>
                
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="button"
                        onClick={handleAddTodo}
                    >
                       ADD
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        
                    </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy; Created By Ayan Saha.
            </p>
        </div>
    )
}

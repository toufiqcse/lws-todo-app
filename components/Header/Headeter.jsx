import { added, allCompleted, clearCompleted } from "@/redux/todos/actionCreators"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Headeter = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos);

    const handleGetAllCompleteTask = () => {
        dispatch(allCompleted())
    }

    const clearCompleteTask = () => {
        dispatch(clearCompleted())
    }

    const [todoInput, setTodoInput] = useState("")

    const handleInput = (e) => {
        setTodoInput(e.target.value)
    }
    const handleSubmit = (e,) => {
        e.preventDefault();
        if (todoInput === "") {
            alert("Please write thr todo")
        } else {
            dispatch(added(todoInput));
            setTodoInput("")
        }

    }

    return (
        <>
            <div >
                <div>
                    <form onSubmit={handleSubmit}
                        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                    >
                        <img
                            src="notes.png"
                            className="w-6 h-6"
                            alt="Add todo"
                        />
                        <input
                            type="text"
                            placeholder="Type your todo"
                            onChange={handleInput}
                            value={todoInput}
                            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                        />
                        <button
                            type="submit"
                            className="appearance-none w-8 h-8 bg-[url('./plus.png')] bg-no-repeat bg-contain"
                        ></button>
                    </form>

                    <ul className="flex justify-between my-4 text-xs text-gray-500">
                        <li className="flex space-x-1 cursor-pointer">
                            <img
                                className="w-4 h-4"
                                src="/double-tick.png"
                                alt="Complete"
                            />
                            <span onClick={handleGetAllCompleteTask}>Complete All Tasks</span>
                        </li>
                        <li className="cursor-pointer" onClick={clearCompleteTask}>Clear completed</li>
                    </ul>
                </div>
                <hr className="mt-4" />
            </div>

        </>
    )
}

export default Headeter
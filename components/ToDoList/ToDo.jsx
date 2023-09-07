import { colorSelected, deleted, toggled } from "@/redux/todos/actionCreators";
import { useDispatch, useSelector } from "react-redux"

const ToDo = ({ todo }) => {
    const dispatch = useDispatch()
    const { text, id, completed, color } = todo;

    const handleStatusChanged = (todoId) => {
        dispatch(toggled(todoId))
    }

    const handleColorChanged = (todoId, color) => {
        dispatch(colorSelected(todoId, color))
    }
    const handleDelete = (todoId) => {
        dispatch(deleted(todoId))
    }

    return (
        <div>
            <div
                className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
            >
                <div
                    className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && 'border-green-500 focus-within:border-green-500'}`}
                >
                    <input
                        type="checkbox"
                        className="opacity-0 absolute rounded-full"
                        checked={completed}
                        onChange={() => handleStatusChanged(id)}
                    />
                    {
                        completed &&
                        <svg
                            className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
                            viewBox="0 0 20 20"
                        >
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                    }
                </div>

                <div className={`select-none flex-1  ${completed && 'line-through'}`}>
                    {text}
                </div>

                <div
                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${color === "green" && ' bg-green-500 '} `}
                    onClick={() => handleColorChanged(id, "green")}
                ></div>

                <div
                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${color === "yellow" && 'bg-yellow-500 '} `}
                    onClick={() => handleColorChanged(id, "yellow")}
                ></div>

                <div
                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${color === "red" && ' bg-red-500'} `}
                    onClick={() => handleColorChanged(id, "red")}
                ></div>

                <img
                    src="/cancel.png"
                    className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                    alt="Cancel"
                    onClick={() => handleDelete(id)}
                />
            </div>
        </div>
    )
}

export default ToDo
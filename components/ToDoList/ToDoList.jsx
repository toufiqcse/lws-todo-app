import { useSelector } from "react-redux"
import ToDo from "./ToDo"

const ToDoList = () => {
    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)

    const filterByStatus = (todo) => {
        const { status, color } = filters;
        switch (status) {
            case "Complete":
                return todo.completed
            case "Incomplete":
                return !todo.completed;

            default:
                return true
        }
    }
    const filterByColor = (todo) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    }
    return (
        <>
            {
                todos
                    .filter(filterByStatus)
                    .filter(filterByColor)
                    .map((todo, i) => (
                        <ToDo key={i} todo={todo} />
                    ))
            }

        </>
    )
}

export default ToDoList
import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

const App = () => {
	const [textbox, setTextbox] = useState("");
	const [todos, setTodos] = useState([]);

	const textBoxEvent = (event) => setTextbox(event.target.value);

	const addTodo = () => {
		// timeStamp will be unique, so will serve as a constant ID, unlike index, which can change for a todo if the list is modified
		// also added a done boolean
		setTodos((oldtodos) => [
			...oldtodos,
			{
				text: textbox,
				timeStamp: new Date().toISOString(),
				done: false,
			},
		]);
		setTextbox("");
	};

	const deleteTodo = (id) =>
		// using timeStamp as id to identify the todo
		setTodos((oldtodos) => {
			return oldtodos.filter((arrElem) => {
				return arrElem.timeStamp !== id;
			});
		});

	const toggleCheckbox = (id) =>
		// to toggle the checkbox for the selected todo
		// if the return object is in one-line, no need for the curly braces and the return keyword
		setTodos((oldtodos) =>
			oldtodos.map((arrElem) => {
				if (arrElem.timeStamp == id) {
					return {
						...arrElem,
						done: !arrElem.done,
					};
				} else {
					return arrElem;
				}
			})
		);

	return (
		<div className="main_div">
			<div className="center_div">
				<br />
				<h1 className="text-3xl font-bold ">ToDo List</h1>
				<br />
				<input
					type="text"
					placeholder="Add a task"
					onChange={textBoxEvent}
					value={textbox}
				/>
				<button onClick={addTodo}>+</button>

				<ol>
					{todos.map((itemval) => {
						return (
							// using timeStamp as key, since it is unique as well as constant
							// timeStamp (todo id) is already in data
							<Todo
								key={itemval.timeStamp}
								data={itemval}
								deleteTodo={deleteTodo}
								toggleCheckbox={toggleCheckbox}
							/>
						);
					})}
				</ol>
			</div>
		</div>
	);
};

export default App;

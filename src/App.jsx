import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

const App = () => {
	const [textbox, setTextbox] = useState("");
	const [todos, setTodos] = useState([]);

	const textBoxEvent = (event) => setTextbox(event.target.value);

	const addTodo = () => {
		// timeStamp will be unique, so will serve as a constant ID, unlike index, which can change for a todo if the list is modified
		// also added a done boolean
		const newList = [
			...todos,
			{
				text: textbox,
				timeStamp: new Date().toISOString(),
				done: false,
			},
		];
		setTodos(newList);
		storeTodosInLocalStorage(newList);
		setTextbox("");
	};

	const deleteTodo = (id) =>
		// using timeStamp as id to identify the todo
		{
			const newList = todos.filter((arrElem) => arrElem.timeStamp !== id);
			setTodos(newList);
			// after the above line, it takes a while for todos state to actually change. So, I will simply pass the newList in storeTodosInLocalStorage function instead of reading the todos variable from there
			// ref: https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
			storeTodosInLocalStorage(newList);
		};

	const toggleCheckbox = (id) =>
		// to toggle the checkbox for the selected todo
		// if the return object is in one-line, no need for the curly braces and the return keyword
		{
			const newList = todos.map((arrElem) => {
				if (arrElem.timeStamp == id) {
					return {
						...arrElem,
						done: !arrElem.done,
					};
				} else {
					return arrElem;
				}
			});
			setTodos(newList);
			storeTodosInLocalStorage(newList);
		};

	function storeTodosInLocalStorage(newList) {
		// can only store strings in localStorage, so since our todos data is already in JSON, we can stringify it
		localStorage.setItem("my_todos", JSON.stringify(newList));
	}

	function getTodosFromLocalStorage() {
		let x = localStorage.getItem("my_todos");

		if (x != null || x != undefined) {
			// convert from string to JSON object, then restore our todos list
			setTodos(JSON.parse(x));
		}
	}

	// when page loads, check if localStorage has any todos
	useEffect(() => getTodosFromLocalStorage(), []);

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

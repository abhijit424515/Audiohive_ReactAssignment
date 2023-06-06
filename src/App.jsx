import { useState } from "react";
import "./App.css";
import React from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
	const [inputList, setInputList] = useState("");
	const [Items, setItems] = useState([]);
	const itemEvent = (event) => {
		setInputList(event.target.value);
	};

	const listOfItems = () => {
		// timeStamp will be unique, so will serve as a constant ID, unlike index, which can change for a todo if the list is modified
		// also added a done boolean
		setItems((oldItems) => {
			return [
				...oldItems,
				{
					text: inputList,
					timeStamp: new Date().toISOString(),
					done: false,
				},
			];
		});
		setInputList("");
	};

	const deleteItems = (id) => {
		// using timeStamp as id to identify the todo
		setItems((oldItems) => {
			return oldItems.filter((arrElem) => {
				return arrElem.timeStamp !== id;
			});
		});
	};

	const toggleCheckbox = (id) => {
		// to toggle the checkbox for the selected todo
		setItems((oldItems) => {
			return oldItems.map((arrElem) => {
				if (arrElem.timeStamp == id) {
					return {
						...arrElem,
						done: !arrElem.done,
					};
				} else {
					return arrElem;
				}
			});
		});
	};

	return (
		<div className="main_div">
			<div className="center_div">
				<br />
				<h1 className="text-3xl font-bold ">ToDo List</h1>
				<br />
				<input
					type="text"
					placeholder="Add a task"
					name=""
					id=""
					onChange={itemEvent}
					value={inputList}
				/>
				<button onClick={listOfItems}> +</button>

				<ol>
					{Items.map((itemval) => {
						return (
							// using timeStamp as key and id, since it is unique as well as constant
							<ToDoLists
								key={itemval.timeStamp}
								id={itemval.timeStamp}
								data={itemval}
								onSelect={deleteItems}
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

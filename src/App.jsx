import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { useLongPress } from "use-long-press";
import ToDoLists from "./ToDoLists";

const App = () => {
	const [inputList, setInputList] = useState("");
	const [Items, setItems] = useState([]);
	const itemEvent = (event) => {
		setInputList(event.target.value);
	};

	const listOfItems = () => {
		setItems((oldItems) => {
			return [...oldItems, inputList];
		});
		setInputList("");
	};

	const deleteItems = (id) => {
		console.log("DED");
		setItems((oldItems) => {
			return oldItems.filter((arrElem, index) => {
				return index !== id;
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
					{/* <li>{inputList}</li> */}
					{Items.map((itemval, index) => {
						return (
							<ToDoLists
								key={index}
								id={index}
								text={itemval}
								onSelect={deleteItems}
							/>
						);
					})}
				</ol>
			</div>
		</div>
	);
};

export default App;

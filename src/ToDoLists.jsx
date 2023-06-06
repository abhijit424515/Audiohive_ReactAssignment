import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";

const ToDoLists = (props) => {
	return (
		<>
			<div className="todo_style">
				<i
					className="icon"
					onClick={() => {
						props.onSelect(props.data.timeStamp);
					}}
				>
					<BsFillXCircleFill />
				</i>
				<li>{props.data.text}</li>
				<input
					type="checkbox"
					value={props.data.done}
					onChange={() => {
						props.toggleCheckbox(props.data.timeStamp);
					}}
				/>
			</div>
		</>
	);
};

export default ToDoLists;

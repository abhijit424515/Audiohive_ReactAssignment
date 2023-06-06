import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";

const ToDoLists = (props) => {
	return (
		<>
			<div className="todo_style">
				<i
					className="icon"
					onClick={() => {
						props.onSelect(props.id);
					}}
				>
					<BsFillXCircleFill />
				</i>
				<li>{props.text}</li>
			</div>
		</>
	);
};

export default ToDoLists;

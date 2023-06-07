import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";

const Todo = ({ data, deleteTodo, toggleCheckbox }) => {
	return (
		<>
			<div className="todo_style">
				<i className="icon" onClick={() => deleteTodo(data.timeStamp)}>
					<BsFillXCircleFill />
				</i>
				<div>{data.text}</div>
				<input
					type="checkbox"
					value={data.done}
					onChange={() => toggleCheckbox(data.timeStamp)}
				/>
			</div>
		</>
	);
};

export default Todo;

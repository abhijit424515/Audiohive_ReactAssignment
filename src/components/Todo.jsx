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
					// it's called defaultChecked, not value in a checkbox
					// the checked state was not being stored, so upon logging the data, I concluded that the data is stored correctly, but the checkbox did not show the correct marking, so I searched it
					// ref: https://bobbyhadz.com/blog/react-set-checkbox-checked
					defaultChecked={data.done}
					onChange={() => toggleCheckbox(data.timeStamp)}
				/>
			</div>
		</>
	);
};

export default Todo;

/* eslint-disable react/prop-types */

export function Header(props) {
	const { todos } = props;
	const todosLength = todos.length;
	const isPlural = todos.length != 1;
	const taskOrTasks = isPlural ? "todos" : "todo";
	return (
		<header>
			<h1 className="text-gradient">
				You have {todosLength} open {taskOrTasks}.
			</h1>
		</header>
	);
}

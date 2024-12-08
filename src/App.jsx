import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { useEffect, useState } from "react";

function App() {
	const [todos, setTodos] = useState([
		{ input: "Hello! Add Your First Todo!", complete: true },
	]);

	const [selectedTab, setSelectedTab] = useState("Open");

	function handleAddTodo(newTodo) {
		const newTodoList = [...todos, { input: newTodo, complete: false }];
		setTodos(newTodoList);
		handleSaveData(newTodoList);
	}
	function handleCompleteTodo(index) {
		let newTodoList = [...todos];
		let completedTodo = todos[index];
		completedTodo["complete"] = true;
		newTodoList[index] = completedTodo;
		setTodos(newTodoList);
    handleSaveData(newTodoList);
	}

	function handleDeleteTodo(index) {
		let newTodoList = todos.filter((val, valIndex) => {
			return valIndex !== index;
		});
		setTodos(newTodoList);
    handleSaveData(newTodoList);
	}

	function handleSaveData(currTodos) {
		localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
	}
	useEffect(
		(/*to check in local storage*/) => {
			if (!localStorage || !localStorage.getItem("todo-app")) return;
			let db = JSON.parse(localStorage.getItem("todo-app"));
			setTodos(db.todos);
		},
		[
			/* dependancy array (unmount event) */
		]
	);

	return (
		<>
			<Header todos={todos} />
			<Tabs
				selectedTab={selectedTab}
				setSelectedTab={setSelectedTab}
				todos={todos}
			/>
			<TodoList
				handleCompleteTodo={handleCompleteTodo}
				handleDeleteTodo={handleDeleteTodo}
				selectedTab={selectedTab}
				todos={todos}
			/>
			<TodoInput handleAddTodo={handleAddTodo} />
		</>
	);
}

export default App;

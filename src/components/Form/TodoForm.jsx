import './TodoForm.css'
import { useState, useEffect, useCallback } from 'react'
import TodoInputTitle from './TodoInputTitle/TodoInputTitle.jsx'
import TodoInputDescription from './TodoInputDescription/TodoInputDescription.jsx'

import TodoBtn from './TodoBtn/TodoBtn.jsx'
import BtnArea from './BtnArea/BtnArea.jsx'
import TodoList from './TodoList/TodoList.jsx'
const TodoForm = () => {
	const [activeBtn, setActiveBtn] = useState('todo')
	const [allTodos, setAllTodos] = useState([])
	const [newTitle, setNewTitle] = useState('')
	const [newDescription, setNewDescription] = useState('')
	const [completedTodos, setCompletedTodos] = useState([])

	const handleAddTodo = useCallback(() => {
		if (!newTitle.trim() || !newDescription.trim()) return

		setAllTodos(prev => {
			const updatedTodos = [
				{ title: newTitle, description: newDescription, id: Date.now() },
				...prev,
			]
			localStorage.setItem('todolist', JSON.stringify(updatedTodos))
			return updatedTodos
		})
		setNewTitle('')
		setNewDescription('')
	}, [newTitle, newDescription])

	const handleDeleteTodo = useCallback(id => {
		const updatedTodos = allTodos.filter(todo => todo.id !== id)
		localStorage.setItem('todolist', JSON.stringify(updatedTodos))
		setAllTodos(updatedTodos)
	}, [])

	const handleCompleteTodo = useCallback(id => {
		const now = new Date()
		const completedOn = `${String(now.getDate()).padStart(2, '0')}-${String(
			now.getMonth() + 1
		).padStart(2, '0')}-${now.getFullYear()} в ${String(
			now.getHours()
		).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(
			now.getSeconds()
		).padStart(2, '0')}`

		const filteredItem = allTodos.find(todo => todo.id === id)
		if (!filteredItem) return

		const completedItem = { ...filteredItem, completedOn }

		setCompletedTodos(prev => {
			const updatedCompleted = [completedItem, ...prev]
			localStorage.setItem('completedTodos', JSON.stringify(updatedCompleted))
			return updatedCompleted
		})

		const remainingTodos = allTodos.filter(todo => todo.id !== id)
		localStorage.setItem('todolist', JSON.stringify(remainingTodos))
		setAllTodos(remainingTodos)
	}, [])

	const handleDeleteCompletedTodo = useCallback(id => {
		const updatedCompleted = completedTodos.filter(todo => todo.id !== id)
		localStorage.setItem('completedTodos', JSON.stringify(updatedCompleted))
		setCompletedTodos(updatedCompleted)
	}, [])
	useEffect(() => {
		const savedTodo = JSON.parse(localStorage.getItem('todolist'))
		const savedCompleted = JSON.parse(localStorage.getItem('completedTodos'))
		if (Array.isArray(savedTodo)) setAllTodos(savedTodo)
		if (Array.isArray(savedCompleted)) setCompletedTodos(savedCompleted)
	}, [])

	return (
		<div className='todo__wrapper'>
			<div className='todo__form-input'>
				<TodoInputTitle
					title={newTitle}
					inputTitle={e => setNewTitle(e.target.value)}
				/>
				<TodoInputDescription
					description={newDescription}
					inputDescription={e => setNewDescription(e.target.value)}
				/>
				<TodoBtn handleAddTodo={handleAddTodo} />
			</div>
			<BtnArea activeBtn={activeBtn} setActiveBtn={setActiveBtn} />

			{activeBtn === 'todo' ? (
				<TodoList
					all={allTodos}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
					showCompleteIcon={true}
				/>
			) : (
				<TodoList
					all={completedTodos}
					handleDeleteTodo={handleDeleteCompletedTodo}
					showCompleteIcon={false}
				/>
			)}
		</div>
	)
}

export default TodoForm

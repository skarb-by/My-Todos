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
	const [currentEdit, setCurrentEdit] = useState('')
	const [currentEditedItem, setCurrentEditItem] = useState(null)

	const handleAddTodo = useCallback(() => {
		if (!newTitle.trim() || !newDescription.trim()) return

		const newTodo = {
			title: newTitle,
			description: newDescription,
			id: Date.now(),
		}

		const updatedTodos = [newTodo, ...allTodos]

		setAllTodos(updatedTodos)
		localStorage.setItem('todolist', JSON.stringify(updatedTodos))

		setNewTitle('')
		setNewDescription('')
	}, [newTitle, newDescription, allTodos])

	const handleDeleteTodo = useCallback(
		id => {
			const updatedTodos = allTodos.filter(todo => todo.id !== id)
			setAllTodos(updatedTodos)
			localStorage.setItem('todolist', JSON.stringify(updatedTodos))
		},
		[allTodos]
	)

	const handleCompleteTodo = useCallback(
		id => {
			const now = new Date()
			const completedOn = `${String(now.getDate()).padStart(2, '0')}-${String(
				now.getMonth() + 1
			).padStart(2, '0')}-${now.getFullYear()} в ${String(
				now.getHours()
			).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(
				now.getSeconds()
			).padStart(2, '0')}`

			const todoToComplete = allTodos.find(todo => todo.id === id)
			if (!todoToComplete) return

			const remainingTodos = allTodos.filter(todo => todo.id !== id)
			const updatedCompleted = [
				{ ...todoToComplete, completedOn },
				...completedTodos,
			]

			setAllTodos(remainingTodos)
			setCompletedTodos(updatedCompleted)

			localStorage.setItem('todolist', JSON.stringify(remainingTodos))
			localStorage.setItem('completedTodos', JSON.stringify(updatedCompleted))
		},
		[allTodos, completedTodos]
	)

	const handleDeleteCompletedTodo = useCallback(
		id => {
			const updatedCompleted = completedTodos.filter(todo => todo.id !== id)
			setCompletedTodos(updatedCompleted)
			localStorage.setItem('completedTodos', JSON.stringify(updatedCompleted))
		},
		[completedTodos]
	)

	const handleTitleChange = useCallback(e => setNewTitle(e.target.value), [])
	const handleDescriptionChange = useCallback(
		e => setNewDescription(e.target.value),
		[]
	)

	useEffect(() => {
		try {
			const savedTodo = JSON.parse(localStorage.getItem('todolist'))
			const savedCompleted = JSON.parse(localStorage.getItem('completedTodos'))

			if (Array.isArray(savedTodo)) setAllTodos(savedTodo)
			if (Array.isArray(savedCompleted)) setCompletedTodos(savedCompleted)
		} catch (e) {
			console.log(e)
		}
	}, [])
	const handleEdit = useCallback(
		id => {
			setCurrentEdit(id)
			const item = allTodos.find(t => t.id === id)
			setCurrentEditItem(item)
		},
		[allTodos]
	)

	const handleUpdateTitle = useCallback(value => {
		setCurrentEditItem(prev => (prev ? { ...prev, title: value } : prev))
	}, [])

	const handleUpdateDescription = useCallback(value => {
		setCurrentEditItem(prev => (prev ? { ...prev, description: value } : prev))
	}, [])

	const handleUpdateToDo = useCallback(() => {
		const updatedTodos = allTodos.map(todo =>
			todo.id === currentEdit ? currentEditedItem : todo
		)
		setAllTodos(updatedTodos)
		localStorage.setItem('todolist', JSON.stringify(updatedTodos))
		setCurrentEdit('')
		setCurrentEditItem(null)
	}, [allTodos, currentEdit, currentEditedItem])

	const handleUpdateToDoCancel = useCallback(() => {
		setCurrentEdit('')
		setCurrentEditItem(null)
	}, [])

	return (
		<div className='todo__wrapper'>
			<div className='todo__form-input'>
				<TodoInputTitle title={newTitle} inputTitle={handleTitleChange} />
				<TodoInputDescription
					description={newDescription}
					inputDescription={handleDescriptionChange}
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
					currentEdit={currentEdit}
					handleEdit={handleEdit}
					handleUpdateTitle={handleUpdateTitle}
					handleUpdateDescription={handleUpdateDescription}
					currentEditedItem={currentEditedItem}
					handleUpdateToDo={handleUpdateToDo}
					handleUpdateToDoCancel={handleUpdateToDoCancel}
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

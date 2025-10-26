import './App.css'
import Title from './components/Title/Title.jsx'
import TodoForm from './components/Form/TodoForm.jsx'
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx'
function App() {
	return (
		<div className='App'>
			<ThemeToggle />
			<Title />
			<TodoForm />
		</div>
	)
}

export default App

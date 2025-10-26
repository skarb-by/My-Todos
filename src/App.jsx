import './App.css'
import Title from './components/Title/Title.jsx'
import TodoForm from './components/Form/TodoForm.jsx'
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx'
import Clock from './components/Clock/Clock.jsx'
function App() {
	return (
		<div className='App'>
			<div className='top-bar'>
				<Clock />
				<ThemeToggle />
			</div>
			<Title />
			<TodoForm />
		</div>
	)
}

export default App

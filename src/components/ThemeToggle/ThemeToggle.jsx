// ThemeToggle.jsx
import './ThemeToggle.css'
import { useEffect, useState } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
	const [theme, setTheme] = useState('dark')

	// Загружаем тему из localStorage при старте
	useEffect(() => {
		const saved = localStorage.getItem('theme')
		if (saved) setTheme(saved)
	}, [])

	// Применяем тему и сохраняем её
	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
	}

	return (
		<button
			className='theme-toggle'
			onClick={toggleTheme}
			aria-label={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
			title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
		>
			<span className='theme-toggle__icon'>
				{theme === 'dark' ? <BsSunFill /> : <BsMoonStarsFill />}
			</span>
		</button>
	)
}

export default ThemeToggle

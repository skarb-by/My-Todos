import './ThemeToggle.css'
import { useEffect, useState } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem('theme') || 'dark'
	)

	useEffect(() => {
		const saved = localStorage.getItem('theme')
		if (saved) setTheme(saved)
	}, [])

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
			aria-label={
				theme === 'dark'
					? 'Переключить на светлую тему'
					: 'Переключить на тёмную тему'
			}
			title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
		>
			<span className='theme-toggle__icon' aria-hidden='true'>
				{theme === 'dark' ? <BsSunFill /> : <BsMoonStarsFill />}
			</span>
		</button>
	)
}

export default ThemeToggle

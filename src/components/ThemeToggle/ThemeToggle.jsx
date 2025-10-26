import './ThemeToggle.css'
import { useEffect, useState, useCallback, memo } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
	const [theme, setTheme] = useState('dark')

	useEffect(() => {
		const saved = localStorage.getItem('theme')
		if (saved) setTheme(saved)
	}, [])

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = useCallback(() => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
	}, [])

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

export default memo(ThemeToggle)

import './ThemeToggle.css'
import { useEffect, useState, useCallback, memo } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem('theme') || 'dark'
	)

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = useCallback(() => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
	}, [])

	const nextThemeLabel = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'

	return (
		<button
			className='theme-toggle'
			onClick={toggleTheme}
			aria-label={nextThemeLabel}
			title={nextThemeLabel}
		>
			<span className='theme-toggle__icon'>
				{theme === 'dark' ? <BsSunFill /> : <BsMoonStarsFill />}
			</span>
		</button>
	)
}

export default memo(ThemeToggle)

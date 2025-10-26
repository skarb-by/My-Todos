import './Clock.css'
import { useState, useEffect } from 'react'

const Clock = () => {
	const [currentTime, setCurrentTime] = useState(new Date())

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000)

		return () => clearInterval(timerId)
	}, [])

	const formatTime = date => {
		const hours = String(date.getHours()).padStart(2, '0')
		const minutes = String(date.getMinutes()).padStart(2, '0')
		const seconds = String(date.getSeconds()).padStart(2, '0')
		return `${hours}:${minutes}:${seconds}`
	}

	const formatDate = date => {
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = date.getFullYear()
		return `${day}-${month}-${year}`
	}

	return (
		<div className='clock'>
			<div className='clock__time'>{formatTime(currentTime)}</div>
			<div className='clock__date'>{formatDate(currentTime)}</div>
		</div>
	)
}

export default Clock

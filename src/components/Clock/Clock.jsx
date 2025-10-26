import './Clock.css'
import { useState, useEffect } from 'react'

const Clock = () => {
	const [time, setTime] = useState(() => new Date())
	const [showColon, setShowColon] = useState(true)

	useEffect(() => {
		const tick = () => {
			const now = new Date()
			setTime(now)
			const delay = 1000 - now.getMilliseconds()
			timerId = setTimeout(tick, delay)
		}

		let timerId = setTimeout(tick, 1000 - time.getMilliseconds())
		return () => clearTimeout(timerId)
	}, [])

	useEffect(() => {
		const colonTimer = setInterval(() => setShowColon(prev => !prev), 500)
		return () => clearInterval(colonTimer)
	}, [])

	const hours = String(time.getHours()).padStart(2, '0')
	const minutes = String(time.getMinutes()).padStart(2, '0')
	const seconds = String(time.getSeconds()).padStart(2, '0')

	const day = String(time.getDate()).padStart(2, '0')
	const month = String(time.getMonth() + 1).padStart(2, '0')
	const year = time.getFullYear()

	return (
		<div className='clock'>
			<div className='clock__time'>
				{hours}
				<span style={{ opacity: showColon ? 1 : 0 }}>:</span>
				{minutes}
				<span style={{ opacity: showColon ? 1 : 0 }}>:</span>
				{seconds}
			</div>
			<div className='clock__date'>{`${day}-${month}-${year}`}</div>
		</div>
	)
}

export default Clock

import './BtnArea.css'
import { memo, useCallback } from 'react'

const BtnArea = ({ activeBtn, setActiveBtn }) => {
	const buttons = [
		{ id: 'todo', label: 'Активные' },
		{ id: 'completed', label: 'Завершенные' },
	]

	const handleClick = useCallback(id => setActiveBtn(id), [setActiveBtn])

	return (
		<div className='btn__area'>
			{buttons.map((btn, index) => (
				<button
					key={btn.id}
					type='button'
					className={`secondaryBtn ${
						index === buttons.length - 1 ? 'right' : ''
					} ${activeBtn === btn.id ? 'active' : ''}`}
					onClick={() => handleClick(btn.id)}
					aria-pressed={activeBtn === btn.id}
				>
					{btn.label}
				</button>
			))}
		</div>
	)
}

export default memo(BtnArea)

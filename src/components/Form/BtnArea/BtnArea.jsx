import './BtnArea.css'
import { memo } from 'react'

const BtnArea = ({ activeBtn, setActiveBtn }) => {
	return (
		<div className='btn__area'>
			<button
				className={`secondaryBtn ${activeBtn === 'todo' ? 'active' : ''}`}
				type='button'
				onClick={() => setActiveBtn('todo')}
			>
				Активные
			</button>
			<button
				className={`secondaryBtn right ${
					activeBtn === 'completed' ? 'active' : ''
				}`}
				type='button'
				onClick={() => setActiveBtn('completed')}
			>
				Завершенные
			</button>
		</div>
	)
}

export default memo(BtnArea)

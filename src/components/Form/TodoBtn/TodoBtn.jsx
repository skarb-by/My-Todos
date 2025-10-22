import './TodoBtn.css'
import { memo } from 'react'

const TodoBtn = ({ handleAddTodo }) => {
	return (
		<div className='todo__input-item'>
			<button type='button' onClick={handleAddTodo} className='primaryBtn'>
				Добавить
			</button>
		</div>
	)
}

export default memo(TodoBtn)

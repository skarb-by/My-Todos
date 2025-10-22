import './TodoInputDescription.css'
import { memo } from 'react'

const TodoInputDescription = ({ description, inputDescription }) => {
	return (
		<div className='todo__input-item'>
			<label>Описание</label>
			<input
				type='text'
				value={description}
				onChange={inputDescription}
				placeholder='Введите описание задачи...'
			/>
		</div>
	)
}

export default memo(TodoInputDescription)

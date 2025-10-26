import './TodoInputDescription.css'
import { memo } from 'react'

const MAX_LENGTH = 50

const TodoInputDescription = ({ description, inputDescription }) => {
	return (
		<div className='todo__input-item'>
			<label htmlFor='todoDescription'>Описание</label>
			<input
				id='todoDescription'
				type='text'
				value={description}
				onChange={inputDescription}
				placeholder='Введите описание задачи...'
				autoComplete='off'
				aria-label='Описание задачи'
				maxLength={MAX_LENGTH}
			/>
			<small className='description-hint'>
				{description.length}/{MAX_LENGTH} символов
			</small>
		</div>
	)
}

export default memo(TodoInputDescription)

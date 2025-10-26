import './TodoInputTitle.css'
import { memo } from 'react'

const MAX_LENGTH = 20

const TodoInputTitle = ({ title, inputTitle }) => {
	return (
		<div className='todo__input-item'>
			<label htmlFor='todoTitle'>Название задачи</label>
			<input
				id='todoTitle'
				type='text'
				value={title}
				onChange={inputTitle}
				placeholder='Введите заголовок задачи...'
				autoComplete='off'
				aria-label='Заголовок задачи'
				maxLength={MAX_LENGTH}
			/>
			<small className='title-hint'>
				{title.length}/{MAX_LENGTH} символов
			</small>
		</div>
	)
}

export default memo(TodoInputTitle)

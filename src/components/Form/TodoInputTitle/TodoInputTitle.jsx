import './TodoInputTitle.css'
import { memo } from 'react'

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
			/>
		</div>
	)
}

export default memo(TodoInputTitle)

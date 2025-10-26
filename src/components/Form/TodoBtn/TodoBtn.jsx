import './TodoBtn.css'
import { memo, useCallback } from 'react'

const TodoBtn = ({ handleAddTodo, isDisabled }) => {
	const onClick = useCallback(() => {
		if (!isDisabled) handleAddTodo()
	}, [handleAddTodo, isDisabled])

	return (
		<div className='todo__input-item'>
			<button
				type='button'
				onClick={onClick}
				className='primaryBtn'
				disabled={isDisabled}
				aria-label='Добавить задачу'
			>
				Добавить
			</button>
		</div>
	)
}

export default memo(TodoBtn)

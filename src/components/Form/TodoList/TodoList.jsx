import './TodoList.css'
import { memo } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'

const TodoList = ({
	all,
	handleDeleteTodo,
	handleCompleteTodo,

	showCompleteIcon = true,
}) => {
	return (
		<div className='todo__list'>
			{all.map(item => (
				<div className='todo__list-item' key={item.id}>
					<div>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
						{!showCompleteIcon && item.completedOn && (
							<p>
								<small>Выполнена: {item.completedOn}</small>
							</p>
						)}
					</div>
					<div>
						<AiOutlineDelete
							className='icon'
							onClick={() => handleDeleteTodo(item.id)}
							title='Удалить?'
						/>
						{showCompleteIcon && (
							<BsCheckLg
								className='check__icon'
								onClick={() => handleCompleteTodo(item.id)}
								title='Завершить?'
							/>
						)}
					</div>
				</div>
			))}
		</div>
	)
}

export default memo(TodoList)

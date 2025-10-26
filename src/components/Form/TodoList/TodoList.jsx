import './TodoList.css'
import { memo } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'

const TodoList = ({
	all,
	handleDeleteTodo,
	handleCompleteTodo,
	showCompleteIcon = true,
	currentEdit,
	handleEdit,
	handleUpdateTitle,
	handleUpdateDescription,
	currentEditedItem,
	handleUpdateToDo,
	handleUpdateToDoCancel,
}) => {
	return (
		<div className='todo__list'>
			{all.map(item => {
				if (currentEdit === item.id) {
					return (
						<div className='todo__list-item' key={item.id}>
							<div className='edit__wrapper'>
								<input
									value={currentEditedItem?.title ?? ''}
									placeholder='Обновленный заголовок'
									onChange={e => handleUpdateTitle(e.target.value)}
								/>
								<textarea
									value={currentEditedItem?.description ?? ''}
									placeholder='Обновленное описание'
									rows={4}
									onChange={e => handleUpdateDescription(e.target.value)}
								/>
								<div className='edit__btns'>
									<button
										type='button'
										onClick={handleUpdateToDo}
										className='primaryBtn'
									>
										Сохранить
									</button>
									<button
										type='button'
										onClick={handleUpdateToDoCancel}
										className='primaryBtn cancel'
									>
										Отмена
									</button>
								</div>
							</div>
						</div>
					)
				}
				return (
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
								<>
									<AiOutlineEdit
										className='check__icon'
										onClick={() => handleEdit(item.id)}
										title='Редактировать?'
									/>
									<BsCheckLg
										className='check__icon'
										onClick={() => handleCompleteTodo(item.id)}
										title='Завершить?'
									/>
								</>
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default memo(TodoList)

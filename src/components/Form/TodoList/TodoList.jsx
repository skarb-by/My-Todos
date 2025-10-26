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
	const MAX_TITLE_LENGTH = 20
	const MAX_DESC_LENGTH = 50

	return (
		<div className='todo__list'>
			{all.map(item => {
				if (currentEdit === item.id) {
					const titleLength = currentEditedItem?.title?.length || 0
					const descLength = currentEditedItem?.description?.length || 0
					const isSaveDisabled =
						!currentEditedItem?.title?.trim() ||
						!currentEditedItem?.description?.trim()

					return (
						<div className='todo__list-item' key={item.id}>
							<div className='edit__wrapper'>
								<input
									value={currentEditedItem?.title ?? ''}
									placeholder='Обновленный заголовок'
									onChange={e => handleUpdateTitle(e.target.value)}
									maxLength={MAX_TITLE_LENGTH}
								/>
								<div className='char__count'>
									{titleLength}/{MAX_TITLE_LENGTH}
								</div>

								<textarea
									value={currentEditedItem?.description ?? ''}
									placeholder='Обновленное описание'
									rows={4}
									onChange={e => handleUpdateDescription(e.target.value)}
									maxLength={MAX_DESC_LENGTH}
								/>
								<div className='char__count'>
									{descLength}/{MAX_DESC_LENGTH}
								</div>

								<div className='edit__btns'>
									<button
										type='button'
										onClick={handleUpdateToDo}
										className='primaryBtn'
										disabled={isSaveDisabled}
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
							<h3 title={item.title}>{item.title}</h3>
							<p title={item.description}>{item.description}</p>
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

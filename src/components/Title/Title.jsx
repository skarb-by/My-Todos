import './Title.css'
import { memo } from 'react'

const Title = ({ text = 'Мои задачи' }) => {
	return <h1 className='title'>{text}</h1>
}

export default memo(Title)

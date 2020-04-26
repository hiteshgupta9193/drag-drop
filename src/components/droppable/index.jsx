import React from 'react'
import Draggable from 'components/draggable'
import {
  containerStyle,
  titleStyle
} from './style'

const Droppable = (props) => {
  const {
    data: { id, title } = {},
    data,
    items = [],
    onDropItem,
    style = containerStyle,
    children,
    index
  } = props

  const onDrop = (category, newIndex) => (event) => {
    event.preventDefault()
    event.stopPropagation()
    const oldCategory = event.dataTransfer.getData('category')
    const task = event.dataTransfer.getData('task')
    const oldIndex = event.dataTransfer.getData('index')
    onDropItem({ oldCategory, category, task, newIndex, oldIndex })
  }

  const onDragStart = (category, task, index) => (event) => {
    event.dataTransfer.setData('category', category)
    event.dataTransfer.setData('task', task)
    event.dataTransfer.setData('index', index)
  }

  const onDragOver = (category, index) => (event) => {
    event.preventDefault()
  }

  return (<div
    css={style}
    onDragOver={onDragOver(id, index)}
    onDrop={onDrop(id, index)}
  >
    {children && children}
    {!children && title && <div css={titleStyle}>{title}</div>}
    {items.map((d, index) => <Draggable
      key={d}
      text={d}
      onDragStart={onDragStart(id, d, index)}
      index={index}
      data={data}
      onDropItem={onDropItem}
    />)}
  </div>)
}

export default Droppable
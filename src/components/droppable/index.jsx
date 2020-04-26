import React from 'react'
import Draggable from 'components/draggable'
import {
  containerStyle,
  titleStyle
} from './style'

const Droppable = (props) => {
  const { data: { id, title } = {}, items = [], onDropItem } = props

  const onDrop = (category) => (event) => {
    console.log('onDrop', category, event)
    const oldCategory = event.dataTransfer.getData('category')
    const task = event.dataTransfer.getData('task')
    onDropItem({ oldCategory, category, task })
  }

  const onDragStart = (category, task) => (event) => {
    console.log('onDragStart', category, event)
    event.dataTransfer.setData('category', category)
    event.dataTransfer.setData('task', task)
  }

  const onDragOver = (category) => (event) => {
    console.log('onDragOver', category, event)
    event.preventDefault()
  }

  return (<div
    css={containerStyle}
    onDragOver={onDragOver(id)}
    onDrop={onDrop(id)}
  >
    {title && <div css={titleStyle}>{title}</div>}
    {items.map((d, index) => <Draggable
      key={d}
      data={d}
      onDragStart={onDragStart(id, d)}
      index={index}
      category={id}
      onDropItem={onDropItem}
    />)}
  </div>)
}

export default Droppable
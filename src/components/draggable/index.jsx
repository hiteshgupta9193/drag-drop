import React from 'react'
import { containerStyle } from './style'
import Droppable from 'components/Droppable'

const Draggable = (props) => {
  const { category, data, index, onDragStart: onDragStartAction, onDropItem } = props


  const onDragStart = (category, task, index) => (event) => {
    console.log('onDragStart', category, index, event)
    event.dataTransfer.setData('category', category)
    event.dataTransfer.setData('task', task)
    event.dataTransfer.setData('index', index)
    onDragStartAction()
  }

  const onDragOver = (category, index) => (event) => {
    console.log('onDragOver', category, index, event)
    event.preventDefault()
  }

  const onDrop = (category, newIndex) => (event) => {
    console.log('onDrop', category, index, event)
    event.preventDefault()
    event.stopPropagation()
    const oldCategory = event.dataTransfer.getData('category')
    const task = event.dataTransfer.getData('task')
    const oldIndex = event.dataTransfer.getData('index')
    onDropItem({ oldCategory, category, task, newIndex, oldIndex })
  }

  return (
    <div
      css={containerStyle}
      onDragOver={onDragOver(category, index)}
      onDrop={onDrop(category, index)}
    >
      <div
        onDragStart = {onDragStart(category, data, index)}
        draggable
      >
        {data}
      </div>
    </div>
  )
}

export default Draggable
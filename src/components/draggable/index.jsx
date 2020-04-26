import React from 'react'
import { containerStyle } from './style'
import Droppable from 'components/Droppable'

const Draggable = (props) => {
  const { text, index, onDragStart, onDropItem, data } = props

  return (
    <Droppable
      style={containerStyle}
      index={index}
      onDropItem={onDropItem}
      data={data}
    >
      <div
        onDragStart = {onDragStart}
        draggable
      >
        {text}
      </div>
    </Droppable>
  )
}

export default Draggable
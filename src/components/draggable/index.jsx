import React from 'react'
import { containerStyle, contentStyle } from 'components/Draggable/style'
import Dropable from 'components/Dropable'

const Draggable = (props) => {
  const { text, index, onDragStart, onDropItem, data } = props

  return (
    <Dropable
      style={containerStyle}
      index={index}
      onDropItem={onDropItem}
      data={data}
    >
      <div
        css={contentStyle}
        onDragStart={onDragStart}
        draggable
      >
        {text}
      </div>
    </Dropable>
  )
}

export default Draggable

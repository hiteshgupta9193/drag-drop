import React, { useCallback } from 'react'
import { containerStyle } from './style'

const Draggable = (props) => {
  const { data, onDragStart } = props
  return (<div
    css={containerStyle}
    onDragStart = {onDragStart}
    draggable
  >
    {data}
  </div>)
}

export default Draggable
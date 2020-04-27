import React, { useState, useCallback, Fragment } from 'react'
import Dropable from 'components/Dropable'
import EditBox from 'components/EditBox'
import {
  containerStyle,
  contentStyle,
  editBtnStyle
} from 'components/Draggable/style'

const Draggable = (props) => {
  const { text, index, onDragStart, onDropItem, onCardEditSave, data, data: { id: category } = {} } = props
  const [isEditing, setEditing] = useState(false)
  const onEditClick = useCallback(() => {
    setEditing(true)
  }, [setEditing])
  return (
    <Dropable
      style={containerStyle}
      index={index}
      onDropItem={onDropItem}
      data={data}
    >
      {
        isEditing
        ? <EditBox
            value={text}
            onSave={onCardEditSave(category, text)}
          />
        : <Fragment>
            <div
              css={contentStyle}
              onDragStart={onDragStart}
              draggable
            >
              {text}
            </div>
            <div css={editBtnStyle} onClick={onEditClick}>Edit</div>
          </Fragment>
      }
    </Dropable>
  )
}

export default Draggable

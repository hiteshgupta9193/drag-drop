import React, { useState, useCallback } from 'react'
import EditBox from 'components/EditBox'
import {
  plusStyle
} from 'components/AddCard/style'

const AddCard = (props) => {
  const { text, onSave, category, style } = props
  const [isEditing, setEditing] = useState(false)
  const setNewCard = useCallback(() => {
    setEditing(true)
  })
  const onSaveClick = useCallback((textVal) => {
    onSave(textVal, category)
    setEditing(false)
  }, [onSave, setEditing])
  return(
    <div css={style}>
      {isEditing
        ? <EditBox
            onSave={onSaveClick}
          />
        : <div onClick={setNewCard}>
            <span css={plusStyle}>+</span>{text}
          </div>
      }
    </div>
  )
}

export default AddCard

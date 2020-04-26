import React, { useState, useCallback } from 'react'
import {
  addCardStyle,
  plusStyle
} from './style'

const AddCard = (props) => {
  const { text, onSave, category } = props
  const [isEditing, setEditing] = useState(false)
  const [textVal, setTextVal] = useState('')
  const setNewCard = useCallback(() => {
    setEditing(true)
  })
  const onSaveClick = useCallback(() => {
    onSave(textVal, category)
    setEditing(false)
    setTextVal('')
  })
  const onTextChange = useCallback((event) => {
    setTextVal(event.target.value)
  })
  return(
    <div css={addCardStyle}>
      {isEditing
        ? <div>
            <input
              type='text'
              onChange={onTextChange}
              value={textVal}
            />
            <div onClick={onSaveClick}>Save</div>
          </div>
        : <div onClick={setNewCard}>
            <span css={plusStyle}>+</span>{text}
          </div>
      }
    </div>
  )
}

export default AddCard
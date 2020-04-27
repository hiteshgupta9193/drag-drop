import React, { useState, useCallback } from 'react'
import {
  plusStyle,
  editContainerStyle,
  inputStyle,
  saveBtnStyle
} from 'components/AddCard/style'

const AddCard = (props) => {
  const { text, onSave, category, style } = props
  const [isEditing, setEditing] = useState(false)
  const [textVal, setTextVal] = useState('')
  const setNewCard = useCallback(() => {
    setEditing(true)
  })
  const onSaveClick = useCallback(() => {
    if (!textVal) {
      return
    }
    onSave(textVal, category)
    setEditing(false)
    setTextVal('')
  })
  const onTextChange = useCallback((event) => {
    setTextVal(event.target.value)
  })
  const onKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      onSaveClick()
    }
  })
  return(
    <div css={style}>
      {isEditing
        ? <div css={editContainerStyle}>
            <input
              css={inputStyle}
              type='text'
              onChange={onTextChange}
              onKeyPress={onKeyPress}
              value={textVal}
            />
            <div css={saveBtnStyle} onClick={onSaveClick}>Save</div>
          </div>
        : <div onClick={setNewCard}>
            <span css={plusStyle}>+</span>{text}
          </div>
      }
    </div>
  )
}

export default AddCard

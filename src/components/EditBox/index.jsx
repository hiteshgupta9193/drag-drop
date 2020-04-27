import React, { useCallback, useState } from 'react'
import {
  editContainerStyle,
  inputStyle,
  saveBtnStyle
} from 'components/EditBox/style'

const EditBox = (props) => {
  const { value = '', onSave } = props
  const [textVal, setTextVal] = useState(value)
  const onSaveClick = useCallback(() => {
    if (!textVal) {
      return
    }
    onSave(textVal)
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

  return (
    <div css={editContainerStyle}>
      <input
        css={inputStyle}
        type='text'
        onChange={onTextChange}
        onKeyPress={onKeyPress}
        value={textVal}
      />
      <div css={saveBtnStyle} onClick={onSaveClick}>Save</div>
    </div>
  )
}

export default EditBox

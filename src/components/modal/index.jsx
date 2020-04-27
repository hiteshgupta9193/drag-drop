import React, { useState, Fragment, useCallback } from 'react'
import {
  containerStyle,
  modalContainerStyle,
  titleContainerStyle,
  titleStyle,
  modalBodyContainerStyle,
  actionsContainerStyle,
  saveBtnStyle,
  deleteBtnStyle,
  cancelBtnStyle,
} from 'components/Modal/style'

const Modal = (props) => {
  const {
    title = 'Modal Title',
    children
  } = props

  const [isVisible, setVisibility] = useState(true)
  const onClose = useCallback(() => {
    setVisibility(false)
  }, [])
  const onSave = useCallback(() => {
    setVisibility(false)
  }, [])
  const onDelete = useCallback(() => {
    setVisibility(false)
  }, [])
  const onCancel = useCallback(() => {
    setVisibility(false)
  }, [])
  return (
    <Fragment>
      {isVisible
        ? (<div css={containerStyle}>
          <div css={modalContainerStyle}>
            <div css={titleContainerStyle}>
              <div css={titleStyle}>{title}</div>
            </div>
            <div css={modalBodyContainerStyle}>
              {children}
            </div>
            <div css={actionsContainerStyle}>
              <div css={saveBtnStyle} onClick={onSave}>Save</div>
              <div css={deleteBtnStyle} onClick={onDelete}>Delete</div>
              <div css={cancelBtnStyle} onClick={onCancel}>Cancel</div>
            </div>
          </div>
        </div>)
        : null
      }
    </Fragment>
  )
}

export default Modal

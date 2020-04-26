import { css } from '@emotion/core'

export const containerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`

export const modalContainerStyle = css`
  z-index: 101;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 640px;
  min-height: 300px;
  background-color: #fff;
  &:focus {
    outline: 0;
  }
`

export const titleContainerStyle = css`
  box-sizing: border-box;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.9);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const titleStyle = css`
  font-size: 20px;
`

export const modalBodyContainerStyle = css`
  
`

export const actionsContainerStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  height: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.9);
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const saveBtnStyle = css`

`

export const deleteBtnStyle = css`

`

export const cancelBtnStyle = css`

`


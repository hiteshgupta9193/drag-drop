import { css } from '@emotion/core'

export const containerStyle = css`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  text-decoration: none;
  padding: 4px 8px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 8px;
  max-width: 262px;
  min-height: 30px;
  box-sizing: border-box;
  align-items: center;
  &:hover {
    background-color: #f4f5f7;
  }
`

export const contentStyle = css`
  width: 205px;
  text-decoration: none;
  word-wrap: break-word;
  white-space: normal;
`

export const editBtnStyle = css`
  width: 35px;
  height: 24px;
  box-sizing: border-box;
  padding: 3px 4px;
  border-radius: 3px;
  color: white;
  background-color: gray;
`

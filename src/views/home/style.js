import { css } from '@emotion/core'

export const containerStyle = css`
  user-select: none;
  white-space: nowrap;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
`

export const addCategoryStyle = css`
  width: 225px;
  margin: 0 4px;
  display: inline-block;
  vertical-align: top;
  background-color: #ebecf0;
  border-radius: 3px;
  padding: 6px 8px 2px;
  border-radius: 3px;
  cursor: pointer;
  min-height: 30px;
  box-sizing: border-box;
  &:hover {
    background-color: #f4f5f7;
  }
`
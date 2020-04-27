import { css } from '@emotion/core'

export const containerStyle = css`
  width: 275px;
  margin: 0 4px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  background-color: #ebecf0;
  border-radius: 3px;
  max-height: 100%;
  overflow-y: auto;
`

export const titleStyle = css`
  font-size: 15px;
  font-weight: 600;
  padding: 10px 8px;
  position: relative;
`

export const addCardStyle = css`
  padding: 6px 8px 2px;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 8px;
  width: 262px;
  min-height: 30px;
  box-sizing: border-box;
  &:hover {
    background-color: #f4f5f7;
  }
`

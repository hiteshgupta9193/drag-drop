import { css } from '@emotion/core'

export const containerStyle = css`
  overflow: hidden;
  text-decoration: none;
  padding: 6px 8px 2px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 8px;
  max-width: 210px;
  min-height: 30px;
  box-sizing: border-box;
  &:hover {
    background-color: #f4f5f7;
  }
`

export const contentStyle = css`
  max-width: 194px;
  text-decoration: none;
  word-wrap: break-word;
`

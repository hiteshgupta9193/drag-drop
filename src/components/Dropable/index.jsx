import React, { Fragment, useCallback } from 'react'
import Draggable from 'components/Draggable'
import AddCard from 'components/AddCard'
import {
  containerStyle,
  titleStyle,
  addCardStyle
} from 'components/Dropable/style'

const Dropable = (props) => {
  const {
    data: { id, title } = {},
    data,
    items = [],
    onDropItem,
    onAddAnotherCard,
    style = containerStyle,
    children,
    index
  } = props

  const onDrop = useCallback((category, newIndex) => (event) => {
    event.preventDefault()
    event.stopPropagation()
    const oldCategory = event.dataTransfer.getData('category')
    const task = event.dataTransfer.getData('task')
    const oldIndex = event.dataTransfer.getData('index')
    onDropItem({ oldCategory, category, task, newIndex, oldIndex })
  }, [])

  const onDragStart = useCallback((category, task, index) => (event) => {
    event.dataTransfer.setData('category', category)
    event.dataTransfer.setData('task', task)
    event.dataTransfer.setData('index', index)
  }, [])

  const onDragOver = useCallback((category, index) => (event) => {
    event.preventDefault()
  }, [])

  const getContent = () => {
    if (children) {
      return children
    }
    return (
      <Fragment>
        {title && <div css={titleStyle}>{title}</div>}
        {items.map((d, index) => <Draggable
          key={d}
          text={d}
          onDragStart={onDragStart(id, d, index)}
          index={index}
          data={data}
          onDropItem={onDropItem}
        />)}
        <AddCard
          style={addCardStyle}
          onSave={onAddAnotherCard}
          category={id}
          text='Add another card'
        />
      </Fragment>
    )
  }

  return (<div
    css={style}
    onDragOver={onDragOver(id, index)}
    onDrop={onDrop(id, index)}
  >
    {getContent()}
  </div>)
}

export default Dropable
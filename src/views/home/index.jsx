import React, { useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Dropable from 'components/Dropable'
import AddCard from 'components/AddCard'
import { containerStyle, addCategoryStyle } from 'views/Home/style'
import { onAddAnotherCategory, onDropItem, onAddAnotherCard, onCardEditSave } from './actions'

export default function Home() {
  const { categories, list } = useSelector(({ tasks: { categories, list } = {} }) => ({ categories, list }))
  const dispatch = useDispatch()

  const handleOnDropItem = useCallback((param) => {
    dispatch(onDropItem(param))
  }, [onDropItem])

  const handleOnAddAnotherCard = useCallback((task, category) => {
    dispatch(onAddAnotherCard(task, category))
  }, [onAddAnotherCard])

  const handleOnAddAnotherCategory = useCallback((category) => {
    dispatch(onAddAnotherCategory(category))
  }, [onAddAnotherCategory])

  const handleOnCardEditSave = useCallback((category, oldValue) => (newValue) => {
    dispatch(onCardEditSave(category, oldValue, newValue))
  })

  return (
    <div css={containerStyle}>
      {categories.map(cat => (
        <Dropable
          key={cat.id}
          data={cat}
          items={list[cat.id]}
          onDropItem={handleOnDropItem}
          onAddAnotherCard={handleOnAddAnotherCard}
          onCardEditSave={handleOnCardEditSave}
        />
      ))}
      <AddCard
        style={addCategoryStyle}
        onSave={handleOnAddAnotherCategory}
        text='Add another list'
      />
    </div>
  )
}

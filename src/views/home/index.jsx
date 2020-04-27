import React, { useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Dropable from 'components/Dropable'
import AddCard from 'components/AddCard'
import { containerStyle } from 'views/Home/style'
import { onAddAnotherCategory, onDropItem, onAddAnotherCard } from './actions'

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

  return (
    <div css={containerStyle}>
      {categories.map(cat => (
        <Dropable
          key={cat.id}
          data={cat}
          items={list[cat.id]}
          onDropItem={handleOnDropItem}
          onAddAnotherCard={handleOnAddAnotherCard}
        />
      ))}
      <AddCard
        onSave={handleOnAddAnotherCategory}
        text='Add another list'
      />
    </div>
  )
}

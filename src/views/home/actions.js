export const onDropItem = ({ oldCategory, category: newCategory, task, newIndex, oldIndex }) => {
  return ({
    type: 'ITEM_DROPPED',
    payload: { oldCategory, newCategory, task, newIndex, oldIndex }
  })
}

export const onAddAnotherCard = (task, category) => {
  return ({
    type: 'ADD_ANOTHER_CARD',
    payload: { category, task }
  })
}

export const onAddAnotherCategory = (category) => {
  return ({
    type: 'ADD_ANOTHER_CATEGORY',
    payload: { category }
  })
}

export const onCardEditSave = (category, oldValue, newValue) => {
  return ({
    type: 'CARD_EDITTED',
    payload: { category, oldValue, newValue }
  })
}
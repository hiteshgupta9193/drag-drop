export const onDropItem = ({ oldCategory, category: newCategory, task, newIndex, oldIndex }) => {
  return ({
    type: 'ITEM_DROPPED',
    payload: { oldCategory, newCategory, task, newIndex, oldIndex }
  })
}
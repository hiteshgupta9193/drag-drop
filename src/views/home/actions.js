export const onDropItem = (oldCategory, newCategory, task) => {
  return ({
    type: 'ITEM_DROPPED',
    payload: {oldCategory, newCategory, task}
  })
}
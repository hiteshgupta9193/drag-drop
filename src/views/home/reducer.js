const initialState = {
  categories: [{
    id: 'design',
    title: 'Design'
  }, {
    id: 'todo',
    title: 'TODO'
  }, {
    id: 'development',
    title: 'Development'
  }, {
    id: 'qa',
    title: 'QA'
  }, {
    id: 'readyForRelease',
    title: 'Ready For Release'
  }, {
    id: 'done',
    title: 'Done'
  }],
  list: {
    design: ['Task1', 'Task2'],
    todo: ['Task3', 'Task4', 'Task5'],
    development: ['Task6', 'Task7'],
    qa: ['Task8', 'Task9', 'Task10'],
    readyForRelease: ['Task11'],
    done: []
  }
}

export default function tasksReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'ITEM_DROPPED': {
      const { oldCategory, newCategory, task, newIndex, oldIndex } = payload
      if (oldCategory !== newCategory) {
        return ({
          ...state,
          list: {
            ...state.list,
            [oldCategory]: state.list[oldCategory].filter(t => t !== task),
            [newCategory]: [...state.list[newCategory], task]
          }
        })
      } else if (oldIndex !== undefined && newIndex !== undefined) {
        let { list: { [newCategory]: categoryList } } = state
        const temp = categoryList[oldIndex]
        categoryList[oldIndex] = categoryList[newIndex]
        categoryList[newIndex] = temp
        return ({
          ...state,
          list: {
            ...state.list,
            [newCategory]: categoryList
          }
        })
      }
    }
    case 'ADD_ANOTHER_CARD': {
      const { category, task } = payload
      return ({
        ...state,
        list: {
          ...state.list,
          [category]: [...state.list[category], task]
        }
      })
    }
    case 'ADD_ANOTHER_CATEGORY': {
      const { category } = payload
      return ({
        ...state,
        list: {
          ...state.list,
          [category]: []
        },
        categories: [
          ...state.categories,
          {
            id: category.split(' ').join('-'),
            title: category
          }
        ]
      })
    }
    default:
      return state
  }
}
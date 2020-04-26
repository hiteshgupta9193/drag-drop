import  React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { containerStyle } from './style'
import Droppable from 'components/droppable'
import * as actions from './actions'

const Home = (props) => {
  const { tasks: { categories, list } = {}, actions: { onDropItem } = {} } = props
  return (<div css={containerStyle}>
    {categories.map(cat => <Droppable
    key={cat.id}
    data={cat}
    items={list[cat.id]}
    onDropItem={onDropItem}
  />)}
  </div>)
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
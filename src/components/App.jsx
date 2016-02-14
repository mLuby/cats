import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Cat from './cat'

function renderCat (cat) {
  return <Cat {...cat} key={cat.id}/>
}

const App = ({cats}) => {
  console.log('rendering app')
  return (<div>
    {cats.map(renderCat)}
  </div>)
}

App.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    fact: PropTypes.string.isRequired
  }).isRequired).isRequired
}

function mapStateToProps(state) {
  return {
    cats: state.cats,
  };
}

export default connect(mapStateToProps)(App);

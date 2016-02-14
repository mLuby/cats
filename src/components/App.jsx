import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchCatsRequest } from './../action_creators'
import Cat from './cat'

class App extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchCatsRequest())
  }
  render() {
    return (<div>
      {this.props.cats.map((cat, index) => <Cat {...cat} key={index}/>)}
    </div>)
  }
}

App.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    fact: PropTypes.string.isRequired
  }).isRequired).isRequired
}

function mapStateToProps(state) { return { cats: state.cats } }

export default connect(mapStateToProps)(App);

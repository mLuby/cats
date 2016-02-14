import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCatsStart } from './../action_creators'
import Cat from './cat'

class App extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props
    console.log('App will mount')
    dispatch(getCatsStart())
  }
  render() {
    // const { cats } = this.props
    console.log('rendering app')
    return (<div>
      {this.props.cats.map(cat => <Cat {...cat} key={cat.id}/>)}
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

function mapStateToProps(state) {
  return {
    cats: state.cats,
  };
}

export default connect(mapStateToProps)(App);

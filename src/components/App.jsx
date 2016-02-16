import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {fetchCatsRequest} from "./../actionCreators"
import Cat from "./cat"

class App extends Component {
  componentWillMount () {
    const {dispatch} = this.props
    dispatch(fetchCatsRequest())
  }
  render () {
    return (
      <div className="container">
        {this.props.cats.map((cat, index) => <Cat {...cat} key={index}/>)}
      </div>
    )
  }
}
App.displayName = "App"
App.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    fact: PropTypes.string.isRequired
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) { return {cats: state.cats} }

export default connect(mapStateToProps)(App)

import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {removeCat} from "./../actionCreators"

function Cat ({src, fact, id, dispatch}) { // todo fix lint: react/jsx-no-bind
  return (<div className="cat" onClick={() => dispatch(removeCat(id))}>
    <img className="image" src={src} />
    <p className="fact">{fact}</p>
  </div>)
}

Cat.propTypes = {
  fact: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
}

export default connect()(Cat)

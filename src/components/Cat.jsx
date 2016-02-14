import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { removeCat } from './../action_creators'

const Cat = ({src, fact, id, dispatch}) => {
  return (<div className='cat' onClick={() => dispatch(removeCat(id))}>
    <img src={src} className='image' />
    <p className='fact'>{fact}</p>
  </div>)
}

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  fact: PropTypes.string.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id,
    src: ownProps.src,
    fact: ownProps.fact
  };
}

export default connect(mapStateToProps)(Cat);

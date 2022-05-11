import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    return(
      <>
        <h2>Cat Index</h2>
        {this.props.cats && this.props.cats.map(cat => {
          return <NavLink to={`/catshow/${cat.id}`} key={cat.id}>{cat.name}</NavLink>
        })}
      </>
    )
  }
}
export default CatIndex

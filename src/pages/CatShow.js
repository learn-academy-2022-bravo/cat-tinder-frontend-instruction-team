import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatShow extends Component {
 render() {
   let { cat } = this.props
   return(
     <div className="page-body">
       {cat &&
        <Card body className="card-show">
          <CardTitle tag="h5">Hi! My name is {cat.name}</CardTitle>
          <h2>🐈‍⬛</h2>
          <CardText>I am {cat.age} years old</CardText>
          <CardText>I enjoy {cat.enjoys}</CardText>
          <img src={cat.image} alt="cat profile"/>
        </Card>
       }
     </div>
   )
 }
}
export default CatShow

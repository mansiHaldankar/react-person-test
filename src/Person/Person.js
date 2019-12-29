import React, { Component } from 'react';
import './Person.css'

const Person = (props) => {
return(
    <div className="Person">
        <h2>Person Details</h2>
        <span onClick={props.click}>Name : {props.name}  </span>
        {/* <span> Age : {Math.floor(Math.random() * 30)} years </span> */}
        <span>  Age : { props.age } </span>
        <p> { props.children }</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>
    );
}


/*class Person extends Component{
    render(){
        return(
            <div>
            <h2>Person Details</h2>
            <span>Name :  {this.props.name} </span>
            <span> Age : {Math.floor(Math.random() * 30)} years </span>
        </div>       
        );
    }
}*/

export default Person;
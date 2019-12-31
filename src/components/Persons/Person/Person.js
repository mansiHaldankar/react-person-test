import React, { Component } from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    const personStyle = {
        '@media (max-width : 450px)' : {
                width: '90%'
            }
    }
return(
    <div className="Person" style={personStyle}>
        <h2>Person Details</h2>
        <span onClick={props.click}>Name : {props.name}  </span>
        {/* <span> Age : {Math.floor(Math.random() * 30)} years </span> */}
        <span>  Age : { props.age } </span>
        <p> { props.children }</p>
        <input type="text" onChange={props.changed} value={props.name}/>
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

export default Radium(Person);
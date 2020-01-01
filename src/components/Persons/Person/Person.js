import React, { Component } from 'react';
import Auxilliary from '../../../hoc/Auxilliary'
import './Person.css';

class Person extends Component{
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps State", state);
        console.log("getDerivedStateFromProps Props", props);
        return null;
    }
    render(){
        return(
            <Auxilliary>
                <h2>Person Details</h2>
                <span onClick={this.props.click}>Name : {this.props.name}  </span>
                <span>  Age : { this.props.age } </span>
                <p> { this.props.children }</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxilliary>
    
        );
    }
}

/*const Person = (props) => {

return(
        <div className="Person">
            <h2>Person Details</h2>
            <span onClick={props.click}>Name : {props.name}  </span>
            { <span> Age : {Math.floor(Math.random() * 30)} years </span>}
            <span>  Age : { props.age } </span>
            <p> { props.children }</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    );
}*/



export default (Person);
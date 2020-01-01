import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{
    // static getDerivedStateFromProps(props, state){
    //     console.log("getDerivedStateFroProps State", state);
    //     console.log("getDerivedStateFroProps Props", props);
    //     return state;
    // }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponenUpdate nextProps", nextProps);
        console.log("shouldComponenUpdate nextState", nextState);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate prevProps", prevProps);
        console.log("getSnapshotBeforeUpdate prevState", prevState);
        return{message : "snapshot..!!"}
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate");
        console.log(snapshot)
    }
    render(){
        console.log("update render")
        return this.props.Persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
            });
        }  
    }

  export default Persons;
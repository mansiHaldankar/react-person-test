import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons : [
      { id : "person1", name : "Mansi", age : "26" },
      { id : "person2", name : "Prathamesh", age : "32" },
      { id : "person3", name : "ManPrat", age : "5" },
    ],
    showPerson : false
  }
  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // Change persons data use setState
    this.setState({
      persons : [
        { name : newName, age : "26" },
        { name : "Prathamesh", age : "32" },
        { name : "ManPrat", age : "7" },
      ]
    });
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((pData) => {
      return pData.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const personsArray = [...this.state.persons];
    personsArray[personIndex] = person;
    this.setState({
      persons : personsArray
    });
  }

  togglePersonHandler = () => {
      var displayPerson = this.state.showPerson;
      this.setState({showPerson : !displayPerson});
  }

  deletePersonHandler = (personIndex) => {
    const personsArray = [...this.state.persons];
    personsArray.splice(personIndex, 1);
    this.setState({persons : personsArray})
  }

  render(){
    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid #000',
      padding : '8px',
      cursor : 'pointer',
      margin : '10px',
      ':hover' : {
        backgroundColor : 'blue',
        color : 'red'
      } 
    };
    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
          <Persons
            Persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.changeNameHandler}
          />
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : 'pink',
        color : 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return(
      <StyleRoot>
        <div className = "App">
          <h1>Hello, React App</h1>
          <div className = {classes.join(' ')}>Working...!!!!</div>
          <button 
          onClick = {() => this.switchNameHandler("Mansi Haldankar") }
          > 
          Switch Name</button>
          <button 
          onClick = {this.togglePersonHandler}
          style={style}> 
          Toggle Person</button>
          {/* {
            this.state.showPerson === true ?
            <div>
              <Person 
                name = {this.state.Person[0].name} 
                age = {this.state.Person[0].age}/>
              <Person 
                name = {this.state.Person[1].name} 
                age = {this.state.Person[1].age} 
                click = { this.switchNameHandler.bind(this, "Mansi Nimbkar")}
                change={this.changeNameHandler}> Hobbies : Reading</Person> 
              <Person 
                name = {this.state.Person[2].name} 
                age = {this.state.Person[2].age}/> 
            </div>: null
          } */}
            {person}
        </div>
      </StyleRoot>
    );

    // return React.createElement('div',{ className : 'App'}, React.createElement('h1',null, "My App"));

  }
}

/*function App() {
  return (
    <div className="App">
      <div>React App</div>
    </div>
  );
}*/

export default Radium(App);

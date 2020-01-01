import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log("inside constructor" + props)
  }
  state = {
    persons : [
      { id : "person1", name : "Mansi", age : "26" },
      { id : "person2", name : "Prathamesh", age : "32" },
      { id : "person3", name : "ManPrat", age : "5" },
    ],
    showPerson : false
  }

  static getDerivedStateFromProps(state,props){
    console.log("Props" , props);
    return state;
  }

  // componentWillMount(){
  //   console.log("componentWillMount")
  // }

  componentDidMount(){
    console.log("componentDidMount");
  }
  shouldComponentUpdate(prevProps, prevState){
    console.log("shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
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
    console.log("redering app.js")
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
      
    }

    
    return(
        <div className = "App">
          <h1>Hello, React App</h1>
          
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
            <Cockpit 
              showPersons={this.state.showPerson}
              persons={this.state.persons}
              clicked={this.togglePersonHandler}
            />
            {person}

        </div>
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

export default App;

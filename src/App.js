import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    Person : [
      { name : "Mansi", age : "26" },
      { name : "Prathamesh", age : "32" },
      { name : "ManPrat", age : "5" },
    ],
    showPerson : false
  }
  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // Change person data use setState
    this.setState({
      Person : [
        { name : newName, age : "26" },
        { name : "Prathamesh", age : "32" },
        { name : "ManPrat", age : "7" },
      ]
    });
  }
  changeNameHandler = (event) => {
    this.setState({
      Person : [
        { name : "Mansi", age : "26" },
        { name : event.target.value , age : "32" },
        { name : "ManPrat", age : "5" },
      ]
    });
  }
  togglePersonHandler = () => {
      var displayPerson = this.state.showPerson;
      this.setState({showPerson : !displayPerson});
  }
  render(){
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid #000',
      padding : '8px',
      cursor : 'pointer',
      margin : '10px'
    };
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {
            this.state.Person.map(person => {
              return (
                <Person name={person.name} age={person.age}/>
              )
            })
          }
        </div>
      );
    }
    return(
      <div className = "App">
        <h1>Hello, React App</h1>
        <button 
        onClick = {() => this.switchNameHandler("Mansi Haldankar") }
        style={style}> 
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
          {persons}
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

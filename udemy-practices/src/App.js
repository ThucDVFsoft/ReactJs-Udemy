import React, {Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age:28},
      {id: '2',name: 'Manu', age:29},
      {id: '3',name: 'Thuc', age:30}
    ],
    otherState: 'Some other value',
    showPersons: true,
  };

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = this.state.persons[personIndex];
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons});
  }

  toggerPersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    console.log("index =" + index);
    this.setState({
      persons: persons
    });
  }

  render (){
    let persons = null;

    let btnClass ='';

    if(this.state.showPersons){
      persons = (
        <div> 
          {this.state.persons.map((person, index) => {
            return <Person name={person.name}
                           age = {person.age}
                           click={() => this.deletePersonHandler(index)}
                           changed={(event) => this.nameChangedHandler(event, person.id)}
                           key={index}
                           />
          })}
        </div>);
        btnClass = classes.Red
    }

    let assignedClasses = [];

    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }
    

    return(
        <div className={classes.App}> 
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button   className={btnClass}
                  onClick={this.toggerPersonHandler }>Switch Name</button>
      
          {persons}
          
        </div>)};
  

// const App = props => {
//     const [personsState, setPersonsState1] = useState({
//         persons: [
//           {name: 'Max', age:28},
//           {name: 'Manu', age:29},
//           {name: 'Thuc', age:30}
//         ],
//         otherState: 'Some other value',
//         otherState1: 'Some other value',
//     });

//     const switchNameHandler = () =>{
//       setPersonsState1({
//         persons: [
//           {name: 'Maximum', age:29},
//           {name: 'Manu', age:29},
//           {name: 'Thuc', age:1}
//         ],
//       });
//       console.log(setPersonsState1);
//       console.log(personsState);
//     }
}

export default App;
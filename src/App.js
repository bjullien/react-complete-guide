import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'; 
       // Person with Capital P as minor first letters are reserved for HTML elements

/**
 * In a functional component, there is no "this" to access properties or functions
 * 
 * @param {*} props 
 * @returns 
 */
const app = props => {

  /**
   * Set the initial state using hook: useState()
   * [ personsState, setPersonsState ] = is using ES6 destructuring feature
   * [ a, b ] = function returning an array;
   *  a and b will be assigned automatically
   */
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Bruno', age: 56 },
      { name: 'Max', age: 50 },
      { name: 'Kabkeo', age: 56 },
    ]
  });

  /**
   * As with useState hook, there is no merge, we have to create another
   * state property; then when calling setPersonsState, this one is not 
   * touched
   */
  const [ otherState, setOtherState ] = useState({
    otherState: 'some other value'
  });

  const switchNamesHandler = () => {
    // Warning: setPersonsState does not merger like with class component this.setState() 
    //          here, we will loose Max and otherState
    // Solution: call useState() several times
    setPersonsState({
      persons: [
        { name: 'Bernard', age: 56 },
        { name: 'Max', age: 50 },
        { name: 'Kabkeo', age: 57 },
      ]
    });
  }

  /**
   * class comp: onClick={this.switchNamesHandler}
   * function comp: onClick={switchNamesHandler} as "this" only in a class 
   */
  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <button onClick={switchNamesHandler}>Switch Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>I come from France</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
    </div>
  );
}
export default app;

/**
 * A React component: 
 *        class App extends Component { render() { return (<div> ... </div>); } }
 * 
 * export default App;
 *        - default export of this file (ES6): if you import this all file, you simply import the App class
 *        - used in index.js, when 
 *                    import App from './App';
 * 
 * App.js: 
 *        - could be named App.jsx
 * 
 * render without JSX:
 *        Here is the equivalent using React API, which is what is generated by compiler:
 *            return React.createElement(
 *                "div", 
 *                {className: 'App'},
 *                React.createElement("h1", null, "Hi from React.CreateElement()"));
 * 
 * {props.children}
 *      to access stuff between <Person> and </Person>: "I come from France"
 *      could also be some HTML elements <div>.....</div> or others
 * 
 * onClick
 *      Warning: DOM event is "onclick" but React is onClick with capital C
 */
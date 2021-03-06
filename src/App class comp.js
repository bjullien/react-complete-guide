import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 
       // Person with Capital P as minor first letters are reserved for HTML elements

class App extends Component {
  // state is a reserved word, when changed => React re-render!
  state = {
    persons: [
      { name: 'Bruno', age: 56 },
      { name: 'Max', age: 50 },
      { name: 'Kabkeo', age: 56 },
    ],
    otherState: 'some other value'
  }

  /**
   * someThingHandler: 
   *        convention to end with "Handler" when React event is calling it
   *        "Hollywood principle: do not call us, we will call you"
   * <button onClick={this.switchNamesHandler}>Switch Names</button>
   *        do not add(), it would call the function when html is rendered!
   * this:
   *        works and represent a App class instance because we use arrow function ()=>{}
   * 
   */
  switchNamesHandler = () => {
    //console.log("was clicked!");
    
    //DON'T DO THIS: this.state.persons[0].name = "Bernard"; 
    //=> ERROR: ./src/App.js
    //          Line 27:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state

    /**
     * when calling setState(), React updates the DOM
     * here our changes are merged with existing state (kabkeo and otherState are kept)
     */
    this.setState({
      persons: [
        { name: 'Bernard', age: 56 },
        { name: 'Kabkeo', age: 57 },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNamesHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I come from France</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}
export default App;

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
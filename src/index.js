import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/* 
    NOTES:
        - can even render a non-react: ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
        - generally there is only 1 root app element
*/

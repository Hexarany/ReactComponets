import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// const text = 'Hello This World!!';

// const elem = (
//   <div>
//     <h1>Текст: {text}</h1>
//     <input type="text" />
//     <button>Click</button>
//   </div>
// );

// const elem = React.createElement('h1', {className: 'Greetings'}, 'Hello World!!!!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);



import React from 'react';
import './App.css';

const Header = () =>{
  return <h2> Hello This World</h2>
}

// const Field = () =>{
//   const holder = 'Enter here'
//   const styleField ={
//       width: '300px',
//       height: '15px'
//   };
//   return <input 
//   placeholder= {holder} 
//   type='text' 
//   style = {styleField}/>
// }

class Field extends React.Component {
  render () {
    const holder = 'Enter here'
  const styleField ={
      width: '300px',
      height: '15px'
  };

  return <input 
          placeholder= {holder} 
          type='text' 
          style = {styleField}/>
  }
}

function Btn() {
  const text = 'Log In'
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <React.StrictMode>
          <Header />
      </React.StrictMode>
     <Field/>
     <Btn/>
     <logged/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Component } from 'react';
const Header = () =>{
  return <h2> Hello This World</h2>
}
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

class WhoAmi extends Component {
  constructor(props) {
      super(props);
      this.state = {
        years: 27,
        text: 'Увеличить Возраст',
        position: ''
      }
  }
  nextYear = () =>{
    console.log('***');
    this.setState(state => ({
        years: state.years + 0.5
      }))
  }


  commitInputChanges = (e, color) => {
    this.setState({
      position: e.target.value
    })
  }

  render () {
    const {name, surname, link} = this.props;
    const {position, years} = this.state
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, 
            age - {years},
            position - {position}</h1>
        <a href={link}>My Profile</a>
        <form>
          <span>Введите должность</span>
          <input type='text' onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </div>
    )
  }
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
     <WhoAmi name='Denis' surname='Matievici' link='facebook.com'/>
     <WhoAmi name='Ivan' surname='Ivanov' link='facebook.com'/>
    </div>
  );
}

export default App;

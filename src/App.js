import React,{Component} from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation'
import Char from './CharComponent/Char'

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHanlder = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.userInput.split('');
    text.splice(index,1)
    const updatedText = text.join('')
    this.setState({userInput: updatedText})
  }

  render(){
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} 
      clicked={()=> this.deleteCharHandler(index)}/>
    });

  return (
    <div className="App">
     <h1>Hello World</h1>
    <hr />
    <input 
      type="text" 
      onChange={this.inputChangeHanlder} 
      value={this.state.userInput}/>
    <p> {this.state.userInput}</p>    
      <Validation inputLength={this.state.userInput.length}/>
      {charList}
    </div>
  );
  }
}

export default App;

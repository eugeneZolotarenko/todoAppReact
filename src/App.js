 import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import MainPart from './components/MainPart';
import Footer from './components/Footer';
// import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  constructor () {
    super()
    this.state = {
      todosData: []
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todosData: res.data }))
  }

  // Delate Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todosData: [...this.state.todosData.filter(todo => todo.id !== id)]}));
    
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
    })
    .then(res => this.setState({ todosData: [...this.state.todosData, res.data]}));
    
  }

  render() {
    return (
      <div className="App">
      <Header />
      <MainPart todosData={this.state.todosData} delTodo={this.delTodo} addTodo={this.addTodo}/>
      <Footer />
      </div>
    );
  }
}

export default App;

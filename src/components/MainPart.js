import React, { Component } from 'react'

export class MainPage extends Component {
  constructor () {
    super()
    this.state = {
      name: "Haha",
      title: ""
    }
    this.pickTodo = this.pickTodo.bind(this)
  }

  pickTodo () {
    return this.props.todosData.map((todo) => {
      return(
      <li key={todo.id}>

        <span>{todo.title}</span>

        <button onClick={this.props.delTodo.bind(this, todo.id)}>X</button>

      </li>
      )
    });
  }

  typeTodo = (e) => this.setState({ [e.target.name]: e.target.value });

  onPushTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
  }

  render() {
    return <div>
      <form onSubmit={this.onPushTodo}>
        <input 
        name="title"
        type="text"
        placeholder="Push your todo!"
        value={this.state.title}
        onChange={this.typeTodo}
        className="add-text-todo"
        />
        <input 
        type="submit"
        className="btn-todo"
        value="Push"
        />
      </form>
      <div className="todos-container">
        <ul>
          {this.pickTodo()}
        </ul>
      </div>
    </div>
  }
}

export default MainPage
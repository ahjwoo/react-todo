var React = require('react');
var TodoList = require('TodoList');
var AddtoDo = require('AddtoDo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          comleted: false
        }, {
          id: uuid(),
          text: 'Workout',
          completed: true
        }, {
          id: uuid(), 
          text: 'Clean room',
          completed: true
        }, {
          id: uuid(),
          text: 'Plan out vlogs', 
          completed: false
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
      // spread operator
      ...this.state.todos, 
      {
        id: uuid(),
        text: text,
        completed: false
      }
      ]
    })
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    })
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddtoDo onTextEnter={this.handleAddTodo}/>
      </div>
    )
  }
});


module.exports = TodoApp;
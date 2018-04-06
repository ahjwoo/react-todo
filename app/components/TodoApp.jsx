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
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Workout'
        }, {
          id: uuid(), 
          text: 'Clean room'
        }, {
          id: uuid(),
          text: 'Plan out vlogs'
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
        text: text
      }
      ]
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
        <TodoList todos={todos}/>
        <AddtoDo onTextEnter={this.handleAddTodo}/>
      </div>
    )
  }
});


module.exports = TodoApp;
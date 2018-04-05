var React = require('react');
var TodoList = require('TodoList');
var AddtoDo = require('AddtoDo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Workout'
        }, {
          id: 3, 
          text: 'Clean room'
        }, {
          id: 4,
          text: 'Plan out vlogs'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
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
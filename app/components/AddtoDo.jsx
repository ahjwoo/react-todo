var React = require('react');

var AddtoDo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var text = this.refs.todo.value;
    if (text.length > 0) {
      this.refs.todo.value = '';
      this.props.onTextEnter(text);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todo" placeholder="Enter a to-do item"/>
            <button className="button expanded">Enter</button>
        </form>
      </div>
    )
  }
});

module.exports = AddtoDo;
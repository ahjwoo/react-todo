var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var AddtoDo = require('AddtoDo');

describe('AddtoDo', ()=> {
  it('should exist', () => {
    expect(AddtoDo).toExist();
  });

  it('should call onTextEnter if valid text entered', () => {
    var spy = expect.createSpy();
    var addtoDo = TestUtils.renderIntoDocument(<AddtoDo onTextEnter={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addtoDo));

    addtoDo.refs.todo.value = 'Eat 1600 Calories';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Eat 1600 Calories');
  });

  it('should not call onTextEnter if nothing is entered', () => {
    var spy = expect.createSpy();
    var addtoDo = TestUtils.renderIntoDocument(<AddtoDo onTextEnter={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addtoDo));

    addtoDo.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
})
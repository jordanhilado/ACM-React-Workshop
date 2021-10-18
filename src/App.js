import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    // semicolons not required in javascript, but it is good practice as it makes code more readable
    super(props);

    this.state={
      newItem:"",
      list:[]
    };
  }

  updateInput(key, value){
    // update react state
    this.setState({
      [key]: value
    });
  }
  // create addItem function
  addItem(){
    // first create a new item with a unique id
    // const: cannot be redeclared, reassigned, and are only within its block's scope
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    // copy of current list items
    const list = [...this.state.list];

    // add new item into list
    list.push(newItem);

    // udpate state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    // copy current list of items
    const list = [...this.state.list];

    // filter out item being deleted
    // call filter, which will take in an item and return item.id, if it's not equal to the current id
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }
  render(){
    return (
      <div className="App">
        {/* create a div, which is basically a container */}
        <div>
          To-Do List
          {/* line break element */}
          <br/>
          {/* input form for adding items */}
          <input
            type="text"
            placeholder="Type item here..."
            // value will equal the new item that gets typed into input
            value = {this.state.newItem}
            /* event that will call our function updateInput,
            which will be a funciton that will have a new item and an event,
            which will be called everytime onChange is ran */
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            // button will run function addItem every time it is clicked
            onClick={() => this.addItem()}
          >
            Add
          </button>
          <br/>
          <ul>
          {this.state.list.map(item => {
            return(
              <li key={item.id}>
                {item.value}
                <button
                  // function which will delete the item
                  onClick={() => this.deleteItem(item.id)}
                >X</button>
              </li>
            )
          })}
          </ul>
        </div>
    </div>
    )
  }
}

export default App;
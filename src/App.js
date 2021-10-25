import React, { Component } from "react";
import "./App.css";

// Change to class component
// Class needs to extend the component class from the React Library
export default class App extends Component {
  // Constructor:
  // It used for initializing the local state of the component by assigning an object to this.state
  // It used for binding event handler methods that occur in your component
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }
  // Function that udpates the React state:
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  // AddItem function for adding new items to the list:
  addItem() {
    // First create a new item with a unique ID
    // Const: cannot be redeclared, reassigned, and are only within its block's scope
    const newItem = {
      id: 1 + Math.random(),
      // Clone this array
      value: this.state.newItem.slice(),
    };
    // Copy of the current list items
    const list = [...this.state.list];
    // Add new item into list
    list.push(newItem);
    // Udpate the state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
    });
  }
  // Function for deleting items in the list given the ID
  deleteItem(id) {
    // Copy current list of items
    const list = [...this.state.list];
    // Filter out the item being deleted
    // Call filter, which will take in an item and return item.id
    // If it's not equal to the current id
    const updatedList = list.filter((item) => item.id !== id);
    // Set the state to the updated list
    this.setState({ list: updatedList });
  }
  // Render function that returns JSX
  render() {
    return (
      <div className="App">
        {/* Create a div element, which is basically a container */}
        <div className="List">
          <h1>To-Do List</h1>
          {/* Line break element, to create space */}
          {/* <br /> */}
          {/* Input form, so we can type in new items to add to our to-do list */}
          <input
            type="text"
            placeholder="Type item here..."
            // Value will equal the new item that gets typed into input form
            value={this.state.newItem}
            /* Event that will call our function updateInput,
            which will be a funciton that will have a new item and an event,
            which will be called everytime onChange is ran */
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="btn1"
            // Button will run function addItem every time it is clicked
            onClick={() => this.addItem()}
          >
            Add
          </button>
          <br />
          {/* Create an unordered list that will display each item in our array as a list */}
          <ul>
            {this.state.list.map((item) => {
              return (
                // List each item in our array as a single item in a list
                <li key={item.id}>
                  {item.value}
                  <button
                    className="btn2"
                    // onClick event which will call the deleteItem function
                    onClick={() => this.deleteItem(item.id)}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

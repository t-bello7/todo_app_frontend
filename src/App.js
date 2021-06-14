import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todos: [],
      modal: false,
      activeItem: {
        title: "",
        description: "",
        completed: false,
      },
    };
  }

 

  componentDidMount(){
    this.getTodos();
  }


  getTodos(){
    axios
    .get("https://todo-app-api-tomi.herokuapp.com/api/")
    .then(res => {
      this.setState({todos:res.data});
    })
    .catch(err => {
      console.log(err);
    });
  }



  render(){
    return (
      <div>
        {this.state.todos.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <p>Hello</p>
        </div>))}
        </div>

    );}
};

export default App;
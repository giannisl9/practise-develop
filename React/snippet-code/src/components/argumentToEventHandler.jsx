import React, { Component } from 'react'

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

class Argument extends Component {
  state = {
    people: [new Person('Paul', 20), new Person('Anna', 23)],
    name: 'Secret'
  }

  handleClick (id) {
    this.setState({name: this.state.people[id].name})
  }

  handleClickArrow = id => this.setState({name: this.state.people[id].name})

  render () {
    return (
      <React.Fragment>
        <button
          onClick={() => this.handleClick(0)}
        >
          Reveal Name Normal
        </button>
        <button
          onClick={() => this.handleClickArrow(1)}
        >
          Reveal Name Arrow
        </button>
        <p>{this.state.name}</p>
      </React.Fragment>
    )
  }
}

export default Argument

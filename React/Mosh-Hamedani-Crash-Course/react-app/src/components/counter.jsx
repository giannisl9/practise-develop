import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  handleClick () {
    this.setState({count: this.state.count + 1})
  }

  render () {
    return (
      <React.Fragment>
        <span
          className='badge badge-primary m-2'
        >
          {this.state.count}
        </span>

        <button
          onClick={() => this.handleClick()}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>

      </React.Fragment>
    )
  }
}

export default Counter

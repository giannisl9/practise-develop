import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  handleClick () {
    this.setState({count: this.state.count + 1})
  }

  formatCount () {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }

  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    const { count } = this.state
    classes += count === 0 ? 'warning' : 'primary'
    return classes
  }

  render () {
    return (
      <React.Fragment>
        <span
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
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

import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ['tag1', 'tag2', 'tag3', 'tag4']
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

        <ul className='list-inline'>
          {this.state.tags.map(tag => <li className='list-inline-item' key={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
    )
  }
}

export default Counter

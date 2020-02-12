import React, { Component } from 'react'

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ['tag1', 'tag2', 'tag3', 'tag4']
  }

  handleClick () {
    this.setState({value: this.state.value + 1})
  }

  formatCount () {
    const { value } = this.state
    return value === 0 ? 'Zero' : value
  }

  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    const { value } = this.state
    classes += value === 0 ? 'warning' : 'primary'
    return classes
  }

  render () {
    return (
      <React.Fragment>
        {this.props.children}
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

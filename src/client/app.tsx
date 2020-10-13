import React from 'react'
import ReactDOM from 'react-dom'

export class Hello extends React.Component {
  render() {
    return (
      <h2>
        Welcome!
      </h2>
    )
  }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))

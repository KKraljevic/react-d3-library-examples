import React from 'react';
import node from './../d3-examples/panAndZoom';
import D3StateContainer from './d3Components/Component';
import ReactDom from 'react-dom';
var d3 = require('d3');

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  render: function() {
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});

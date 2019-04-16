import React, { Component } from 'react';

export interface PanelProps {
  title?: string
}

export default class Panel extends Component<PanelProps, {}> {

  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h2> {title} !!</h2>
        {
          children
        }
      </div>
    )
  }
}

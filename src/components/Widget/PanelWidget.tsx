import React, { Component } from 'react';
import { PanelWrapperProps, withPanel } from '../Panel/withPanel';

interface WidgetProps extends PanelWrapperProps {
  config: {
    title: string,
  }
}

class PanelWidget extends Component<WidgetProps, {}> {

  componentDidMount(): void {
    const {
      title
    } = this.props.config;

    if (this.props.onInitPanel) {
      this.props.onInitPanel(title)
    }
  }

  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores excepturi minus neque quos
          reprehenderit velit voluptate? Corporis, cum cumque dolore enim eveniet ipsa ipsum laudantium libero nostrum
          possimus, provident.
        </p>
      </div>
    )
  }
}

export default withPanel(PanelWidget)

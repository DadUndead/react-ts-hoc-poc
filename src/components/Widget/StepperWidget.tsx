import React, { Component } from 'react';
import { StepperPanelWrapperProps, withStepperPanel } from '../StepperPanel/withStepperPanel';

interface WidgetProps extends StepperPanelWrapperProps {
  config: {
    slides: number[],
    title: string,
  }
}

class StepperWidget extends Component<WidgetProps, {}> {

  componentDidMount(): void {
    const {
      slides,
      title
    } = this.props.config;
    const totalSteps = slides.length;

    this.props.onInitPanel(title, 0, totalSteps)
  }

  render() {
    const { onPrevSlide, onNextSlide, canGoBack, canGoNext } = this.props;

    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores excepturi minus neque quos
          reprehenderit velit voluptate? Corporis, cum cumque dolore enim eveniet ipsa ipsum laudantium libero nostrum
          possimus, provident.
        </p>
        <div>
          <button disabled={!canGoBack} onClick={onPrevSlide}>Previous</button>
          <button disabled={!canGoNext} onClick={onNextSlide}>Next</button>
        </div>
      </div>
    )
  }
}

export default withStepperPanel(StepperWidget)

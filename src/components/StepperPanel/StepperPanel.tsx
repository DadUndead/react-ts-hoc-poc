import React, { Component } from 'react';
import Panel from '../Panel/Panel';

export interface StepperPanelProps {
  step: number;
  title: string;
  totalSteps: number;
}

class StepperPanel extends Component<StepperPanelProps, {}> {

  render() {
    const { step, totalSteps, title } = this.props;

    return (
      <Panel title={title}>
        <em> step {step} of {totalSteps} </em>
      </Panel>
    )
  }
}

export default StepperPanel;

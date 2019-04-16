import React, { Component, ComponentType } from 'react';
import StepperPanel, { StepperPanelProps } from './StepperPanel';

interface ExternalProps {
  style?: React.CSSProperties;
}

export interface StepperPanelWrapperState {
  step: number,
  title: string,
  totalSteps: number,
}

export interface StepperPanelWrapperProps {
  onInitPanel: (title: string, step: number, totalSteps: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  canGoNext: boolean;
  canGoBack: boolean;
}

// Omit taken from https://github.com/Microsoft/TypeScript/issues/28339#issuecomment-467220238
export type Omit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

export const withStepperPanel =
  <T extends StepperPanelWrapperProps>(WrappedComponent: ComponentType<T>) => {

    type ResultProps = Omit<T & ExternalProps, keyof StepperPanelWrapperProps>;

    return class StepperPanelHOC extends Component<ResultProps, StepperPanelWrapperState> {

      state: StepperPanelWrapperState = {
        step: 0,
        title: '',
        totalSteps: 0,
      };

      private initPanel = (title: string, step: number, totalSteps: number) => {
        this.setState({ title, step, totalSteps })
      };

      private nextSlide = () => {
        if (!this.canGoNext()) {
          return;
        }

        this.setState({ step: this.state.step + 1 })
      };

      private prevSlide = () => {
        if (!this.canGoBack()) {
          return;
        }

        this.setState({ step: this.state.step - 1 })
      };

      private canGoNext = () => this.state.step < this.state.totalSteps;
      private canGoBack = () => this.state.step > 0;

      public render(): JSX.Element {

        const { title, step, totalSteps } = this.state;

        const stepperPanelProps: StepperPanelProps = {
          step,
          title,
          totalSteps
        };

        const injectProps: T = {
          onInitPanel: this.initPanel,
          onNextSlide: this.nextSlide,
          onPrevSlide: this.prevSlide,
          canGoNext: this.canGoNext(),
          canGoBack: this.canGoBack(),
          ...this.props,
        } as T;

        return (
          <div style={this.props.style}>
            <StepperPanel {...stepperPanelProps}/>
            <WrappedComponent {...injectProps}/>
          </div>
        )
      }
    }
  };

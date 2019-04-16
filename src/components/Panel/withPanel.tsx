import React, { Component, ComponentType } from 'react';
import Panel, { PanelProps } from './Panel';

interface ExternalProps {
  style?: React.CSSProperties;
}

export interface PanelWrapperProps {
  onInitPanel?: (title?: string) => void;
  title?: string
}

interface PanelWrapperState {
  title: string;
}

// Omit taken from https://github.com/Microsoft/TypeScript/issues/28339#issuecomment-467220238
export type Omit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

export const withPanel =
  <T extends PanelWrapperProps>(WrappedComponent: ComponentType<T>) => {

    type ResultProps = Omit<T & ExternalProps, keyof PanelWrapperProps>;

    return class PanelHOC extends Component<ResultProps, PanelWrapperState> {

      state: PanelWrapperState = {
        title: ''
      };

      private initPanel = (title: string) => {
        this.setState({ title })
      };

      public render(): JSX.Element {

        const { title } = this.state;

        const panelProps: PanelProps = {
          title,
        };

        const injectProps: T = {
          onInitPanel: this.initPanel,
          ...this.props,
        } as T;


        return (
          <div style={this.props.style}>
            <Panel {...panelProps}/>
            <WrappedComponent {...injectProps} />
          </div>
        )
      }
    }
  };

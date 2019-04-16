import React, { Component } from 'react';
import './App.css';
import StepperWidget from './components/Widget/StepperWidget';
import StepperPanel from './components/StepperPanel/StepperPanel';
import PanelWidget from './components/Widget/PanelWidget';
import Panel from './components/Panel/Panel';

class App extends Component {
  render() {
    return (
      <>
        <StepperWidget config={{ slides: [1, 2, 3, 4, 5], title: 'Voodoo Widget' }}/>
        <hr/>
        <PanelWidget config={{ title: 'Voodoo Widget' }}/>
        <hr/>
        <StepperPanel title={'lol'} totalSteps={5} step={3}/>
        <hr/>
        <Panel title={'lol'}/>
      </>
    );
  }
}

export default App;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/Hello/Hello';
import './index.css';

ReactDOM.render(
  <Hello name="ts" enthusiasmLevel={99}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

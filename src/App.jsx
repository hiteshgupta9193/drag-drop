import React from 'react';
import './App.scss'
import { container } from './appStyle'
import Home from 'views/home'

const App = () => (
  <div css={container}>
    <Home />
  </div>
)

export default App;

import React from 'react';
import Main from './pages/main';
import Global from './styles/global';

const App: React.FC = () => (
  <div style={{ overflow: 'hidden' }}>
    <Global /> <Main />
  </div>
);

export default App;

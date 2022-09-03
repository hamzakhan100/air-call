import React from 'react';
import "./css/app.scss"
import Header from './components/Header/Header';
import Activity from './components/Activity/Activity';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Activity/>
      
    </div>
  );
};

export default App;

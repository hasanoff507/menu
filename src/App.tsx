import React from 'react';
import MainPanel from './main-panel'
import SettingPanel from './setting-panel/Component'
import Language from './autolanguage'

//React-Routter-Dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Language />} />
        <Route path='/registration' element={<SettingPanel />} />
        <Route path='/main' element={<MainPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

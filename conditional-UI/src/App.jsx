import { useState } from 'react'

import Loading from './components/loading'
import LoginExample from './components/logInLogout'
import ThemeToggle from './components/ThemeToggel'


function App() {
 

  return (
    <>
      <Loading/>

      <hr/>

      <LoginExample/>

      <hr/>

      <ThemeToggle/>
    </>
  )
}

export default App

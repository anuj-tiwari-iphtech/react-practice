import { useState } from 'react'

import './App.css'

import AutoFocus from './components/AutoFocus'
import StopWatch from './components/StopWatch'
import PreviousValue from './components/PreviousValue'
import ScrollSection from './components/ScrollSection'
import ClickCounter from './components/ClickCounter'

function App() {
  

  return (
    <>
      <AutoFocus/>
      <hr/>

      <StopWatch/>
      <hr/>

      <PreviousValue/>

      <hr/>

      <ClickCounter/>

        <hr/>
      <ScrollSection/>
      
    </>
  )
}

export default App

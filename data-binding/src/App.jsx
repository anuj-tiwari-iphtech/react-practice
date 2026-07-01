import { useState } from 'react'

import InputState from './component/inputState'
import LivePreview from './component/livePreview'

import PracticeProject from './component/PracticeProject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputState/>

      <LivePreview/>

      <PracticeProject/>
    </>
  )
}

export default App

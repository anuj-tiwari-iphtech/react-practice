import { useState } from 'react'

import AddItems from './components/AddItem'
import RemoveItem from './components/RemoveItem'
import UpdateItem from './components/UpdateItems'
import PracticeProject from './components/PracticeProject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AddItems/>

      <RemoveItem/>      

      <UpdateItem/> */}

      <PracticeProject/>
    </>
  )
}

export default App

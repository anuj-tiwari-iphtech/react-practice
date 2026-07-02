import { useState } from 'react'


import EmployeesDetails from './components/EmployeeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmployeesDetails/>
    </>
  )
}

export default App

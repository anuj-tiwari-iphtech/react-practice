

import { useState } from 'react'

import State from './Statecomponents/state';
import CreatingState from './Statecomponents/creatingState';
import MultiState from './Statecomponents/multiState';
import ObjectState from './Statecomponents/objectState';
import ArrayState from './Statecomponents/ArrayState';

import Counter from './components/counter';
import ToggleButton from './components/ToggleButton';
import ShowHidePassword from './components/ShowHidePassword';
import LikedButton from './components/isLiked';

import './App.css'

function App() {
  const [count, setCount] = useState(18);

  return (
    <>
      <h1>Hello World</h1>
      <h1>{count}</h1>

      {/* <p>State practtice</p> */}
      <State/>
      <CreatingState/>
      <MultiState/>
      <ObjectState/>
      <ArrayState/>

      
      <Counter/>
      <ToggleButton/>
      <hr/>
      <ShowHidePassword/>
      <LikedButton/>
    </>
  )
}

export default App



import OnChange from "./components/onChange"
import ButtonClickCounter from "./components/ButtonClickCounter"
import WelcomeUserButton from "./components/WelcomeButton"
import ChangeBg from "./components/ChangeBg"
import AlertMessage from "./components/showAlert"

function App() {
  

  return (
    <>
    <OnChange/>
    <hr/>
    <ButtonClickCounter/>
    <hr/>
    <WelcomeUserButton/>
    <hr/>
    <ChangeBg/>
    <hr/>
    <AlertMessage/>
    </>
  )
}

export default App

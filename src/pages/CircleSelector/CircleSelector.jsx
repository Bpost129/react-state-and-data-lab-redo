import { useState } from "react"
import './CircleSelector.css'
import Circles from "../../components/Circles/Circles"
import Selectors from "../../components/Selectors/Selectors"

const CircleSelector = () => {
  // state is initialized as false for all circles
  // you'll write code to change the selected index to true on click
  const [selections, setSelections] = useState([false, false, false, false])

  function handleSelection(selectIdx) {
    const newSelections = selections.map((select, idx) => {
      return idx === selectIdx
    })

    setSelections(newSelections)
  }

  return ( 
    <main>
      <Circles selections={selections} handleSelection={handleSelection} />
      <Selectors selections={selections} handleSelection={handleSelection} />
    </main>
  )
}

export default CircleSelector
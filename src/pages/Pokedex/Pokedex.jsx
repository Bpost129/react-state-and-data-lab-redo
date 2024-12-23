import { useState } from "react"
import { Link } from "react-router-dom"
import "./Pokedex.css"
import { pokeData } from "../../data/pokeData"
console.log(pokeData)


const Pokedex = () => {
  const displayCount = 20
  const [currIdx, setCurrIdx] = useState(0)
  const [displayedPokemon, setDisplayedPokemon] = useState(filterPokemon(0))

  function filterPokemon(newIdx) {
    const filteredPokemon = pokeData.filter((pokemon, idx) => {
      return idx >= newIdx && idx < newIdx + displayCount
    })

    return filteredPokemon
  }

  const handlePageUp = () => {
    if (currIdx + displayCount > pokeData.length) return
    setCurrIdx(currIdx + displayCount)
    setDisplayedPokemon(filterPokemon(currIdx + displayCount))
  }
  
  const handlePageDown = () => {
    if (currIdx - displayCount < 0) return
    setCurrIdx(currIdx - displayCount)
    setDisplayedPokemon(filterPokemon(currIdx - displayCount))
  }



  return ( 
    <>
      <h1>Pokemon List</h1>
      <div className="pagination-container">
        <button onClick={handlePageDown}>&lt;</button>
        <button onClick={handlePageUp}>&gt;</button>
      </div>
      <div className="num-results-container">
        Results {currIdx + 1} - {currIdx + displayCount <= pokeData.length ? currIdx + displayCount : currIdx + (pokeData.length - currIdx) } of {pokeData.length}
      </div>
      <div className="pokemon-container">
        {displayedPokemon.map(pokemon => 
          <Link to={`/pokemon/${pokemon.number - 1}`} key={pokemon._id}>
            <div className="pokemon-link">
              <img src={pokemon.image} alt="a fierce pokemon" />
              <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>  
            </div>
          </Link>
        )}
      </div>
    </>
  )
}

export default Pokedex
import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API = "http://localhost:6001/plants"
function App() {
  const [plants, setPlants] = useState([])


  useEffect(() => fetch(API)
    .then(res => res.json())
    .then(setPlants), [])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addNewPlant={addNewPlant} soldOut={soldOut} plantSearch={plantSearch} />
    </div>
  )

  function addNewPlant(newPlant) {
    setPlants([...plants, newPlant])
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant),
    })
  }

  function soldOut(plant) {
    const newPlantList = plants.map(p => p.id !== plant.id ? p : { ...p, sold: true })
    setPlants(newPlantList)
  }

  function plantSearch(formSearch) {
    const filteredPlants = plants.filter((p) => p.name.includes(formSearch))
    setPlants(filteredPlants)
  }

}

export default App;

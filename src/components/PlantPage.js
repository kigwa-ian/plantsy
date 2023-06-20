import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addNewPlant, soldOut, plantSearch }) {
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search plantSearch={plantSearch} />
      <PlantList plants={plants} soldOut={soldOut}/>
    </main>
  );
}

export default PlantPage;

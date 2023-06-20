import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [formName, setFormName] = useState("")
  const [formImage, setFormImage] = useState("")
  const [formPrice, setFormPrice] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    const newPlant = {
      "name": formName,
      "image": formImage,
      "price": parseFloat(formPrice)
    }
    addNewPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setFormName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setFormImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setFormPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

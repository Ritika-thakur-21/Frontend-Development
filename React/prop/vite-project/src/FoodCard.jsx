import React from 'react'

const FoodCard = ({ foodMenu }) => {
  return (
    <div >
      {
      foodMenu.map((food) => (
        <div key={food.id}>
          <h2>{food.name}</h2>
          <p>Price: ₹{food.price}</p>
          <img src={food.image} alt={food.name} width="200" />
        </div>
      ))
      }
    </div>
  )
}

export default FoodCard
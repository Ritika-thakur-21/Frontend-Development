import React from 'react'

const FoodCard = ({ foodData }) => {
  return (
    <div style={{
  border: '1px solid #ddd',
  backgroundColor: '#fff',
  padding: '15px',
  borderRadius: '10px',
  width: '200px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
}}>
  <img 
    src={foodData.image} 
    alt={foodData.name} 
    style={{ width: '100%', borderRadius: '8px' }} 
  />
  <h3>{foodData.name}</h3>
  <p>₹{foodData.price}</p>
</div>
  )
}

export default FoodCard
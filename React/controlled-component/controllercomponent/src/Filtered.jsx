import React from 'react'
import { useState } from 'react'

const Filtered = () => {

    let [category, setCategory] = useState('all')

    let products = [
        {id : 1, name : 'laptop', price : 50000 , category : 'electronics'},
        {id : 2, name : 'mobile', price : 20000, category : 'electronics'},
        {id : 3, name : 'pan', price : 3000, category : 'kitchen'},
        {id : 4, name : 'Atomic Habits', price : 150, category : 'books'},
        {id : 5, name : 'shirt', price : 2000,category : 'clothing'},
    ]

    let handleChange = (e) =>{
        setCategory(e.target.value)
    }
    
  return (
    <div>
      <input type="text" name="" id="" placeholder='enter category' value={category} onChange={handleChange} />
      {
       products.filter((item) => item.category===category || category === 'all').map((item,index) => (
         <ul key={index}>
           <li>{item.name}</li>
         </ul>
       ))
      }
    </div>
  )
}

export default Filtered

import React, { useState } from 'react'

const Practice = () => {

  // ================= FORM STATE =================
  let [data, setData] = useState({
    username: '',
    password: '',
    gender: '',
    skills: [],
    option: '',
    message: ''
  })

  let handleChange = (e) => {
    let { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  // Checkbox handler
  let handleCheckBox = (e) => {
    let { value, checked } = e.target

    setData({
      ...data,
      skills: checked
        ? [...data.skills, value]
        : data.skills.filter((skill) => skill !== value)
    })
  }

  // ================= FILTER STATE =================
  let [category, setCategory] = useState('all')

  let products = [
    { id: 1, name: 'laptop', price: 50000, category: 'electronics' },
    { id: 2, name: 'mobile', price: 20000, category: 'electronics' },
    { id: 3, name: 'pan', price: 3000, category: 'kitchen' },
    { id: 4, name: 'Atomic Habits', price: 150, category: 'books' },
    { id: 5, name: 'shirt', price: 2000, category: 'clothing' },
  ]

  let handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div>

      {/* ================= FORM ================= */}
      <h2>Form Section</h2>

      <form>
        <input
          type="text"
          name="username"
          value={data.username}
          placeholder="username"
          onChange={handleChange}
        /><br /><br />

        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="password"
          onChange={handleChange}
        /><br /><br />

        Male
        <input type="radio" name="gender" value="Male" onChange={handleChange} />

        Female
        <input type="radio" name="gender" value="Female" onChange={handleChange} />
        <br /><br />

        HTML
        <input type="checkbox" value="HTML" onChange={handleCheckBox} />

        CSS
        <input type="checkbox" value="CSS" onChange={handleCheckBox} />
        <br /><br />

        <select name="option" value={data.option} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>
        <br /><br />

        <textarea
          name="message"
          value={data.message}
          onChange={handleChange}
        ></textarea>
      </form>

      <hr />

      {/* ================= OUTPUT ================= */}
      <h2>Form Output</h2>
      <h3>Username: {data.username}</h3>
      <h3>Password: {data.password}</h3>
      <h3>Gender: {data.gender}</h3>
      <h3>Skills: {data.skills.join(', ')}</h3>
      <h3>Location: {data.option}</h3>
      <p>Message: {data.message}</p>

      <hr />

      {/* ================= FILTER ================= */}
      <h2>Filter Products</h2>

      <input
        type="text"
        placeholder="enter category (electronics/books...)"
        value={category}
        onChange={handleCategoryChange}
      />

      {
        products
          .filter((item) => item.category === category || category === 'all')
          .map((item) => (
            <ul key={item.id}>
              <li>{item.name} - ₹{item.price}</li>
            </ul>
          ))
      }

    </div>
  )
}

export default Practice
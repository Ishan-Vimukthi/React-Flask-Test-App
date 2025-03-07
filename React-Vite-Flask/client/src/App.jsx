import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      {array.map((user, index) => (
        <div key={index}>
          <span>{user}</span>
          <br></br>
        </div>
      ))}
    </div>
  )
}

export default App

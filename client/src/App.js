import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p> Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user} </p>

        ))
      )}
      <p> Group 4 Project Software Engineering</p>
      <p> Test Message</p>
    </div>
  )
}

export default App
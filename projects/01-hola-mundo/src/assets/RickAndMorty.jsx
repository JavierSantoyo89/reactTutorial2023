import { useEffect, useState } from "react"

function RickAndMorty() {
  const [users, setUsers] = useState()

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    ).then((response) => response.json())

    setUsers(response)
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <div className="app">
      {users &&
        users.map((user) => (
          <div className="item-container" key={user.id}>
            Id:{user.id} <div className="title">Title:{user.title}</div>
          </div>
        ))}
    </div>
  )
}

export default RickAndMorty

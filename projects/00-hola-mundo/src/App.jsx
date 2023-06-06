import TwitterFollowCard from "./assets/TwitterFollowCard.jsx"
import "./assets/App.css"
import Pruebas from "./assets/Pruebas.jsx"
//import { useState } from "react"
const users = [
  { userName: "JavierSantoyo89", name: "Javier Santoyo", isfollowing: true },
  { userName: "midudev", name: "Miguel Angel Duran", isfollowing: false },
  { userName: "PacoHdezs", name: "Paco Hrez", isfollowing: true },
]
function App() {
  {
    /* let [name, setname] = useState("Javier Santoyo")*/
  }
  {
    /* const handleClick = () => {*/
  }
  {
    /* setname("JavierSantoyo89")*/
  }
  {
    /* } */
  }
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isfollowing } = user
        return (
          <TwitterFollowCard
            userName={userName}
            name={name}
            initialFollowing={isfollowing}
            key={userName}
          ></TwitterFollowCard>
        )
      })}

      <Pruebas name="Javier" />
      <button> Cambio de nombre</button>
    </section>
  )
}
export default App

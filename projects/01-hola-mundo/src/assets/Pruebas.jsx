/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

function Pruebas({ name = "N/D" }) {
  
  //* Con esto puedes hacer que el estado cambie en forma de contador */
  const [sumar, setsumar] = useState(0)
  const handleClick = () => {
    setsumar(sumar + 1)
  }
  //* -------------------------------------------------------------- */

  //* Usando useEffect & useState puedes lograr el cambiar el fondo (en este caso de todo el proyecto)
  const [bgChange, setbgChange] = useState("gray")
  const handleChangeColor = (bgChange) => {
    setbgChange(bgChange)
  }

  useEffect(() => {
    document.body.style.background = bgChange
  }, [bgChange])
  //* -------------------------------------------------------------- */

  return (
    <div className="PruebasClass">
      <p>
        Hola {name} estas en el componente de pruebas: {sumar}
      </p>
      <button onClick={handleClick}> contar </button>
      <button onClick={() => {handleChangeColor("red")}}>  Cambiar color de fondo  </button>
    </div>
  )
}

export default Pruebas

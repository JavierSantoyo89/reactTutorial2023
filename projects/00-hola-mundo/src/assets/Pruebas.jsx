/* eslint-disable react/prop-types */


function Pruebas({ name = "N/D" }) {
  return (
    <div>
      <p>Hola {name} estas en el componente de pruebas</p>
    </div>
  )
}

export default Pruebas

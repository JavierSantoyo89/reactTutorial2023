import { useEffect, useState } from "react"

const CAT_ENDPONT_RANDOM_FACT = "https://catfact.ninja/fact"

export default function App() {
  const [fact, setFact] = useState("lorem ipsum cat fact whatever")
  const [imageUrl, setImageUrl] = useState()

  //* Con el useEfect carga solo cuando se monta los datos del fetch
  useEffect(() => {
    fetch(CAT_ENDPONT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        console.log(fact)
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    //* con el split separas por cada espacio en un array, con el slice seleccionan las pasiciones del 0 al 3 y con el join unen las posiciones del slice por espacios
    if (!fact) return
    const threeFirstWord = fact.split(" ", 3).join(" ")
    console.log(threeFirstWord)
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`

    //* Segundo fecth para buscar imagenes con las 3 palabras */
    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        console.log(url)
        setImageUrl(`https://cataas.com${url}`)
      })
  }, [fact])

  return (
    <main>
      <div>App de mininos</div>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  )
}

import "./App.css"
import { useState, useEffect } from "react"

const url = "http://localhost:3000/products"

const App = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    async function getData() {

      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)

    }

    getData()

  }, [])



  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Crio um novo objeto com os valores dos inputs
    const product = {
      name,
      price
    }

    // faço uma requisição usando o método fetch()
    // O método da requisição é definido como POST, que é usado para criar novos recursos no servidor.
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })

    // receber resposta do servidor
    const addedProduct = await res.json()

    // vai incluir a resposta vinda no servidor dentro do 'products'
    setProducts((prevProduct) => [...prevProduct, addedProduct])
  }

  return (
    <div className="App">
      <h3>HTTP em React</h3>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome"
            />
          </label>

          <label>
            <span>Preço: </span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Digite o preço"
            />
          </label>

          <input type="submit" value="Enviar"/>
        </form>
      </div>
    </div>
  )
}

export default App

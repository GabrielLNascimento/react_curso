const CarDetails = ({name, km, color}) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  )
}

export default CarDetails

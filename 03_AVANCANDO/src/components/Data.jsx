import { useState } from "react"

const Data = () => {
    let valor = 10
    
    const [anotherNumber, setAnotherNumber] = useState(10)

    return (
        <div>
            <p>Valor: {valor}</p>
            {/* <button onClick={() => (valor = 15)}>Mudar valor</button> */}
            <br />

            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(20)}>Mudar valor</button>
        
        </div>
    )
}

export default Data

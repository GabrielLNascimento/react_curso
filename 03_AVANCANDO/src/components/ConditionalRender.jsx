const ConditionalRender = () => {

    const x = true
    
    const nome = "Gabriel"

    return (
        <div>
            <h3>Isso será exibido?</h3>
            {x == true && <p>Se x for true, sim!</p>}

            <br />
            
            <h3>Ternário</h3>
            {nome === "Gabriel" ? (
                <p>Bem vindo {nome}</p>
            ): (
                <p>Não aceitamos você aqui</p>
            )}
        </div>
    )
}

export default ConditionalRender

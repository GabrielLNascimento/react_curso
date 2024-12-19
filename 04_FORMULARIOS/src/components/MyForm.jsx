import "./MyForm.css"
import { useState } from "react"

const MyForm = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    // const handleName = (e) => {
    //     setName(e.target.value)
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)

        setName("")
        setEmail("")
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}

                        value={name}
                    />

                    <label>
                        <span>E-mail:</span>
                        <input 
                            type="text"
                            name="email"
                            placeholder="Digite o seu email"
                            onChange={(e) => setEmail(e.target.value)}

                            value={email}
                        />
                    </label>

                    <input 
                        type="submit" 
                        value="Enviar" 

                    />
                </div>
            </form>
        </>

    )
}

export default MyForm

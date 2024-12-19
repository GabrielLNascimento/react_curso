import { useState } from "react"

const List = () => {

    const [list] = useState(["Matheus", "Pedro", "João", "Lucas"])

    const [users, setUsers] = useState([
        { id: 1, nome: "Gabriel", idade: 17 },
        { id: 2, nome: "Emilly", idade: 18 },
        { id: 3, nome: "Zanela", idade: 16 }
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4) // desconsidera o 4

        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id)
        )

    }

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li>{item}</li>
                ))}
            </ul>

            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((item, i) => (
                    <li key={users.id}>
                        {item.nome} - {item.idade}
                    </li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Deletar</button>
        </div>
    )
}

export default List

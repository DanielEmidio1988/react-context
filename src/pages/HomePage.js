import Card from "../components/Card"
import { useContext } from "react"
import { GlobalContext} from "../context/GlobalContext"
import userEvent from "@testing-library/user-event"

function HomePage() {
    const context = useContext(GlobalContext)
    const {usuarios, clicaCard, mudaCard} = context

    return (
        <>
        {usuarios.map((usuario) =>{
            return <Card key={usuario.id} usuario={usuario} clicaCard={clicaCard} mudaCard={mudaCard}/>
        })}
        </>
    )
}

export default HomePage
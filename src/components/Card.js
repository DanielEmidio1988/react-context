import {ContainerCard} from "./styledCard"
import { useContext } from "react"
import { GlobalContext} from "../context/GlobalContext"

function Card (props){

    const context = useContext(GlobalContext)



    return (
        <>
        <ContainerCard onClick={()=> props.mudaCard(props.usuario.id)} clicaCard={props.clicaCard} id={props.usuario.id}>
            <div>
                <img src="https://avatars.githubusercontent.com/u/111311678?v=4" alt="avatar-perfil" />
            </div>
            <div>
                <h1>{props.usuario.name}</h1>
                <h3>Front-End</h3>
                <p></p>
                <p>"Acredito que o investimento em pessoas é a chave do sucesso de qualquer negócio."</p>
            </div>
        </ContainerCard>

        </>
    )
}

export default Card
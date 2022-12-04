import axios from "axios";
import React, {useState, useEffect} from "react"
import { BASE_URL, authorization } from "./constants/url"
import {GlobalContext} from "./context/GlobalContext"
import { Router } from "./routes/Router";

function App() {

  const [usuarios,setUsuario] = useState([])
  const [clicaCard, setClicaCard] = useState("")
 
  const fetchLista = async ()=> {  
  try {
    const resp = await axios.get(BASE_URL,{
      headers:{
        "Authorization": authorization
      }
      });
      setUsuario(resp.data)
      console.log("Sucesso!")
    } catch (err){
    console.log("Erro! Verifique.")
    console.log(err)
  }
  }

  useEffect(()=>{
    fetchLista();
  }, [])

  const mudaCard= (usuarioId)=>{
    const buscaMudaCard = usuarios.find((usuario)=>{
      return usuario.id === usuarioId
    })
    setClicaCard(buscaMudaCard)
  }

  const context = {
    usuarios,
    clicaCard,
    mudaCard,
  }

  return (
    <GlobalContext.Provider value ={context}>
    <Router/>
    </GlobalContext.Provider>
  );
}

export default App;

import axios from "axios"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

function Detail(){
    const {id} = useParams() //tenemos el id
    const [character, setCharacter] = useState({}) // aqui es donde vamos almacenar el personaje y su informacion

    useEffect(() =>{
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
         return setCharacter({});
      }, [id]);

    // useEffect, es lo primero que se va a ejecutar cuando el componente se monte
    // el return setCharacter({}); va a limpiar la informacion cuando el componente se desmonte 
    //[id] es lo que va a indicar cuando se va a actualizar

    
    return(
        <div>={
            character.name && 
            <div>

            <h2>Name: {character.name}</h2>
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin?.name}</h2>
          <img src={character.image} alt={`No se encuentra la imagen de ${character.name}`} />
                        
            </div>
            }
        </div>
    )
}

export default Detail;
// import styles from "../components/SearchBar.module.css";
import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch} ) {

   // const handleSearch = () =>{
   //    const inputSearch = document.getElementById("inputSearch");
   //    onSearch(inputSearch.value )
   //    inputSearch.value = ""
   // }
const [id, setId] = useState("")

const handleChange = (event) =>{
   setId(event.target.value)
}

const handleSearch = (id) =>{
   onSearch(id)
   setId("")
}

return (
      <div className={styles.container}>
         <div className={styles.containerInput}>
          <input className={styles.input} value={id} id = "inputSearch" type='search' placeholder="Ingresa un ID" onChange={handleChange}/>
         <button className={styles.btn} onClick={()=>handleSearch(id)} >Agregar</button> 
         </div>
      </div>
   );
}



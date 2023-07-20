import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import {useState, useEffect} from "react"
import {addFav, removeFav} from "../../Redux/actions"
import {connect} from "react-redux"

function Card({myFavorites, onFavorites, name, status, id, species, gender, origin, image, onClose, addFav, removeFav}) {
   
const [isFav,setIsFav] = useState(false)

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

const handleFavorite = () =>{
   if(isFav){
      setIsFav(false)
      removeFav(id)
   }else {
      setIsFav(true)
      addFav({name, status, species, gender, origin, image, id})
   }

}

   return (
      <div className={styles.container}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <button onClick={onFavorites}>💛</button>
      <button onClick={()=> onClose(id)}  className={styles.btn}>X</button>
      <img src={image} alt={`No se encuentra la imagen de ${name} ` } /> 
      
      <Link to={`/detail/${id} `} style={{textDecoration: "none"}}><h2>Nombre:{name}</h2></Link>
      
      
      <div className={styles.containerData}>
      <h2>Status:{status}</h2>
      <h2>Specie:{species}</h2>
      <h2>Gender{gender}</h2>
      <h2>Origin:{origin}</h2>
   </div>
   </div>
   );
   }

   export function mapStateToProps(state){

      return {
         myFavorites: state.myFavorites
      }
   }
   export function mapDispatchToProps(dispatch){
      return{
         addFav: function(character){
            dispatch(addFav(character))
         },

         removeFav: function(id){
            dispatch(removeFav(id))
         }
      }
   }
   export default connect (mapStateToProps, mapDispatchToProps)(Card)
   



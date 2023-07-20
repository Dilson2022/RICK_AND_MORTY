import Card from '../Card/Card.jsx';
import styles from "./Cards.module.css" ;

export default function Cards({characters, onClose}) {
   return (
   <div className={styles.container} >
      {characters.map(character => 
          
          <Card
          key = {character.id}   
          id={character.id}
          name={character.name}   
          image={character.image}
          onClose= {onClose}
         //  id={character.id}
          />
           ) }
   </div>
    );
     }

  


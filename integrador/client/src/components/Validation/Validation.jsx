const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexNum = /\d/;

const Validation = (userData) => {

    const errors = {}

    if (!userData.email) errors.email = "El email es requerido"
    else if (!regexMail.test(userData.email)) errors.email = "El email es inválido"
  

    else if (!userData.password) errors.password = "La contraseña es requerida"
    else if (!regexNum.test(userData.password)) errors.password = "La contraseña debe tener al menos 1 numero"

    /*
    let errors = {
        email: "El email es requerido"
    }
    */
    return errors 
    
}
export default Validation;



// todos son inuts

// function Validation(inputs){

//     let newError = {}

//     if (!userData.email){
//          newError.email = "El email es requerido";

//     } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)){
//          newError.email = "El email es inválido";
//         } else {
//             newError.email = "";
//          } 

//          if (!userData.password) {
//              newErrors.password = "La contraseña es requerida";
//               } else if (/\d/.test(userData.password) ) {
//                 newError.password = "";
//               } else {
//                 newError.password = "La contraseña debe tener al menos 1 numero";
//                 }

//                 if (!userData.name) newError.name= "el nombre es requerido";

//                 return newError
                
//             }

                
              

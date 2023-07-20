import style from "./Form.module.css"
import {useState} from "react"
import Validation from '../Validation/Validation.jsx';

function Form({login}) {
    const [userData, setUserData]= useState({
        email: "",
        password:""
    } )

    const [errors, setErrors] = useState({
        email: "",
        password:""
    } )



        function handleChange(e){
            // console.log("e", e.target)
            setUserData({
                ...userData, // trae la informacion que esta en el estado seteado
                [e.target.name]: e.target.value //{email: examole@gmail.com,
                                                // password: contraseña }
            } )

            setErrors( Validation( { 
                ...userData, // trae la informacion que esta en el estado seteado
                [e.target.name]: e.target.value //{email: examole@gmail.com,
                                                // password: contraseña }
            } ))
        }

        const handleSubmit= (event) =>{
            event.preventDefault();
            login(userData)
        }


    return(
       
       <div style={{display: "flex", justifyContent: "center"}} >
        <form className={style.form} onSubmit={handleSubmit} >
            <label>Email:</label>
            <input type="text"name="email" placeholder="example@gmail.com" value={userData.email} onChange={handleChange} ></input>
            <p>{errors.email}</p>

            <label>Password:</label>
            <input type="text"name="password" placeholder="password" value={userData.password} onChange={handleChange} ></input>
            <p> {errors.password} </p>
           

            <button>Login</button>

        </form>
       </div> 
    )
}

export default Form;

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import {useState, useEffect} from "react"
import axios from "axios";
import { Routes,Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";


function App() {
      // React.useState
   const [characters, setCharacters] = useState ([])
   
   // fetch - axios

   const navigate = useNavigate();
const [access, setAccess] = useState(false);
//const EMAIL = 'ejemplo@gmail.com';
//const PASSWORD = 'Contraseña123';


async function login(userData) {
   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data
      setAccess(data);
      access && navigate('/home');
    
   } catch (error) {
      window.alert(error.response.data.response);
   }

   // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //    const { access } = data;
   //    setAccess(data);
   //    access && navigate('/home');
   // });
}

// function login(userData) {
//    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
//    }
// }
useEffect(() => {
   !access && navigate('/');
}, [access,navigate]);

async function onSearch (id)  {
   try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      setCharacters((oldCharacters) => [...oldCharacters, data]);
   } catch (error) {
      window.alert(error.response.data.menssage); // 4xx y 5xx
   } 

   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //    .then(({data}) =>{ 
   //       // console.log(data)
   //       if (!characters.find(char => char.id === data.id)){ 
   //       if (data.name) {
   //          setCharacters((oldCharacters) => [...oldCharacters, data]);
   //           }
   //       } else {
   //          window.alert(`Ya existe un personaje con el id ${id}` )
   //       }
   //    } )

   //    .catch(err => window.alert(err) );
   };

   
   const onClose = (id)=> {
      setCharacters(characters.filter(char => char.id!== id))
   }

   useEffect(() =>{console.log(characters) } , [characters]) // funciones anonima
   
   const location = useLocation()


   return (
      <div className='App'>
       { location.pathname !=="/" && <Nav onSearch={onSearch} />}
        <Routes>
               <Route path="/" element={<Form login={login} /> } />
               <Route path="/home"element={<Cards characters={characters} onClose = {onClose}/> } />
               <Route path="/about"element={<About /> } />
               <Route path="/detail/:id" element={<Detail /> } />
               <Route path="/favorites" element={<Favorites /> } />
         </Routes>
         
         </div>
   );
}

export default App;

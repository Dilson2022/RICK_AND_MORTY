const http = require("http");
const {getCharById} = require("./controllers/getCharById")
//const characters = require("./utils/data");

const PORT = 3001;

const server = http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req 
    // console.log(url)
    if (url.includes("/rickandmorty/character")) {
        // const id = url.split("/").pop();
        const id = +req.url.split("/").pop();
        getCharById(res, id);
        //const character = characters.find(char => char.id === id);
       }else{ 
            
    res.writeHead(404, {"Content-Type": "application/json"})
    res.end(JSON.stringify({error:" not found"}))
    // console.log(`server levantado en el puerto ${PORT}`)
}
});

server.listen(PORT, () =>{console.log(`server levantado en el puerto ${PORT}`)} );
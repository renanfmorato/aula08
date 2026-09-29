const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let PARTIDAS =[
    {
        id: 1,
        jogo: "Arena Pixel",
        timeA: "Falcões",
        timeB: "Dragões",
        pontosA: 3,
        pontosB: 2,
        status: "finalizada"
    },
    {
        id: 2,
        jogo: "Corrida Turbo",
        timeA: "Lobos",
        timeB: "Falcões",
        pontosA: 0,
        pontosB: 0,
        status: "agendada"
    }
];

app.get("/",(req,res) =>{
    res.status(200).json({msg:"Campeonato gamer no ar"});
})

app.get("/partidas",(req,res) =>{
    res.status(200).json(PARTIDAS);
});

app.get("/partidas/:valor",(req,res)=>{
    const valor = Number(req.params.valor);
    const partida = PARTIDAS.find(p => p.id === valor);

    if(!partida){
        return res.status(404).json({msg: "Partida não encontrada"});
    }

    res.status(200).json(partida);
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando http://localhost:${PORT}`);
})
let nomesPodio = ["Rafael", "Manoel", "Daniel"];
let danielPosition = nomesPodio.indexOf("Daniel") + 1;
function positions(nomesPodio){
    let str = "Este é o pódio ";
    let danielWinner = "Daniel é o vencedor";
    if(danielPosition != 0){
        nomesPodio.splice(1, 0, "Daniel")
        nomesPodio.splice(3, 1)
        return str.concat(nomesPodio)
    }else{
        return danielWinner
    }
}
console.log(positions(nomesPodio))
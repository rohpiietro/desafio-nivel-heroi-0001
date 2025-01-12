

let nomeHeroi = ["Super Choque", "Batman", "Homem Aranha", "Pantera Negra", "Lanterna Verde", 
        "Mulher Maravilha", "Flash", "Superman"];
let xpHeroi = [800, 1500, 3000, 6500, 7500, 8500, 9999, 19000];


for(let i = 0; i < nomeHeroi.length; i++){
let nome = nomeHeroi[i];
let xp = xpHeroi[i];
let nivel;


if (xp <= 1000) {
    nivel = "Ferro";

} else if (xp <= 2000) {
    nivel = "Bronze";

} else if (xp <= 5000) {
    nivel = "Prata";

} else if (xp <= 7000) {
    nivel = "Ouro";

} else if (xp <= 8000) {
    nivel = "Platina";

} else if (xp <= 9000) {
    nivel = "Ascendente";

} else if (xp <= 10000) {
    nivel = "Imortal";

}  else {
    nivel = "Radiante";

}

console.log("O Herói de nome" +" "+ nome +" "+ "está no nível de" +" "+ nivel);

}

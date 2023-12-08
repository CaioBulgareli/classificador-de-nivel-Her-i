// desafio classificador de nivel do Herói
let nome = "Homem de Ferro "
let XP =1000
let nivel;
if (XP < 1000) {
    nivel = "Ferro";
}else if (XP >= 1001 && <= 2000) {
    nivel = "Bronze";
}else if (XP >= 2001 && <= 5000) {
    nivel = "Prata";
}else if (XP >= 6001 && <= 7000) {
    nivel = "Ouro";
}else if (XP >= 7001 && <= 8000) {
    nivel = "Platina";
}else if (XP >= 8001 && <= 9000) {
    nivel = "Ascendente";
}else if (XP >= 9001 && <= 10000) {
    nivel = "Imortal";
}else {
    nivel = "Radiante";
}
console.log(`O Herói de nome ${nome} está no nivel de ${nivel}`);
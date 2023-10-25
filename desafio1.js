const nomeDoHeroi = "Keven";
const XPDoHeroi = 5000;
let nivel = "";

if (XPDoHeroi <= 1000) {
  nivel = "Ferro";
} else if (XPDoHeroi <= 2000) {
  nivel = "Bronze";
} else if (XPDoHeroi <= 5000) {
  nivel = "Prata";
} else if (XPDoHeroi <= 7000) {
  nivel = "Ouro";
} else if (XPDoHeroi <= 8000) {
  nivel = "Platina";
} else if (XPDoHeroi <= 9000) {
  nivel = "Ascendente";
} else if (XPDoHeroi <= 10.0) {
  nivel = "Imortal";
} else if (XPDoHeroi >= 10.001) {
  nivel = "Radiante";
} else {
  nivel = "poder incalculável";
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`);

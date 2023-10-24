/*# 1️⃣ Desafio Classificador de nível de Herói*/

//--------------------Declarando as Varíaveis----------------------//
const nomeDoHeroi = "Keven";
const XPDoHeroi = 5000;
//--------------------Usando uma estrutura de decisão----------------------//

if (XPDoHeroi <= 1000) {
  console.log(
    `O Herói de nome **${nomeDoHeroi}** está no nível de **{Ferro}**`
  );
} else if (XPDoHeroi <= 2000) {
  console.log(
    `O Herói de nome **${nomeDoHeroi}** está no nível de **{Bronze}**`
  );
} else if (XPDoHeroi <= 5000) {
  console.log(
    `O Herói de nome **${nomeDoHeroi}** está no nível de **{Prata}**`
  );
} else if (XPDoHeroi <= 7000) {
  console.log(`O Herói de nome **${nomeDoHeroi}** está no nível de **{Ouro}**`);
} else if (XPDoHeroi <= 8000) {
  console.log(
    `O Herói de nome **${nomeDoHeroi}** está no nível de **{Platina}**`
  );
} else if (XPDoHeroi <= 9000) {
  console.log(
    `O Herói de nome **${nomeDoHeroi}** está no nível de **{Ascendente}**`
  );
} else if (XPDoHeroi <= 10.0) {
  console.log(
    `O Herói de nome **${nomeDoHeroi}** está no nível de **{Imortal}**`
  );
} else if (XPDoHeroi >= 10.001) {
  console.log(
    `O Herói de nome **${nomeDoHeroi}** está no nível de **{Radiante}**`
  );
} else {
  console.log("O Herói está em um nivel de poder incalculavel!");
}

//######-------------------Prática 1 -----------------#####
/* const condicionais = (bool1, bool2) => {

  if(bool1) {
    alert("Resposta \"true\"");
  }else{
    alert("Resposta \"False\"");
  }

};
const resposta = confirm("Está chovendo agora?");
condicionais(resposta); */


//######-------------------Prática 2 -----------------#####
/* const condicionais = (bool1, bool2, bool3) => {

  if (bool1 === bool2) {
    alert("Resposta 1 e 2 são \"iguais\"");
  } else if (bool2 === bool3) {
    alert("Resposta 2 e 3 são \"iguais\"");
  } else if (bool1 === bool3) {
    alert("Resposta 1 e 3 são \"iguais\"");
  } else {
    alert("Nada igual! :s")
  }
};
const resp1 = confirm("Está chovendo agora?");
const resp2 = confirm("Tem Roupas no varal?");
const resp3 = confirm("Tomar cerveja hoje?");
condicionais(resp1, resp2, resp3); */


//######-------------------Prática 3 -----------------#####
/* const verificaIdade = (idade) => {
  if (((idade >= 16) && (idade < 18)) || (idade >= 70)) {
    alert("Votação é facultativo!");
  } else if ((idade >= 18) && (idade < 70)) {
    alert("Voto obrigatório!");
  } else {
    alert("Ainda não pode votar!");
  }
};
const idadePessoa = Number(prompt("Digite sua idade:"));
verificaIdade(idadePessoa); */


//######-------------------Prática extra -----------------#####

const media = (media) => {
  if (media >= 5) {
    alert("Aprovado!!!");
  } else if ((media >= 3)) {
    alert("Recuperação!!");
  } else if (media < 3) {
    alert("Reprovado!");
  } else {
    alert("Dados Inválidos!");
  }
};

media(prompt("Digite a média:"));
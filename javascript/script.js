const verificarIdade = () => {

    let nome = document.querySelector('input[name=nome]')
    let idade = document.querySelector('input[name=idade]')

    let idadeNum = parseInt(idade.value);

    if (idade.value == 0 || idade.value === '' || nome.value === '') {
        alert('Insira uma idade válida!');
        idade.value = '';
        nome.value = '';
    } else if (idadeNum >= 18) {
        alert('Ok, você pode tirar sua CNH!');
        idade.value = '';
        nome.value = '';
    } else if (idadeNum > 4) {
        alert('Você é menor de idade, por enquanto sugiro andar de bicicleta!');
        idade.value = '';
        nome.value = '';
    } else {
        alert('É melhor ires beber o teu leitinho! :D');
        idade.value = '';
        nome.value = '';
    }

}
/* let nome = prompt('Qual o seu nome?');
let recebeIdade = prompt('Qual a sua idade?');

let idade = parseInt(recebeIdade);

console.log(nome);
console.log(typeof nome);

console.log(idade);
console.log(typeof idade);

document.getElementById('nome').innerText = nome; */
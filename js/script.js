function validacao() {

    let nome = document.getElementById("nome");
    let endereco = document.getElementById("endereco");
    let cidade = document.getElementById("cidade");
    let cpf = document.getElementById("cpf");
    let idade = document.getElementById("idade");

    if (nome.value == "") {
        
        alert("Erro: nome vazio");
        return false;
    }

    if (endereco.value == "") {
        alert("Erro: endereço vazio")
        return false;
    }
    if (cidade.value == "") {
        alert("Erro: cidade vazia")
        return false;
    }
    if (cpf.value == "") {
        alert("Erro: cpf vazio")
        return false;
    }
    if (idade.value == "") {
        alert("Erro: idade vazio")
        return false;
    }
    alert("Sucesso ")
}
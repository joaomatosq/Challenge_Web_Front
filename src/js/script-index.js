function alterarSenhaPaciente() {
    var senhaPaciente = document.getElementById("input-paciente").value;

    if (senhaPaciente === "") {
        document.getElementById("painel-paciente").innerText = "Digite um Valor!";
        return; 
    }

    var valorSenha = parseInt(senhaPaciente, 10);

    if (valorSenha > 1000) {
        alert("Digite um número menor que 1000!");
    } else {
        document.getElementById("painel-paciente").innerText = valorSenha;
    }



    //Região na qual futuramente poderá ser feito uma automatização 
    //para os funcionários colocarem a próxima senha e sala.

    var audio = new Audio("/src/assets/audio-alerta.mp3");
    audio.play();

    var senhaFuncionario = 12;
    if(valorSenha == senhaFuncionario) {
        document.body.innerHTML = `
            <div id="mensagem-centralizada">
                <h1>Compareça à sala [ ] </h1>
                <img src="./src/assets/audio-logo.svg" width="40px" height="40px">
            </div>
        `;
        document.body.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: serif;
            color: #FD000D;
        `;




    }

}

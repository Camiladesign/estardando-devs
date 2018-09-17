
        //Instanciando os pacientes da tabela
        var pacientes = document.querySelectorAll(".paciente");
        
        //Loop que percorre os pacientes da tabela e calcula o IMC
    for(var i = 0; i < pacientes.length; i = i + 1){

        //Variavel referente ao indice do paciente
        var paciente = pacientes [i]; 

        //Variaveis elementos td
        var tdPeso = paciente.querySelector('.info-peso');
        var tdAltura = paciente.querySelector('.info-altura');
        var tdImc = paciente.querySelector('.info-imc');
<<<<<<< HEAD
 
        //Variaveis dados da Tabela
        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;

        //Variaveis de validação
        var pesoEhValido = validaPeso(peso);
        var alturaEhValido = validaALtura(altura);

=======

        //Variaveis dados da Tabela
        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;
        
        //Variaveis de validação
        var pesoEhValido = validaPeso(peso);
        var alturaEhValido = validaALtura(altura);
>>>>>>> b72f246fe34a282b91b6f4437838f613f8ef1d30


        //Validação altura e ṕeso
        if(!pesoEhValido) {
            pesoEhValido = false;
            tdImc. textContent = "Peso Inválido";
            paciente.classList.add('paciente-invalido');
        }

        if(!alturaEhValido) {
            alturaEhValido = false;
            tdImc.textContent = "Altura Inválida";
            paciente.classList.add('paciente-invalido');
        }
        
        //Calculo IMC
        if (pesoEhValido && alturaEhValido) {
            tdImc.textContent = calculaImc(peso, altura);
        }
    }

function validaPeso(peso) {
    if (peso <= 200 && peso >= 0) {
        return true;
    } else {
        return false;
    }
}

function validaALtura(altura) {
    if (altura <= 3.00 && altura >= 0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
<<<<<<< HEAD
=======
    
>>>>>>> b72f246fe34a282b91b6f4437838f613f8ef1d30
        var imc = 0;
        imc = peso / (altura * altura);
        return imc.toFixed(2);

    }
  
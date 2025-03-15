function alterarTextoCor(){
    let elemento = document.getElementById('texto')

    //modificar o texto do elemento
    elemento.textContent = 'Nunca coma a geleia de pimenta no click sushi';

    //altar a cor
    elemento.style.color = 'red';
}

function adicionarElemento(){
    let novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'mama mia';
    //adicionar o paragrafo no elemento de id conteiner
    document.getElementById('container').appendChild(novoParagrafo);
}

function removerElemento(){
    let elemntoContainer = document.getElementById('container');
    if(elemntoContainer.lastChild){
        elemntoContainer.removeChild(elemntoContainer.lastChild);
    }

}

function adicionarItem(){
    let input = document.getElementById('itemInput');
    let texto = input.value.trim();

    if(texto !== ''){
        let li = document.createElement('li');
        li.textContent = texto;
        //adicionar o evento de clique
        li.addEventListener('click', function(event){
            // remove o item quando clica nele
            event.target.remove();
        })

        document.getElementById('lista').appendChild(li);
        input.value="";
    }

}



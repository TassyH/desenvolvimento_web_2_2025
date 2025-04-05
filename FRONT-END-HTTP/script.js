document.addEventListener('DOMContentLoaded', ()=>{
    carregarAulas();

    document.getElementById('form-aula').addEventListener('submit', async(event) =>{
    adicionarAula();
    event.preventDefault(); 
})
});

async function carregarAulas() {
    try {
        const response = await fetch("http://localhost:3000/aulas");
        const aulas = await response.json();
        console.log(aulas);
        const container = document.getElementById("aulas-container");
        container.innerHTML = aulas.map(
            (aulas)=>`<div class = "card">
                      <h2>${aulas.id}</h2>
                      <h3>${aulas.title}</h3>
                      <p>${aulas.content}</p>
                      </div>`
        ).join('');

    } catch (error) {
        console.log("erro ao carregar as aulas parca", error)
    }
}

async function adicionarAula(){
    // pegar os valores digitados pelo usuário
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    //criar um objeto com os dados
    const dadosAula = {title, content};
    console.log(dadosAula);

    try {
        // faz a request do tipo post para a api
        const resposta = await fetch("http://localhost:3000/aulas", {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(dadosAula)
        });

        const resultado = await resposta.json();
        console.log(resultado);

        if(resposta.ok){
            document.getElementById("form-aula").reset(); 
            carregarAulas();// chama a lista de aulas
        }else{
            alert("deu erro bro")
        }

    } catch (error) {
        console.log("Erro", error);
    }

}
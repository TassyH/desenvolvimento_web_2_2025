//aguarda o carregamento completo da DOM no navegador

document.addEventListener('DOMContentLoaded', ()=>{
    //seleciona o formulario da pagina

    const form = document.querySelector("form");
    //cria evento qiue captura o envio do formiulrio
    form.addEventListener("submit", async(event)=>{
        event.preventDefault();

        //coletar os dados informados no formulario
        const formDados = {
            text: document.getElementById('text').value,
            email: document.getElementById('email').value,
        }
        //exibe no console o json
        console.log(JSON.stringify(formDados));

        try {
            await fetch("htpp://www.minhaapi.com/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formDados)
            })
        } catch (error) {
            
        }

    })
});
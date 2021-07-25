const form = document.getElementById('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let Endereço = document.getElementById('Endereço').value;
    let cep = document.getElementById('Cep').value;
    let Data = document.getElementById('Data').value
    let Telefone = document.getElementById('Telefone').value;
    let data = {
        nome,
        email,
        Endereço,
        cep,
        Data,
        Telefone

    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead',convertData);

    let content = document.getElementById('content')

    let carregando = '<p>carregando ...</p>;'
    let Pronto = '<p>Pronto</p>;'

    content.innerHTML = carregando

    setTimeout(()=>{
        content.innerHTML = Pronto;
    },1000)


})

const listarUsuarios = () => {
    fetch('/api/usuarios/')
.then(res => res.json())
.then(usuarios => {
    const lista = document.getElementById('lista-usuarios');
    lista.innerHTML = '';
    produtos.forEach(p => {
const li = document.createElement('li');
li.textContent = `${p.nome} -  ${p.email} - Estoque: ${p.number}`;
lista.appendChild(li);
    });
});
};

document.getElementById('form-produto').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    fetch('/api/produtos/', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ nome, email, number })
    })
    .then(res => res.json())
    .then(() => {
listarProdutos();
this.reset();
    });
});

listarUsuarios();
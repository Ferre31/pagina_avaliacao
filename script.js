// scripts.js
document.getElementById('avaliacao-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var nota = document.querySelector('input[name="nota"]:checked').value;
    var comentario = document.getElementById('comentario').value;

    var formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('nota', nota);
    formData.append('comentario', comentario);

    fetch('processa_avaliacao.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('mensagem').innerHTML = 'Avaliação enviada com sucesso!';
            document.getElementById('avaliacao-form').reset();
        } else {
            document.getElementById('mensagem').innerHTML = 'Ocorreu um erro ao enviar a avaliação.';
        }
    })
    .catch(error => {
        document.getElementById('mensagem').innerHTML = 'Ocorreu um erro ao enviar a avaliação.';
        console.error('Error:', error);
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const botao = document.getElementById('btn-whatsapp');

    botao.addEventListener('click', () => {

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const veiculo = document.getElementById('veiculo').value;
        const mensagem = document.getElementById('mensagem').value;

        const texto = `Olá! Gostaria de entrar em contato.

 Nome: ${nome}
 Telefone: ${telefone}
 E-mail: ${email}
 Veículo: ${veiculo}

📝 Mensagem:
${mensagem}`;

        const textoCodificado = encodeURIComponent(texto);

        const numero = '5511999999999';

        window.open(
            `https://wa.me/${numero}?text=${textoCodificado}`,
            '_blank'
        );

    });

});
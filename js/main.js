//alert('Olá.')
console.log(document);

//var nav = document.querySelector('nav')
var formulario = document.querySelector('form')
var paragrafo = document.createElement('p')
paragrafo.style.textAlign = 'centro'
paragrafo.style.fontSize = '18px'

//código emailjs

formulario.addEventListener('submit', function(evento){
   event.preventDefault()
   var dados = new FormData(formulario)
   var nome = dados.get('nome')
   var email = dados.get('email')
   var cidade = dados.get('cidade')
   var motivo = dados.get('motivo')
   var mensagem = dados.get('mensagem')

   console.log(nome, email, cidade, motivo, mensagem);
   
  var templateParams = {
   name: nome,
   email: email,
   cidade: cidade,
   motivo: motivo,
   mensagem: mensagem,
};

emailjs.send('service_5pm6nlm', 'template_0swllw5', templateParams)
   .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });


   paragrafo.innerHTML = alert(`
   ${nome}, sua mensagem foi registrada com sucesso!
   `)
   document.getElementById("meuFormulario").reset();
});
// Esconde o ícone de imagem quebrada enquanto a foto ainda não foi adicionada
document.querySelectorAll('img').forEach(function(img){
  function falhou(){ img.classList.add('sem-foto'); }
  img.addEventListener('error', falhou);
  if(img.complete && img.naturalWidth === 0) falhou();
});

// Editar textos direto na página
var btn = document.getElementById('edit');
btn.onclick = function(){
  var on = !document.body.classList.contains('editing');
  document.body.classList.toggle('editing', on);
  document.querySelectorAll('[contenteditable]').forEach(function(n){ n.setAttribute('contenteditable', on); });
  btn.textContent = on ? 'Concluir edição' : 'Editar textos';
};

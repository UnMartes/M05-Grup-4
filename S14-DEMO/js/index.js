// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  
  const response = await fetch(`./lang/${lang}.json`);
  const data = await response.json();

  
  document
  console.log("hola");
  console.log(document);
  console.log(document.getElementById('t_first_name'));
  document.getElementById('t_first_name').innerHTML = 'testing';
  



}
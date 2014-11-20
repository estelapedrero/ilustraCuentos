var equis = document.getElementsByClassName('delete-button');
var toolsbox = document.getElementsByClassName('tools-box');
var dibujo = document.getElementsByClassName('tools');


for (i=0; i<equis.length; i++){
	equis[i].addEventListener('click',deleteObj.bind(this,i));
};

function deleteObj(i){
	equis[i].parentNode.setAttribute('style', 'position:relative;');
};


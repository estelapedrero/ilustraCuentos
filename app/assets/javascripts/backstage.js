var stage = document.getElementsByClassName('main-stage');
var stages = document.getElementsByClassName('stages');

for (i=0; i<stages.length; i++){

stages[i].onclick = changeBackStage;

};

function changeBackStage(e){
	stage[0].style.backgroundImage = "url("+ e.target.src+ ")";
}

function update () {
  alert('Кристина, ты меня игнорируешь??? В чём причина?');
};

setTimeout(update, 5000);

var atletTitle = document.querySelector('.atlet__title');

var stepLeft = 30;
var stepRight = 170;

function animeLogoPlus() {
  if(stepLeft >= 30 && stepLeft <= 170){
    stepLeft += 1;
    atletTitle.style.left = stepLeft + 'px';
  }else if(stepRight <= 170 && stepRight >= 30){
    stepRight -= 1;
    atletTitle.style.left = stepRight + 'px';
  }else {
  stepLeft = 30;
  stepRight = 170;
  };
};
setInterval(animeLogoPlus, 10);
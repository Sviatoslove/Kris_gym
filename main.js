// var modal = document.getElementById('wrapper-modal');
// var overlay = document.getElementById('overlay');
// var btnClose = document.getElementById('btn-close');

// function closeModel() {
//   modal.classList.remove('active');
// };

// overlay.addEventListener('click', closeModel);
// // btnClose.addEventListener('click', closeModel);

// function update () {
//   // alert('Кристина, ты меня игнорируешь??? В чём причина?');
//   modal.classList.add('active');
// };

// setTimeout(update, 100);

var atletTitle = document.querySelector('.atlet__title');

var stepLeft = -60;
var stepRight = 80;

function animeLogoPlus(a, b, ms) {
  setInterval(() => {
    if(stepLeft >= a && stepLeft <= b) {
      stepLeft += 1;
      atletTitle.style.left = stepLeft + 'px';
    }else if(stepRight <= b && stepRight >= a) {
      stepRight -= 1;
      atletTitle.style.left = stepRight + 'px';
    }else {
    stepLeft = a;
    stepRight = b;
    };
  }, ms);
};

animeLogoPlus(stepLeft, stepRight, 10);
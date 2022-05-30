
let screen = document.getElementById('screen');

function dispaly(num){

    screen.value += num;
}

function result(){

      screen.value = eval(screen.value);
      console.log(screen.value);
}
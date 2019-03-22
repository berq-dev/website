let extensions = ['.se', '.io', '.dev'];

let elem = document.getElementById('title-text');

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
};

function remove() {
  elem.innerHTML = elem.innerHTML.substr(0, elem.innerHTML.length - 1);
  if(elem.innerHTML.length > 0) {
    setTimeout(() => remove(), 125 + Math.floor(Math.random() * 150));
  } else {
    setTimeout(() => write(), 500);
  }
}

function write() {
  let ex = extensions.random().split('');
  (function add() {
    elem.innerHTML += ex.shift();
    if(ex.length > 0){
      setTimeout(() => add(), 400 + Math.floor(Math.random() * 150));
    }else{
      setTimeout(() => remove(), 5000);
    }
  })();
}

setTimeout(() => remove(), 1500);


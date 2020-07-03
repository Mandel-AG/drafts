const divCan = document.querySelector('.can');
const divCanEl = document.querySelector('.canElement');
const divCanEls = document.querySelectorAll('.canElement');
const divCanElTxt = document.querySelectorAll('.canElementText');
const divTextScroll = document.querySelector('.youCanScroll');

let initialDiv = divCanElTxt[0].children[0];
let divToAdd = initialDiv.cloneNode(true);



divCan.addEventListener("scroll", function(e){
  divCanEl.scrollLeft = divCan.scrollLeft;

  divCanEls.forEach(element => {
      element.scrollLeft = divCanEl.scrollLeft;
  });


  if(divCan.scrollLeft >= 100){
    divTextScroll.classList.add("disapear");
  }
  else{
    divTextScroll.classList.remove("disapear");
  }
});



Array.from(divCanElTxt).map(el => {

  for (i =0; i<20; i++){
  let new_1 = el.children[0].cloneNode(true);
  let new_2 = el.children[1].cloneNode(true);

    el.appendChild(new_1);
    el.appendChild(new_2);
  }
})






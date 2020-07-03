const divCan = document.querySelector('.can');
const divCanEl = document.querySelector('.canElement');
const divCanEls = document.querySelectorAll('.canElement');
const divCanElTxt = document.querySelectorAll('.canElementText');
let initialDiv = divCanElTxt[0].children[0];
let divToAdd = initialDiv.cloneNode(true);
console.log('element a ajouter',divCanElTxt[0].children[0]);
console.log(divToAdd);
// console.log(divToAdd.children[0].textContent);
// const oui = divToAdd.children[0].textContent;



divCan.addEventListener("scroll", function(e){
  divCanEl.scrollLeft = divCan.scrollLeft;

  divCanEls.forEach(element => {
      element.scrollLeft = divCanEl.scrollLeft;
  });
});



// console.log(Array.from(divCanEls));

// const toAdd = Array.from(divCanEls).map(el => {
//   let oui = el.textContent;
  
//   el.innerHTML += `<div class="canElementText">${oui}</div>`;  
// });


// for( let i=0; i<divCanElTxt.length; i++){
//   let initialDiv = divCanElTxt[i].children[0];
//   let divToAdd = initialDiv.cloneNode(true);
//   const oui = divToAdd.children[i].textContent;
//   console.log(oui)


//   divCanElTxt.forEach(element =>{

//     // element.appendChild(divToAdd)
//     element.innerHTML += `<div>${oui}</div>`;
//     console.log(element);
//   })

// }

// Array.from(divCanElTxt).forEach(element =>{

// // console.log(element.textContent);

//     // element.appendChild(divToAdd);
//     // element.innerHTML += `<div>${divToAdd}</div>`;
//       element.appendChild(divToAdd);
//       console.log(element);
// })


Array.from(divCanElTxt).map(el => {

  for (i =0; i<20; i++){
  let new_1 = el.children[0].cloneNode(true);
  let new_2 = el.children[1].cloneNode(true);

    el.appendChild(new_1);
    el.appendChild(new_2);
    console.log("oui")
  }
  console.log(el)
})


console.log(Array.from(divCanElTxt))
console.log(divToAdd)






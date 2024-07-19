console.log(window.innerWidth);

let KyloImg = document.getElementById('KyloImg')
function updateImg(mediaQuery){
  let a = window.innerWidth
  if(a <= 623){
    KyloImg.setAttribute('src' , '../imgs/darthVaderChibi.png')
  } else{
    KyloImg.setAttribute('src' , '../imgs/KyloRen.png')
  }
}
const mediaQuery = window.matchMedia('(max-width: 623px)');
mediaQuery.addEventListener('change' , updateImg)
updateImg(mediaQuery)
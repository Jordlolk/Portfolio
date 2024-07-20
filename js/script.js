
let KyloImg = document.getElementById('KyloImg')
function updateImg(mediaQuery){
  let a = window.innerWidth
  if(a <= 623){
    KyloImg.setAttribute('src' , 'imgs/kyloRenChibi.png')
  } else{
    KyloImg.setAttribute('src' , 'imgs/kyloRen.png')
  }
}
const mediaQuery = window.matchMedia('(max-width: 623px)');
mediaQuery.addEventListener('change' , updateImg)
updateImg(mediaQuery)

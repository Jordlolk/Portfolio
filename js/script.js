
let KyloImg = document.getElementById('KyloImg')
function updateImg(){
  let windoWidth = window.innerWidth
  
  if(windoWidth <= 623){ 
    KyloImg.setAttribute('src' , 'imgs/kyloRenChibi.png')

  } else{
    KyloImg.setAttribute('src' , 'imgs/kyloRen.png')

  }
}
const mediaQuery = window.matchMedia('(max-width: 623px)');
mediaQuery.addEventListener('change' , updateImg)
updateImg()

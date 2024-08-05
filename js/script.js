let aboutMeButton = document.getElementsByClassName("description")[0]
let KyloImg = document.getElementById('KyloImg')
let imgsProjects = document.querySelectorAll("[data-imgsProject='imgs']")

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

KyloImg.addEventListener('mouseenter', () => {
  KyloImg.style.animation = "fliping 2s forwards"
  setTimeout(() => {  
    KyloImg.style.animation = "none"
  }, 3200)
})

document.addEventListener("DOMContentLoaded" , () => {
  let r2d2Audio = document.getElementById('r2d2Sound')
  let soundImg = document.getElementById('soundImg')
  soundImg.addEventListener('click', () => {
     r2d2Audio.play()
  })
})

console.log(imgsProjects);
let links = [
"https://league-of-filter.vercel.app/",
"https://jordlolk.github.io/Music-player/",
""]
imgsProjects.forEach((imgs) => {
  imgs.addEventListener("click", () => {
      

  })
})

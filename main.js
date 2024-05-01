const resetBT=document.createElement('button')
resetBT.style.width='150px'
resetBT.style.margin='10px'
resetBT.innerText='เกมใหม่'
resetBT.addEventListener('click',function(){
    window.location.href='index.html'
})

const againBT=document.createElement('button')
againBT.style.width='150px'
againBT.style.margin='10px'
againBT.innerText='เล่นอีกครั้ง'
againBT.addEventListener('click',function(){
    window.location.href='play.html'
})

document.getElementById('reset').appendChild(resetBT)
document.getElementById('reset').appendChild(againBT)
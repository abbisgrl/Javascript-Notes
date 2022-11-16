
var modalContent = document.getElementsByClassName('hidden')[0];
var closeBtn = document.getElementById('closeBtn');

for(let i = 0;i<3;i++){
    document.getElementsByClassName("modal")[i].addEventListener('click',function(){
        modalContent.classList.add('show');
    })
}

closeBtn.addEventListener('click',function(){
    modalContent.setAttribute('class','hidden');
})

document.addEventListener('keydown',function(e){
    if(e.key=='Escape'){
        // console.log(e);
        modalContent.classList.remove('show');
    }
    // console.log(e);
})

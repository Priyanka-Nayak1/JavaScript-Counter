const buttons=document.querySelectorAll('.btn');
let count = 0;

buttons.forEach(function(button) {
    button.addEventListener('click',function(){
        if(button.classList.contains('low')){
            count--;
        }
        else if(button.classList.contains('add')){
            count++;
        }
        const number=document.querySelector('.no');
        number.textContent=count;

        if(count<0){
            number.style.color='red';
        }
        else if(count>0){
            number.style.color='green';
        }
        else{
            number.style.color='black';
        }

    })
});

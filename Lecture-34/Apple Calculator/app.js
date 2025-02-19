
let inputEle = document.querySelector('input');
let btns = document.querySelectorAll('button');
for(let button of btns){
    button.addEventListener('click', function(event){
        let btnText = event.target.innerText;
        if(btnText === 'AC'){
            inputEle.value = "";
        }
        else if(btnText === '='){
            
            try{ //sahi wala kam
                inputEle.value = eval(inputEle.value);
            }
            catch{ // error wala kam
                inputEle.value = "invalid";
            }

        }
        else{
            inputEle.value += btnText;
        }
    })
}












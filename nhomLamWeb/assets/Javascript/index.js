let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");
let silderItem = document.querySelectorAll(".slider__item");
let silderBTN=document.querySelectorAll(".slider__list-item")
function checkSliderNext(){
    let _index ;
    silderItem.forEach((item,index)=>
    {
        if(item.classList.contains("enabled")){
            item.classList.remove('enabled');
            silderBTN[index].classList.remove('active')
            _index=index;
        }
    })
    if( _index<(silderItem.length-1)){
        silderItem[_index+1].classList.add('enabled')
        silderBTN[_index+1].classList.add('active')
    }
    else{
        silderItem[0].classList.add('enabled')
        silderBTN[0].classList.add('active')
    }
}
function checkSliderPrev(){
    let _index ;
    silderItem.forEach((item,index)=>
    {
        if(item.classList.contains("enabled")){
            item.classList.remove('enabled');
            silderBTN[index].classList.remove('active')
            _index=index;
        }
    })
    if( _index>0){
        silderItem[_index-1].classList.add('enabled')
        silderBTN[_index-1].classList.add('active')
    }
    else{
        silderItem[silderItem.length-1].classList.add('enabled')
        silderBTN[silderItem.length-1].classList.add('active')
    }
}
btnNext.onclick=checkSliderNext
btnPrev.onclick=checkSliderPrev

silderBTN.forEach((item,_index)=>{
    item.onclick=function (){
        silderBTN.forEach((item,index)=>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
                silderItem[index].classList.remove("enabled")
            }
        })
        item.classList.add("active");
        silderItem[_index].classList.add("enabled");
    }
})
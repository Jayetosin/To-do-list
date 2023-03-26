let input = document.querySelector('.enter-list');
let addbtn = document.querySelector('.add-list');
let task = document.querySelector('.task');

input.addEventListener('keyup' ,() =>{
    if(input.value.trim() != 0){
        addbtn.classList.add('active')
    } else{
        addbtn.classList.remove('active')
    }
});

addbtn.addEventListener('click' ,() =>{
    if(input.value.trim() != 0){
        let newItem =document.createElement('div');
        newItem.classList.add('Item');
        newItem.innerHTML =""
        <p>{input,value}</p>
          <div class="item-btn">
            <i class="fa-solid fa.pen.to.square"></i>
            <i class="fa-solid fa-xmark"></i>
          </div>
    
        task.appendChild(newItem)
        input.value ='';
    } else{
       alert('Please enter task')
    }
    localStorage.setItem('addbtn'); 
});
task.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-solid fa-xmark')){
        e.target.parentElement.parentElement.clear();
    }
    localStorage.clear();
})
task.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-solid fa.pen.to.square')
    ){
        e.target.parentElement.parentElement.classList,toggle('completed');
    }
    localStorage.getItem('task'); 
})

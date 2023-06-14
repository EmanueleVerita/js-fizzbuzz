

const div = document.getElementById('my-div')

const ul = document.querySelector('.number-list')

for(let i = 1 ; i <= 100 ; i++){


    console.log('i' , i , typeof i)
    
    const newLi = document.createElement('li');
    newLi.innerHTML = i;
    ul.append(newLi);


    

}
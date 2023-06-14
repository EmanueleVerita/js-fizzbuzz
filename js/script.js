


const ul = document.querySelector('.number-list')

let text;

for(let i = 1 ; i <= 100 ; i++){


   // console.log('i' , i , typeof i)
   if((i % 3 == 0) && (i % 5 == 0)){

    console.log('fizzbuzz');
    text = 'FizzBuzz';

}else 
    if(i % 3 == 0){

        console.log('fizz');
        text = 'Fizz';

    }

    else if(i % 5 == 0){

        console.log('buzz');
        text = 'Buzz';

    }
    else{
        console.log(i)
        text = i;

    }

    const newLi = document.createElement('li');
    newLi.innerHTML = text;
    ul.append(newLi);

}
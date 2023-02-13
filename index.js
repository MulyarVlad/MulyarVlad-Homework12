const myArray = prompt('Введите значения через запятую'); 
const newArray = []

if ((myArray !== null && myArray.trim() !== '')) { 
    
    const result = myArray.split(',') 

    for (let i = 0; i < result.length; i++ ) { 
       
        if (!isNaN(Number(result[i]))) {
            newArray.push(result[i])    
        }

    } newArray.sort(( (a, b) =>  a - b));
      alert(newArray)
      newArray.splice(2, 4)
      alert(newArray)
} else {
    alert('Вы не ввели числа')
}
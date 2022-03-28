//Given an array of positive integers representing the values of coins in your possession,
// write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create. 
//The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).


const nonConstructible=(coins)=>
{       
    coins.sort((a,b) => a - b);
    let minimumValue=0;
    coins.forEach(coin => {
        if (coin > minimumValue + 1)
        {
            return minimumValue + 1;
        }
        minimumValue= minimumValue + coin
    });
    return minimumValue + 1;
   
}
const coins =[5, 7, 1, 1, 2, 3, 22]
console.log(nonConstructible(coins));


//Write a function that takes in a non-empty 
//array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
const sortedSquared =(array)=>
{
    return array.map(element=>element**2).sort((a,b)=>a-b)
}
const array=[-2, -1]
console.log(sortedSquared(array));
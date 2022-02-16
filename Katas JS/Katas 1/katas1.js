function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/
   let meuRetorno = []
   for (let counter = 1; counter <= 20; counter++){
     meuRetorno.push(counter)
   }

   return meuRetorno
    
}

//call function oneThroughTwenty
console.log(oneThroughTwenty())

function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */
   let meuRetorno = []
   for (let counter = 1; counter <= 20; counter++){
     if (counter % 2 === 0){
       meuRetorno.push(counter)
      }
   }

   return meuRetorno
  
}

//call function evensToTwenty
console.log(evensToTwenty())

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []
  for (let counter = 1; counter <= 20; counter++){
    if (counter % 2 != 0){
      meuRetorno.push(counter)
     }
  }

  return meuRetorno
   
}

//call function oddsToTwenty
console.log(oddsToTwenty())

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []
  for (let counter = 1; counter <= 100; counter++){
    if (counter % 5 === 0){
      meuRetorno.push(counter)
     }
  }

  return meuRetorno

}

//call function multiplesOfFive
console.log(multiplesOfFive())

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []
  for (let counter = 1; counter <= 100; counter++){
    if (Number.isInteger(Math.sqrt(counter))){
    meuRetorno.push(counter)
    }
  }
  return meuRetorno
    
}

//call function squareNumbers
console.log(squareNumbers())

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []
  for (let counter = 20; counter >= 1; counter--){
    meuRetorno.push(counter)
  }
  return meuRetorno
}

//call function countingBackwards
console.log(countingBackwards())

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []
  for (let counter = 20; counter >= 1; counter--){
    if (counter % 2 == 0){
      meuRetorno.push(counter)
    }
  }
  return meuRetorno
}

//call function evenNumbersBackwards
console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []
  for (let counter = 20; counter >= 1; counter--){
    if (counter % 2 != 0){
      meuRetorno.push(counter)
    }
  }
  return meuRetorno
}

//call function oddNumbersBackwards
console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []
  for (let counter = 100; counter >= 1; counter--){
    if (counter % 5 === 0){
      meuRetorno.push(counter)
    }
  }
  return meuRetorno
}

//call function multiplesOfFiveBackwards
console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []
  for (let counter = 100; counter >= 1; counter--){
    if (Number.isInteger(Math.sqrt(counter))){
      meuRetorno.push(counter)
    }
  }
  return meuRetorno
}

//call function squareNumbersBackwards
console.log(squareNumbersBackwards())

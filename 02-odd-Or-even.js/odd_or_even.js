// odd or even reporter

// write a for loop to iterate from 0 to 20

  // check if the current is even or odd

  // report the result to the screen

  for (x= 0; x <= 20;  x++){
    if ( x % 2 === 0){
      console.log(`the number ${x} is even`)
    } else {  
     console.log(`the number ${x} is odd`)
    } 
  }

  var x = 0
  while (x <= 20){
    if ( x % 2 === 0){
      console.log(`the number ${x} is even`)
    } else {  
     console.log(`the number ${x} is odd`)
    } 
    x++;
  }

  x = 0
  do {
    if ( x % 2 === 0){
      console.log(`the number ${x} is even`)
    } else {  
     console.log(`the number ${x} is odd`)
    } 
    x++;
  } while (x<= 20);
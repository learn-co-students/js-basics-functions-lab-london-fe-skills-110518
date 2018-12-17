// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue <= 42) {
  return(42 - someValue) 
  } else if (someValue > 42) {
  return(someValue - 42)
  }
}


function distanceFromHqInFeet(someValue) {
  const distance = distanceFromHqInBlocks(someValue);
  return(distance * 264);
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  if (startingBlock < endingBlock) {
    return (endingBlock - startingBlock) * 264 
  } else if (endingBlock < startingBlock) {
    return (startingBlock - endingBlock) * 264
  }
}


function calculatesFarePrice(start, destination){
const feet = distanceTravelledInFeet(start, destination)
  if (feet <= 400) {
    return 0
  } else if (feet > 2500) {
    return ('cannot travel that far') 
  } else if(feet >2000 & feet < 2500){
   return 25 

  } else if(feet > 400 ) {
   return ((feet- 400)*0.02) 
  } 
}



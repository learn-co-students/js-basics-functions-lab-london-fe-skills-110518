// Code your solution in this file!

function distanceFromHqInBlocks (startblock) {
  const headquarters = 42
  const distancetravelled = startblock - headquarters
  return Math.abs(distancetravelled)
  
}

function distanceFromHqInFeet(startblock) {
  const feettravelled = distanceFromHqInBlocks (startblock)* 264;
  return feettravelled
}

function distanceTravelledInFeet (startblock,endblock) {
  const travelledblocks = Math.abs(startblock - endblock)
  const travelledfeet = travelledblocks * 264;
  return travelledfeet
}

function calculatesFarePrice (startblock, endblock) {
  let travelledfeet = distanceTravelledInFeet(startblock, endblock);
  let fareprice
  const message = 'cannot travel that far'
  if (travelledfeet <=400) {fareprice = 0; return fareprice}
  if (travelledfeet >=400 && travelledfeet<= 2000) {
  fareprice = (travelledfeet - 400)*0.02; return fareprice}
  else if (travelledfeet >=2000 && travelledfeet<=2500){ fareprice = 25; 
  return fareprice}

  else if (travelledfeet >=2500) 
  return message;
  
}

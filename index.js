// Code your solution in this file!

function distanceFromHqInBlocks(dist) {
  return Math.abs(dist - 42);
}

function distanceFromHqInFeet(dist) {
  return (distanceFromHqInBlocks(dist) * 264);
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = Math.abs(start - destination) * 264;
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance >= 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
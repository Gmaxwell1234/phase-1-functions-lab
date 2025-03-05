function distanceFromHqInBlocks(street){
    const hq = 42;
    return Math.abs(street-hq);
}
function distanceFromHqInFeet(location){
    const distance = 42;
    const feetPerUnit = 264;
    return Math.abs (location- distance ) * feetPerUnit;
}
function distanceTravelledInFeet(start, destination){
    const feetPerBlock= 264;
    return Math.abs (destination - start) * feetPerBlock;

}
function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start) * feetPerBlock;
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // Charge 2 cents per extra foot
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances over 2000 feet
    } else {
      return "cannot travel that far"; // Over 2500 feet is not allowed
    }
  }
  
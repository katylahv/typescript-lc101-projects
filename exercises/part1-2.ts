// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Add the 5 variables here
let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code part 2 here:

function getDaysToMars(kilometersAway: number): number {
  let milesAway: number = kilometersAway * milesPerKilometer;
  let hours: number = milesAway / speedMph;
  return hours / 24;
}


// Code the output statement here (use a template literal):
console.log(`${spacecraftName} will reach Mars in ${getDaysToLocation(kilometersToMars)} days`);

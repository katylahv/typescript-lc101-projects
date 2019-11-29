// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Add the 5 variables here
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code part 2 here:
function getDaysToLocation(kilometersAway) {
    var milesToMars = kilometersAway * milesPerKilometer;
    var hoursToMars = milesToMars / speedMph;
    return hoursToMars / 24;
}
// Code the output statement here (use a template literal):
console.log(spacecraftName + " will reach Mars in " + getDaysToLocation(kilometersToMars) + " days");

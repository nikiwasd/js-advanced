function timeToWalk(steps, meters, speed) {
    let length = steps * meters;
    let km = length / 1000;
    let timeInSeconds = km / speed;
    let studentBreak = Math.floor((length / 500)); 

    let minutes = timeInSeconds * 60 + studentBreak;
    let hours = minutes / 60;
    console.log(`${hours.toFixed(1)} minutes:${minutes} seconds:${timeInSeconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
let lengthMeters = 60 * 0.3048;
let widthMeters = 40 * 0.3048;
let areaOnePlotMeters = lengthMeters * widthMeters;
let totalAreaMeters = areaOnePlotMeters * 25;
let totalAreaAcres = totalAreaMeters * 0.000247105;

console.log(`Total area of 25 plots in acres: ${totalAreaAcres.toFixed(5)} acres`);

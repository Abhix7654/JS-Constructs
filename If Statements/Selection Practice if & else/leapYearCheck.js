let year = parseInt(process.argv[2]);

if (year < 1000 || year > 9999) {
    console.log("Please enter a valid 4-digit year.");
} else if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a Leap Year");
        } else {
            console.log(year + " is NOT a Leap Year");
        }
    } else {
        console.log(year + " is a Leap Year");
    }
} else {
    console.log(year + " is NOT a Leap Year");
}

let day = parseInt(process.argv[2]);   
let month = parseInt(process.argv[3]);

if (month < 3 || month > 6) {
    console.log("False");
} else if (month === 3 && day < 20) {
    console.log("False");
} else if (month === 6 && day > 20) {
    console.log("False");
} else {
    console.log("True");
}

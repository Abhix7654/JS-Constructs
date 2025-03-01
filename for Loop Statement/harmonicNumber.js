let n = parseInt(process.argv[2]);
let harmonic = 0;

if (isNaN(n) || n <= 0) {
    console.log("Please enter a positive integer.");
} else {
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    console.log(`Harmonic Number H(${n}) = ${harmonic.toFixed(6)}`);
}

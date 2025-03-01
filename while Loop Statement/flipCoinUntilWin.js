let headsCount = 0, tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";
    flip === "Heads" ? headsCount++ : tailsCount++;
    console.log(`${flip} (H:${headsCount} | T:${tailsCount})`);
}

console.log(`${headsCount === 11 ? "Heads" : "Tails"} wins 11 times!`);

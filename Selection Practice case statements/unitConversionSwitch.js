let conversionType = parseInt(process.argv[2]); 
let value = parseFloat(process.argv[3]); 

switch (conversionType) {
    case 1: 
        console.log(`${value} feet = ${value * 12} inches`);
        break;
    case 2: 
        console.log(`${value} feet = ${value * 0.3048} meters`);
        break;
    case 3:
        console.log(`${value} inches = ${value / 12} feet`);
        break;
    case 4: 
        console.log(`${value} meters = ${value / 0.3048} feet`);
        break;
    default:
        console.log("Invalid choice! Enter:\n1 - Feet to Inches\n2 - Feet to Meters\n3 - Inches to Feet\n4 - Meters to Feet");
}

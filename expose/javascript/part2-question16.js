statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const property in statistics) {
    const num = statistics[property];
    if (property.startsWith('r') || num % 2 !== 0) {
        console.log(num);
    }
}
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Water boiling failed!");
            } else {
                console.log("Water boiled");
                resolve();
            }
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee brewed");
            resolve();
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee poured into cup");
            resolve();
        }, 1000);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.log("Error:", error));
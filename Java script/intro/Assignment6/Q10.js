function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(stepName + " failed");
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");

        await deliveryStep("Order", "Step 1: Order taken");
        await deliveryStep("Preparation", "Step 2: Food prepared");
        await deliveryStep("Packing", "Step 3: Package ready");
        await deliveryStep("Dispatch", "Step 4: Out for delivery");
        await deliveryStep("Delivery", "Delivery completed!");

    } catch (error) {
        console.log("Pipeline failed!");
        console.log("Reason:", error);
    }
}

runPipeline();


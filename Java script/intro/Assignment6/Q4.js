function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server A failed");
            } else {
                resolve("Server A completed");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server B failed");
            } else {
                resolve("Server B completed");
            }
        }, 3000);
    });
}

const requestA = serverA();
const requestB = serverB();

Promise.all([requestA, requestB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment error:", error);
    });

Promise.race([requestA, requestB])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Fastest response failed:", error);
    });
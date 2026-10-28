function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Profile failed");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Posts failed");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.3) {
            setTimeout(() => reject("Messages failed"), 1000);
        } else {
            setTimeout(() => resolve("Messages Loaded"), 1000);
        }
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result, index) => {
        const modules = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(modules[index] + ":", result.value);
        } else {
            console.log(modules[index] + ":", result.reason);
        }
    });

    const endTime = Date.now();

    console.log("Total time:", (endTime - startTime) / 1000, "seconds");
}

loadDashboard();
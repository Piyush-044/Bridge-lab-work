"use strict";

let user = {
    name: "Piyush",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

user.showName = function() {
    console.log(this.name);
};

user.showName();
"use strict";

document.body.innerHTML = "<h2>Custom Form Builder</h2><div id='formArea'></div>";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let form = "<form id='myForm'>";

        for (let i = 0; i < this.fields.length; i++) {
            form += "<label>" + this.fields[i].label + "</label><br>";
            form += "<input type='" + this.fields[i].type +
                "' id='field" + i + "'><br><br>";
        }

        form += "<button type='submit'>Submit</button></form>";

        document.getElementById("formArea").innerHTML = form;

        document.getElementById("myForm").addEventListener("submit", (event) => {
            event.preventDefault();

            let data = this.getFormData();
            console.log(data);
        });
    }

    getFormData() {
        let data = {};

        for (let i = 0; i < this.fields.length; i++) {
            data[this.fields[i].label] =
                document.getElementById("field" + i).value;
        }

        return data;
    }
}

let fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

let form = new FormBuilder(fields);
form.createForm();
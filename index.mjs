import inquirer from "inquirer";
import * as fs from "node:fs";
import * as qr from "qr-image"

inquirer
    .prompt([{
        name: "url", message: "Enter the url that you want to be a qr-code:"
    }])
    .then((answers) => {
        let url = answers.url
        let qrcode = qr.image(url, {type: "png"})
        qrcode.pipe(fs.createWriteStream("qrcode.png"))
    });
const fs = require('fs');
const pdfparse = require('pdf-parse');
const info = require('./data.json');

const pdffile = fs.readFileSync('2021-09-28_1.pdf');

//get information
const search = {};
pdfparse(pdffile).then(function (data) {
    // console.log(data.numpages)
    // console.log(data.info)
    // console.log(data.text)
    const text = data.text;
    const found =info.filter(function (doc) {
        const index1 = text.indexOf(doc.name);
        const index2 = text.indexOf(doc.expediente);
        if (index1 > 1 || index2 > 1) {
            doc.ok = true;
            return doc;
        } else {
            doc.ok = false;
        }
    });
    console.log(found);
})
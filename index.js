const fetch = require('node-fetch');

// fetch('https://espn.com')
// .then(response => {
//     return response.text();
// })
// .then(html => {
//     console.log(html);
// })

// requst to third party Data base that returns json object

// fetch('https://api.github.com/users/leov1963') // endpoint
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data);
// })

fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(dataArray => {
    // console.log(dataArray);
    let c102Object = dataArray[1]; // object
    let capsuleSerial = c102Object['capsule_serial'] // bracket notation for keys with _
    let capsuleStatus = c102Object.status;
    console.log(c102Object)
    console.log(capsuleSerial)
    console.log(capsuleStatus)
})
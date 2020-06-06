
let os = require('os');
let networkInterfaces = os.networkInterfaces();
let arr = networkInterfaces['enp3s0'];
let ip = arr[0].address;

export default `http://${ip}:3333/`;


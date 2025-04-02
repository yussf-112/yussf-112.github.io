const math = require('mathjs'); // Import math.js library for mathematical functions

function pwmm(n) {
    return Math.floor((math.factorial(n-1) + 1) / n);
}

function reqkey(n) {
    let interexp1 = String(Math.floor(Math.exp(n)));
    let interexp2 = interexp1.split('').reverse().join('');
    let interexp3 = interexp2.slice(0, 5);
    let interexp4 = interexp3.split('').reverse().join('');
    let res = "";
    for (let i = 0; i < interexp4.length; i++) {
        res += String.fromCharCode(parseInt(interexp4[i]) + 97);
    }
    let na = 'abcdefghijklmnopqrstuvwxyz';
    let ea = 'abocjzdgipetsvfmnulxykqrhw';
    let m = new Map(Array.from(na).map((el, idx) => [el, ea[idx]]));
    let tm = Array.from(res).map(char => m.get(char)).join('');
    return tm;
}

function requiem(mssg, n) {
    let key = reqkey(n);
    let na = 'abcdefghijklmnopqrstuvwxyz0123456789 -';
    let ea = 'ab5ocj9z6dg4i8p2et10sv3f7m nul-xykqrhw';
    let m = new Map(Array.from(na).map((el, idx) => [el, ea[idx]]));
    let cmssg = Array.from(mssg).map(char => m.get(char)).join('');
    let cym = "";
    for (let i = 0; i < cmssg.length; i++) {
        cym += cmssg[i] + cmssg[mssg.length - 1 - i] + key[i % 5];
    }
    return cym;
}

function rrequiem(cymssg) {
    let cyrm = "";
    for (let i = 0; i < cymssg.length; i++) {
        if (i % 3 === 0) {
            cyrm += cymssg[i];
        }
    }
    let na = 'abcdefghijklmnopqrstuvwxyz0123456789 -';
    let ea = 'ab5ocj9z6dg4i8p2et10sv3f7m nul-xykqrhw';
    let m = new Map(Array.from(ea).map((el, idx) => [el, na[idx]]));
    let mssg = Array.from(cyrm).map(char => m.get(char)).join('');
    return mssg;
}

// Example usage:
let message = "hello world";
let n = 5;
let encrypted = requiem(message, n);
console.log("Encrypted message:", encrypted);

let decrypted = rrequiem(encrypted);
console.log("Decrypted message:", decrypted);

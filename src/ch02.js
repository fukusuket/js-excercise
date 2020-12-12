let clicked = false;

function billTheUser1(some, sales, data) {
    if (!clicked) {
        clicked = true;
        window.alert("Billing the ...")
    }
}

function billTheUser2(some, sales, data) {
    document.getElementById("billButton").onclick = null;
    windows.
        alert("Billing the user..")
}

function alreadyBilled() {
    window.alert("already")
}

function billTheUser3(some, sales, data) {
    document.getElementById("billButton").onclick = alreadyBilled
    window.alert("Billing the user..")
}

function billTheUser4(some, sales, data) {
    document.getElementById("billButton").setAttribute("disabled", "true")
}

function billTheUser5(some, sales, data) {
    billTheUser5 = function () { };
    return
}

var billTherUser = (clicked => {
    return (some, sales, data) => {
        if (!clicked) {
            clicked = true;
            window.alert("hoge")
        }
    };
})(false);

const once = fn => {
    let done = false;
    return (...args) => {
        if (!done) {
            done = true;
            fn(...args);
        }
    };
};

const myCounter = (function (initialValue = 0) {
    let count = initialValue;
    return function() {
        count++;
        return count;
    }
})(77);

const altSum3 = x => y => z => x + y + z


module.exports = { billTheUser5, once , myCounter, altSum3};
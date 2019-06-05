

let url = "http://localhost:8080/JavaEEServer-1.0/api"
let userInfo;

function hmm() {
    console.log("HMMMMMMMMMM")
}

class Accounts {
    constructor(name) {
        this.name = name;
    }
}

const setuserInfo = (input) => userInfo = input.value;
fetchData().then((v) => {
    return fetchData();
    log(fetchData);
});
function fetchData(values, type, url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status >= 200 && req.status < 300) {
                    console.log("2");
                    resolve(req);
                } else {
                    reject("it fucked up")
                }
            }
        }
    });
    var values = req.responseText;
    req.open(type, "http://localhost:8080/JavaEEServer-1.0/api" + url);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(values);
}


function btnLoginGet() {
    var input = userInfo;
    fetchData(null, "GET", "/accounts/" + input).then((req) => {
        console.log(req.responseText);
    })
};


function bRegi() {
    var input = userInfo;
    console.log("1");
    let acc = new Accounts(input);
    acc = JSON.stringify(acc);
    fetchData(acc, "POST", "/application").then((req) => {
        console.log(req.responseText);
    })
};

function btnDelete() {
    var input = document.getElementById("userInfo").value;
    fetchData("DELETE", "/application/" + input).then((req) => {
        console.log(req.responseText);
    })
};


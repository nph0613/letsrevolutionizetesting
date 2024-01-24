var XMLHttpRequest = require('xhr2');
const baseURL = 'https://www.letsrevolutionizetesting.com/challenge.json';
let xhr = new XMLHttpRequest();
xhr.onload = function() {
    if (xhr.status != 200) {
        console.log("Error");
    } else {
        const response = JSON.parse(xhr.response);
        if (response.follow) {
            let index = response.follow.indexOf('?id=')
            let id = response.follow.substring(index);
            followURL(baseURL, id);  
        } else {
            console.log(response.message);
        }
    }
};

function followURL(baseURL, id) {
    console.log("still following...");
    xhr.open('GET', baseURL + id);
    xhr.send();
}

followURL(baseURL, '');
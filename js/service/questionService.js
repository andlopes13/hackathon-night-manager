getQuestions();

async function getQuestions(){
    console.log("trying to fetch data from api");
    fetch("http://192.168.10.139:8080/oznightmanager/api/question").then(parseToJson).then(populatePage)
    console.log("after fetch");
    console.log(answer);
}

function parseToJson(data) {
    return data.json();
}

function populatePage(data) {
    for(let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

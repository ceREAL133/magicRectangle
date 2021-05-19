let showKeyTrue = document.getElementById('showKeyTrue');
const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234key6789%^&"

let key = randomValueInitializator();

function randomValueInitializator() { 
    return possible.charAt(Math.floor(Math.random() * possible.length))
}

console.log(key);

let arr = [];

for (let i = 0; i < 10; i++){  //vertical quantity
    arr[i] = [];
    for (let j = 0; j < 10; j++) {  //horizontal quantity
        if (i + j === 9 && j !== 9) {
            arr[i][j] = key
        } else{
            arr[i][j] = randomValueInitializator();
        }
    }
}

let counter = 99;
document.write ('<table width="100%" border="4">');
for (i=0; i<=10; i++) {
    document.writeln("<tr>");
    
    for (j=0; j<10; j++){ ;
        document.write("<td>" + `${counter} __ ${arr[i][j]}` + "<\/td>")
        counter--;
    }
        document.writeln("<\/tr>");
}

document.write ("<\/table> ");

function showKey() {
    showKeyTrue.textContent = `this is your symbol- ${key}`
}


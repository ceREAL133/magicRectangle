let showKeyTrue = document.getElementById('showKeyTrue');
const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234key6789%^&"

let iq = 2;
let jq = 9;

let key = keyInitializator();

function keyInitializator() { 
    for (let i = 0; i < 1; i++){
        return possible.charAt(Math.floor(Math.random() * possible.length))
         
    }
}

console.log(key);

let arr = [];
    min = 0;
    max = 99;


for (let i = 0; i<11; i++){  //vertical quantity
    arr[i] = [null]
    for (let j = 0; j < 11; j++) {  //horizontal quantity
        
        arr[i][j] = possible.charAt(Math.floor(Math.random() * possible.length));
        
        if (i === iq && j === jq) {
            arr[i][j] = key;

            iq++;
            jq--;
        }        
    }
}

let counter = 99;
document.write ('<table width="100%" border="4">');
for (i=1; i<=11; i++) {
    document.writeln("<tr>");
    
    for (j=1; j<11; j++){ ;
        document.write("<td>" + `${counter} __ ${arr[i][j]}` + "<\/td>")
        counter--;
    }
      document.writeln("<\/tr>");
}

document.write ("<\/table> ");

function showKey() {
    showKeyTrue.textContent = `this is your symbol- ${key}`
}


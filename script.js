function shortenURL(){

let longUrl = document.getElementById("longUrl").value;

if(longUrl === ""){
alert("Please enter a URL");
return;
}

let randomString = Math.random().toString(36).substring(2,7);

let shortUrl = "https://short.ly/" + randomString;

document.getElementById("result").innerText = shortUrl;

document.getElementById("copyBtn").style.display = "inline-block";
}

function copyURL(){

let text = document.getElementById("result").innerText;

navigator.clipboard.writeText(text);

alert("Copied to clipboard!");
}

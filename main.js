console.log('This is my 1st JS');

for(var i=0;i<10;i++){
    console.log(i+1);
}
var wow = '';
for(var i=1;i<4;i++){
    wow += "wow"+i+"<br>";
}
document.querySelector('#output').innerHTML = wow;
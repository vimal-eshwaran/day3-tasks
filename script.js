var request= new XMLHttpRequest();
request.open('Get','https://restcountries.com/v3.1/all')
 request.send()
 request.onload=function(){
var data=request.response
 console.log(JSON.parse(data))
    var arr=(JSON.parse(data))


//using for loop

for( i=0;i<arr.length;i++){
console.log(arr[i].region);
}


//using for of loop

 for(const obj of arr){
 console.log(obj.area);
 }

 //using for in loop

 for(var index in arr){
 console.log(arr[index].capital);
}


//using for each loop

arr.forEach((element,index) => {
    console.log(element,index)
});
};
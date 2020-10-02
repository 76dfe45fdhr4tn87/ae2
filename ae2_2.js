const dataArray = [4,1,6,10,14];
const average = dataArray.reduce((a,b) => b += a);
const avg=average / dataArray.length;
console.log(avg);
const IS_ABSNET=0;
const IS_PRESENT=1;

let empcheck=Math.floor((Math.random()*10)%2);

if(empcheck == IS_ABSNET){
    console.log("Employee is Absent");
}
else{
    console.log("Employee is Present");
}

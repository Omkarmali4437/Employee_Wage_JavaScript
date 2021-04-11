const IS_PARTTIME=1;
const IS_FULLTIME=2;
const FULLTIME_HRS=8;
const PARTTIME_HRS=4;
const WAGE_PER_HR=20;

let emphrs=0;

let empcheck=Math.floor((Math.random()*10)%3);

switch(empcheck){
    case 1:
        emphrs=PARTTIME_HRS;
        break;
    case 2:
        emphrs=FULLTIME_HRS;
        break;
    default:
        emphrs=0;
        break;
}

let empWage=emphrs*WAGE_PER_HR;
console.log("Daily Wage of a employee is: "+empWage);
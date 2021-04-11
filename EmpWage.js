const IS_PARTTIME=1;
const IS_FULLTIME=2;
const FULLTIME_HRS=8;
const PARTTIME_HRS=4;
const WAGE_PER_HR=20;

function getempHrs(empcheck){
    switch(empcheck){
        case 1:
            return PARTTIME_HRS;
        case 2:
            return FULLTIME_HRS;
        default:
            return 0;
    }
}

let emphrs=0;
let empcheck=Math.floor((Math.random()*10)%3);
emphrs=getempHrs(empcheck);
let empWage=emphrs*WAGE_PER_HR;
console.log("Daily Wage of a employee is: "+empWage);
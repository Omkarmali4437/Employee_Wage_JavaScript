const IS_PARTTIME=1;
const IS_FULLTIME=2;
const FULLTIME_HRS=8;
const PARTTIME_HRS=4;
const WAGE_PER_HR=20;
const MAX_NUMBER_OF_WORKING_DAYS=20;
const TOTAL_WORKING_HRS=100;

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

let totalWorkinghrs=0;
let totalworkingDays=0;
while(totalWorkinghrs<=TOTAL_WORKING_HRS && totalworkingDays<MAX_NUMBER_OF_WORKING_DAYS){
    totalworkingDays++;
    let empcheck=Math.floor((Math.random()*10)%3);
    totalWorkinghrs+=getempHrs(empcheck);
}
let empWage=totalWorkinghrs*WAGE_PER_HR;
console.log("Total Hours: "+totalWorkinghrs);
console.log("Total Working Days: "+totalworkingDays);
console.log("Daily Wage of a employee is: "+empWage);
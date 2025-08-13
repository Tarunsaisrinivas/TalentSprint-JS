// need to print the day of the week based on a number input

// let dayNumber = process.argv[2];
let dayNumber = 5;

switch (dayNumber % 7) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("invalid day number");
}

// leap year , number / 7 day of the week, if mont = jan then how many days

// let year = 2020;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
//   console.log(`${year} is a leap year`);
// else console.log(`${year} is not a leap year`);
// 8 problem Leap Year switch case

let leapyear = 1600;
switch (true) {
  case leapyear % 400 === 0:
    console.log("leap year");
    break;
  case leapyear % 100 === 0:
    console.log("not a leap year");
    break;
  case leapyear % 4 === 0:
    console.log("leap year");
    break;
  default:
    console.log("not a leap year");
    break;
}

// 9 problem Month Days switch case without function

// let monthName = process.argv[2] ;
let monthName = "May";
monthName =
  monthName.charAt(0).toUpperCase() + monthName.slice(1).toLowerCase();
let year = 2024;

switch (monthName) {
  case "January":
    console.log(`${monthName} has 31 days`);
    break;
  case "February":
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      console.log(`${monthName} has 29 days (leap year)`);
    } else {
      console.log(`${monthName} has 28 days (not a leap year)`);
    }
    break;
  case "March":
    console.log(`${monthName} has 31 days`);
    break;
  case "April":
    console.log(`${monthName} has 30 days`);
    break;
  case "May":
    console.log(`${monthName} has 31 days`);
    break;
  case "June":
    console.log(`${monthName} has 30 days`);
    break;
  case "July":
    console.log(`${monthName} has 31 days`);
    break;
  case "August":
    console.log(`${monthName} has 31 days`);
    break;
  case "September":
    console.log(`${monthName} has 30 days`);
    break;
  case "October":
    console.log(`${monthName} has 31 days`);
    break;
  case "November":
    console.log(`${monthName} has 30 days`);
    break;
  case "December":
    console.log(`${monthName} has 31 days`);
    break;
  default:
    console.log("Invalid month name");
}


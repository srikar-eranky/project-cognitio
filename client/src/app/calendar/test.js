//year
const year = new Date().getFullYear();
const lastYear = year - 1;
const nextYear = year + 1;

//months
//month
let month = new Date().getMonth(); //from 0 - 11 (jan - dec)

//what day does month start on
const startWeekDay = new Date(year, month, 1).getDay();

//days in month
const daysInGivenMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// Calculate days of the month
const daysOfCurrMonth = Array.from(
  { length: daysInGivenMonth(year, month) },
  (_, i) => i + 1
);

//calculate days before month starts
function findDaysBeforeStart() {
  const prevMonth = month - 1;
  const daysOfPrevMonth = Array.from(
    { length: daysInGivenMonth(year, prevMonth) },
    (_, i) => i + 1
  );
  const daysToExtract = startWeekDay;
  return daysOfPrevMonth.slice(-daysToExtract);
}

//calculate days after month ends
function findDaysAfterStart() {
  const nextMonth = month + 1;
  const daysOfNextMonth = Array.from(
    { length: daysInGivenMonth(year, nextMonth) },
    (_, i) => i + 1
  );
  const daysToExtract = 42 - (daysOfCurrMonth.length + daysBeforeStart.length);
  return daysOfNextMonth.slice(0, daysToExtract);
}

const daysBeforeStart = findDaysBeforeStart();
const daysAfterStart = findDaysAfterStart();

const days = [...daysBeforeStart, ...daysOfCurrMonth, ...daysAfterStart];

console.log(days);

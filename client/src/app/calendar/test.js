//year
const year = new Date().getFullYear();

//months
let month = new Date().getMonth();
const prevMonth = month - 1;
const nextMonth = month + 1;
console.log(nextMonth);

//what day does month start on
const startWeekDay = new Date(year, month, 1).getDay();

//days in month
const daysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const daysBeforeStart = Array.from(
  { length: startWeekDay },
  (_, i) => `placeholder-${i}`
);

// Calculate days of the month
const daysOfMonth = Array.from(
  { length: daysInMonth(year, month) },
  (_, i) => i + 1
);

const daysAfterStart = Array.from(
  { length: 42 - (daysOfMonth.length + daysBeforeStart.length) },
  (_, i) => `placeholder-${i}`
);

const days = [...daysBeforeStart, ...daysOfMonth, ...daysAfterStart];

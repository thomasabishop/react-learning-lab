function generateWeek(weeks) {
  const week = [];
  for (let i = 0; i < weeks; i++) {
    for (let j = 0; j < 7; j++) {
      week.push(Math.trunc(Math.random() * 10));
    }
  }
  return week;
}

export function generateYear() {
  const year = [];
  for (let i = 0; i < 52; i++) {
    year.push(generateWeek(1));
  }
  return year;
}
//console.log(generateWeekData(4));
console.log(generateYear());

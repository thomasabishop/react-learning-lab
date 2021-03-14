const noCommit = 0;

function generateWeek(weeks, dataExpression) {
  const week = [];
  for (let i = 0; i < weeks; i++) {
    if (dataExpression !== 'blank') {
      for (let j = 0; j < 7; j++) {
        week.push(Math.trunc(Math.random() * 10));
      }
    } else {
      for (let j = 0; j < 7; j++) {
        week.push(noCommit);
      }
    }
    return week;
  }
}

export function generateYear() {
  const year = [];
  for (let i = 0; i < 52; i++) {
    year.push(generateWeek(1, 'blank'));
  }
  return year;
}
//console.log(generateWeekData(4));
//console.log(generateYear());

export function generateCommitData(distributionType) {
  const year = [];
  if (distributionType !== 'empty') {
    for (let i = 0; i < 52; i++) {
      year.push(generateWeek(1));
    }
  } else {
    for (let i = 0; i < 52; i++) {
      year.push(generateWeek(1, 'blank'));
    }
  }
  return year;
}

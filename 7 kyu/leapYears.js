function isLeapYear(year) {
  let answer = null;
  if (year % 4 === 0 && year % 400 === 0) {
    answer = true;
  } else if (year % 4 === 0 && year % 400 === 0 && year % 100 === 0) {
    answer = true;
  } else if (year % 100 === 0) {
    answer = false
    } else if (year % 4 === 0 ) {
    answer = true
    } else {
    answer = false 
    }
  return answer;
}
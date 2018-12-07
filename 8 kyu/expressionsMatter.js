function expressionMatter(a, b, c) {
  let num1 = a * (b + c);
  let num2 = (a + b) * c;

  let num3 = a + b * c;
  let num4 = a * b + c;

  let num5 = a * b * c;
  let num6 = a + b + c;

  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 && num1 > num6) {
    return num1;
  } else if (num2 > num3 && num2 > num4 && num2 > num5 && num2 > num6) {
    return num2;
  } else if (num3 > num4 && num3 > num5 && num3 > num6) {
    return num3;
  } else if (num4 > num5 && num4 > num6) {
    return num4;
  } else if (num5 > num6) {
    return num5;
  } else {
    return num6;
  }
}

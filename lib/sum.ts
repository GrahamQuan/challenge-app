// (1) simple for loop
// (1.1) base condition
// (1.2) make sure condition is: i <= n
function sum(n: number): number {
  if (n === 0 || n === 1) return n;

  // sum = old_sum + n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// (2) recursive version
// (2.1) base condition
// (2.2) sum up 1 to n, is equals from n to 1
function recursiveSum(n: number): number {
  if (n === 0 || n === 1) return n;

  return n + recursiveSum(n - 1);
}

// (3) formula
function arithmetiSeries(n: number): number {
  return (n / 2) * (n + 1);
}

// test all sum functions
function getAllAnswers(n: number): void {
  console.log(`sum(${n}) = ${sum(n)}`);
  console.log(`recursiveSum(${n}) = ${recursiveSum(n)}`);
  console.log(`arithmetiSeries(${n}) = ${arithmetiSeries(n)}`);
}

getAllAnswers(5);

module.exports = function zeros(expression) {
  let result = 0;
  let factors = expression.split('*');
  let oddNumbers = 0;
  for (let i = 0; i < factors.length; i++) {
    let limit = parseInt(factors[i]);
    let operation = factors[i].replace(limit, '');
    // про алгоритм для факториала прочитал на сайте http://javabypatel.blogspot.com/2017/05/count-trailing-zeros-in-factorial-of-number.html
    if (operation == '!') {
      let divider = 5;
      while (limit / divider >= 1) {
        result += Math.floor(limit / divider);
        divider *= 5;
      }
    // в этом случае алгоритм для факториала не подходит
    } else if (operation == '!!') { 
      if (limit % 2 != 0) oddNumbers++;
      while (limit >= 5) {
        let divider = 5;
        // нужно проверять делимость на 5/25 и т.д. каждого множителя
        while ((limit % divider) == 0) {
          result++;
          divider *= 5;
        }
        limit -= 2;
      }
    }
  }
  // если вдруг все исходные числа нечетные, то нулей в сумме на конеце числа не получится (не сможем 5 помножить на 2)
  return oddNumbers == factors.length ? 0 : result;
}
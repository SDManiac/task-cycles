/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    let i = start;
    if (start % 2 != 0) i += 1;
    for (i; i <= end; i += 2) {
        sum += i;
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте делеwние этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let cnt = 0;
    while (a > 0.1) {
        a /= 2;
        cnt++;
    }
    return cnt;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let i = 2;
    let l = message.length - 2;
    let m2 = message.substr(0, 2);
    do {
        m2 = m2 + '_' + message.substr(i + 1, 2);
        i += 3;
    } while (i < l);
    return m2;
}

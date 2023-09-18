let tests = [
    ['1 + 1 = 2', true],
    ['1 + 2 = 2', false],
    ['1 * 1 = 0', false],
    ['3 + 1 = 4', true],
];

let count = tests.length;
let sumRightAnswer = 0;
let userAnswer = 0;


for (let i = 0; i < count; i++) {
    
    let curNum = i + 1;

    let userAns = confirm('(' + curNum + '/' + count + ') ' + tests[i][0]);
    
    if (userAns === tests[i][1]) {
    alert('OK !!!');
    sumRightAnswer ++;
    } else {
    alert('FAIL !!!')
    }
   // console.log(sumRightAnswer , Math.round(sumRightAnswer * (12 / count)));
   // 
}
// 12 балів це усі правильні відповіді
alert(
    'Ваш результат' + '\n' +
    Math.round(sumRightAnswer * (12 / count)) + ' балів з 12' + '\n' +
    'До побачення )))'
)
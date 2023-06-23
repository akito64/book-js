console.log('test')
//
//
//

function fizzbuzz (num) {
// 処理...  
    if((num % 3 === 0) && (5 === 0)) {
        return 'fizzbuzz';
    } else if(num % 3 === 0) {
        return 'Fizz!';
    } else if(num % 5 === 0) {
        return 'Buzz!';
    } else {
        return num;
    }
}

//一番上の行が3で割り切れるのと5で割り切れる数は fizzbuzzと表すように書いた
//2番目の　elseは　３でしか割り切れない数字には　Fizz!　と表すように書いた
//3番目の　elseは　5でしか割り切れない数字には　Buzz!　と表すように書いた
//4番目の　elseは　両方で割り切れない場合はその数値をそのまま返すよう書いた
//



fizzbuzz(15);
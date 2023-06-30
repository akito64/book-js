console.log('test')

//1. 要件
//- 100までのフィボナッチ数列
//2. フィボナッチ数列とは？
  //  - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …となるような数列
    
    //フィボナッチ数列の条件は？
    
    //- 最初の2つの数が0と1
    //- その後の数が直前の2つの数の和になるような数列
    
    //つまり以下のような漸化式


    function fibonacci(n) {
        // n === 1のとき入力値を返す
      if (n <= 1) {
        return n 
        
      }
        // n ==1 (n . 1)　のとき fibonacci(n-1) のときの数と
         // fibonatti(n-2) のときのの数を足したものを返す
      return fibonacci( n - 1 ) + fibonacci( n - 2 )
    }

console.log("fibonacci")
let i = 0
while ( i < 30 ) {
  console.log(fibonacci(i))
   i = i + 1
  
}
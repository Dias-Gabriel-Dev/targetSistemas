function fibonacci(numero) {
 let fib1 = 0, fib2 = 1;

 while (fib2 < numero) {
    [fib1, fib2] = [fib2, fib1 + fib2];
 }
 if (numero === fib2) {
    return 'O número informado pertence a sequência Fibonacci'
 } else {
    return 'O número informado não pertence a sequência Fibonacci'
 }
}
console.log(fibonacci(10));




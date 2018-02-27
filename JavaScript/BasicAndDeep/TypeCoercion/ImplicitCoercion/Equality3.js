// falsy 비교

// 다른 것들은 Equality1 을 통해 이해가 되지만 다음은 주의해야 한다.
// 다음 값들은 모두 true

console.log('false == "" : ', false == "");
console.log('false == [] : ', false == []); // -> [] == ![] 는 true. ![] -> false, [] == false -> true
console.log('"" == 0 : ', "" == 0);
console.log('"" == [] : ', "" == []);
console.log('0 == [] : ', 0 == []);
console.log('0 == "\\n" : ', 0 == "\n"); // 공백문자("  ", "\n", "\n  " 등)는 ToNumber()를 통해 0으로 변환

// 동등 연산에서 true, false 등을 직접 쓰지 않기로 하고 우리가 주의해야 할 것은 
// == "", == [], == 0 이다.

// 따라서 다음과 같이 주의하자.

// 피연산자 중 하나가 ture 또는 false일 가능성이 있으면 절대로 == 연산자는 사용하지 않는다.
// 피연산자 중 하나가 [], "", 0이 될 가능성이 있으면 가급적 == 연산자는 사용하지 않는다.
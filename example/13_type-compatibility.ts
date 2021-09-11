// 인터페이스
interface A {
  name: string;
  skill: string;
}

interface B {
  name: string
}

var developer: A;
var person: B;

// developer의 타입에 person 타입을 덮어씌울 수 없지만, 반대는 가능하다.
// 이유는 developer의 타입 A에는 타입 B를 포함하므로 person타입은 developer 타입을 호환할 수 있다. (skill 타입이 존재하므로)
// 그냥 쉽게 포함관계인지 아닌지 보면 될듯하다.


developer = person; // X
person = developer; // O



// 함수의 호환을 보도록하면,
// add의 인자는 a뿐이고, sum의 인자는 a, b두 개이므로,
// add = sum의 경우 인자 b의 타입이 존재하지 않기때문에 호환이 불가능하지만,
// sum = add의 경우 sub이 add를 포함할 수 있어서 호환 가능하다.
var add = function(a: number) {
  // console.log(a)
}

var sum = function(a: number, b: number) {
  // return a + b
}

add = sum
sum = add


// 제네릭의 타입 호환을 보도록하면,
// 타입이 없는 Empty의 경우, 두 변수의 선언 타입이 달라도 호환이 가능하지만(interface의 타입이 없으니 당연하겠지만..),
// 타입이 있는 NotEmpty의 경우, 두 변수의 선언 타입이 달라서 호환이 불가능하다.

interface Empty<T> {
  // ...
}

var empty1: Empty<number>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T
}

var notEmpty1: NotEmpty<number>;
var notEmpty2: NotEmpty<string>;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;

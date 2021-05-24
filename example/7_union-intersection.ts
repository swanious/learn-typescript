function logMessage(value: string) {
  console.log(value);
}
function logMessage(value: number) {
  console.log(value);
}
function logMessage(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage(value: string | number) {
  console.log(value);
}

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}


// 유니온(|)과 인터섹션(&)

// 유니온
// 인터페이스로 지정한 파라메터 타입은 인터페이스의 공통 속성만 적용할 수 있다.
// function askSomeone(someone: Developer | Person) {
//   someone.name; // O
//   someone.skill; // X
//   someone.age; // X
// }

// askSomeone({name: '디벨로퍼', skill: '웹 개발'})  // Developer
// askSomeone({name: '캡틴', age: 100})  // Person

// 인터섹션
// Developer와 Person이 가진 모든 속성 사용할 수 있다.
function askSomeone(someone: Developer & Person) {
  someone.name; // O
  someone.skill; // O
  someone.age; // O
}

// X --> Developer와 Person의 속성을 모두 써야하므로 age를 써줘야함
askSomeone({name: '디벨로퍼', skill: '웹 개발', age: 100})  
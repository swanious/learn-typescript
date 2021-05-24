function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray<T>(value: T): T {
  value.length; // X
  return value;
}

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}
getAllowedOptions('nothing');
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name



// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {value: 'abc', selected: false}

// 인터페이스에 제네릭 선언하기
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = { value: 10, selected: false }


// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]):T[] {
//   console.log(text.length)
//   text.forEach(function (text) {
//     console.log(text);
//   })
//   return text;
// }

// logTextLength<string>(['hi', 'abc']);


// 제네릭 타입 제한 2 - 정의된 타입 이용하기
// interface LengthType {
//   length : number;
// }

// function logTextLength<T extends LengthType>(text: T): T {
//   text.length;
//   return text;
// }
// logTextLength(10);


// 제네릭 타입 제한 3 - keyof
// 인터페이스에 지정된 타입 중 키(keyof)만 타입으로 선언할 수 있음
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name")
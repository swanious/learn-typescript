// function fetchItems() {
//   let items = ['a','b','c'];
//   return items;
// }

// let result = fetchItems();
// console.log(result);

// 타입스크립트는 비동기 코드는 unknown(알수없음)을 반환
// ctrl + Promise를 눌러보면 제네릭으로 타입을 선언해놓은 것을 볼 수 있음.
function fetchItems(): Promise<string[]> {
  let items = ['a','b','c'];
  return new Promise(function (resolve) {
    resolve(items);
  })
}

fetchItems();